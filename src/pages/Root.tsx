import React, { useMemo } from "react";
import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/HeaderNavigation/Navigation";
import Calendar from "../components/Calendar/Calendar";
import StartPage from "../components/StartAndError/StartPage/StartPage";
import { useAppSelector } from "../store";

const RootLayout: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const { date } = useAppSelector((state) => state.taskSlice);

  const locationLogicWithDate = useMemo(
    () => location.pathname === `/${date}`,
    [location.pathname, date]
  );

  const defoltLocation = useMemo(
    () => location.pathname === "/",
    [location.pathname]
  );

  useEffect(() => {
    if (user && locationLogicWithDate) {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }
  }, [locationLogicWithDate, user]);

  return (
    <Fragment>
      {locationLogicWithDate && <Navigation />}
      {defoltLocation && <StartPage />}
      <main>
        {showCalendar && <Calendar />}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
