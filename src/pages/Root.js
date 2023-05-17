import React, {useEffect} from 'react';
import { Fragment } from 'react';
import {  Outlet, redirect, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Calendar from '../components/Calendar';

import { useSelector } from 'react-redux';
const RootLayout = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const { date } = useSelector((state) => state.idTaker);
  useEffect(() => {
    if (user){
      console.log(date)
       return redirect(`${date}`);
    }
    if(!user){
      console.log('reg')
      return redirect('/reg');
    }
 },[user]);
  return (
    <Fragment>
      {location.pathname === `/${date}` && <Navigation />}
      <button>sda</button>
      <main>
        {user && location.pathname === `/${date}` && <Calendar />}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
