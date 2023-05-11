import React from 'react';

import classes from './Navigation.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from "../firebase";
import { useDispatch, useSelector } from 'react-redux';



import { logout as logoutHandle } from "../store/auth";


const Navigation = () => {
  const { user } = useSelector(state => state.auth);
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
        <Link className={classes.logo} to='/0'>Tassker</Link>
      </div>
      <nav >
        <ul className={classes.list}>
          {!user && <li>
            <Link to='reg' className={classes.txt}>Auth</Link>
            </li>}              


           {user &&  <li>
          <button onClick={handleLogout}>Log out</button> 
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
