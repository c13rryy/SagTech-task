import React, {useEffect} from 'react';
import { Fragment } from 'react';
import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Calendar from '../components/Calendar';

import { useSelector } from 'react-redux';
const RootLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { date } = useSelector((state) => state.idTaker);
  const className = !user ? 'bg' : '';
  useEffect(() => {
    if (user){
       return navigate(`${date}`);
    }
 },[user]);
  return (
    <Fragment>
      {location.pathname === '/' || location.pathname === `/${date}` && <Navigation />}
      <section  className={className}>
        {!user && location.pathname === '/' && <p className="invalid">CONTENT INVALID</p>}
      </section>
      <main>
        {user && location.pathname === `/${date}` && <Calendar />}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
