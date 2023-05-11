import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Calendar from "../components/Calendar";

import { useSelector } from "react-redux";
const RootLayout = () => {
   const { user } = useSelector((state) => state.auth);


  

   return (
     <Fragment>
       <Navigation />
        <main>
        { user && <Calendar />}
        <Outlet />
        </main>
     </Fragment>
   )
};

export default RootLayout;