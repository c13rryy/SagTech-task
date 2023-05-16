import React, { useState } from 'react';

import classes from './Navigation.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from "../firebase";
import { useDispatch, useSelector } from 'react-redux';


import { logout as logoutHandle } from "../store/auth";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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

const toogleHandle = () => {
  setIsOpen(!isOpen);
}

const {date} = useSelector((state) => state.idTaker);
  return (
    <header className={classes.header}>
      <div>
        <Link className={classes.logo} to='/0'>Tassker</Link>
      </div>
      <nav className={classes.nav} >
        <ul className={classes.list}>
          {!user && <li>
            <Link to='reg' className={classes.txt}>Auth</Link>
            </li>}   

            {user && <li>
              <Link to={`/${date}/add-task`} className={classes.txt}>add task</Link>
              </li>}           


           {user &&  <li>
          <button onClick={handleLogout}>Log out</button> 
          </li>}
        </ul>


        {user &&  <button  onClick={toogleHandle} className={classes.butmenu}>menu</button>}

       
      </nav>

     {isOpen && <div className={classes.menu}>
          <ul className={classes.listwo}>
          {!user && <li>
            <Link to='reg' className={classes.txt}>Auth</Link>
            </li>}   

            {user && <li>
              <Link to={`/${date}/add-task`} className={classes.txt}>add task</Link>
              </li>}           


           {user &&  <li>
          <button onClick={handleLogout}>Log out</button> 
          </li>}
        </ul>
          <div className={classes.close} onClick={toogleHandle}>close</div>
        </div>} 
    </header>
  );
};

export default Navigation;
