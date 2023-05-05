import React from 'react';

import classes from './Navigation.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from "../firebase";
import { useDispatch } from 'react-redux';



import { logout as logoutHandle } from "../store/auth";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async() => {
    await logout();
    dispatch(logoutHandle());
    navigate('/login', {
        replace: true,
    })
}
  return (
    <header className={classes.header}>
      <div>
        <Link className={classes.logo} to='/'>Tassker</Link>
      </div>
      <nav >
        <ul className={classes.list}>
          <li>
            <Link to='reg' className={classes.txt}>Authentication</Link>
          </li>

          <li>
          <button onClick={handleLogout}>ss</button> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
