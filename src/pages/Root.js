import React, { useMemo } from "react";
import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/HeaderNavigation/Navigation";
import Calendar from "../components/Calendar/Calendar";

import { useSelector } from "react-redux";
import StartPage from "../components/StartPage/StartPage";
const RootLayout = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const newUser = useMemo(() => user,[user]);
  const { date } = useSelector((state) => state.taskSlice);

  useEffect(() => {
    if (newUser && location.pathname === `/${date}`) {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }
  }, [date, location.pathname, newUser]);

  return (
    <Fragment>
      {location.pathname === `/${date}` && <Navigation />}
      {location.pathname === "/" && <StartPage />}
      <main>
        {showCalendar && <Calendar />}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
