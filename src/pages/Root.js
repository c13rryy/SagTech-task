import React from 'react';
import { Fragment } from 'react';
import {  Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Calendar from '../components/Calendar';

import { useSelector } from 'react-redux';
import StartPage from '../components/StartPage';
const RootLayout = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const { date } = useSelector((state) => state.idTaker);
  return (
    <Fragment>
      {location.pathname === `/${date}` && <Navigation />}
      {location.pathname === '/' && <StartPage />}
      <main>
        {user && location.pathname === `/${date}` && <Calendar />}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
