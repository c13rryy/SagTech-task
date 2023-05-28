import React, { useEffect, useMemo, useState } from "react";

import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getId, numberDate } from "../store/taskSlice";

import { getData } from "../providers/tasks/tasks";
import moment from 'moment';
import 'moment/locale/ru';  
import { getAllInfo } from "../store/information";

import ShowTask from "../components/ShowTasks/ShowTask";

import { infoForCalendar } from "../store/information";

import { getDataTask } from "../providers/tasks/tasks";

import { deleteTaskByDate } from '../providers/tasks/tasks';  

import AnimatedPage from "./Animated";
import Wrapper from "../UI/Wrapper";

import Button from "../UI/Button";
import { useCallback } from "react";

const Task = () => {
  const { date } = useSelector((state) => state.taskSlice);
  const newDate = useMemo(() => date , [date]);
  const { information } = useSelector((state) => state.information);
  const { realDates } = useSelector((state) => state.taskSlice);
  const newRealDates  = useMemo(() => realDates, [realDates]);
  const {correctDate} = useSelector((state) => state.taskSlice);
  const newCorrectDate = useMemo(() => correctDate, [correctDate]);
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const { index } = useParams();

  const [isDataLoaded, setIsDataLoaded] = useState(false);
   const [reloadPage, setReloadPage] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getId(index));

    dispatch(numberDate(newRealDates[index]));
  }, [index, newRealDates]);

  const loadTasks = useCallback(async () => {
    setIsDataLoaded(false);
     if(newCorrectDate !== undefined && newCorrectDate !== null){
      const loadedTasks = await getData(newCorrectDate);
      dispatch(getAllInfo(loadedTasks));
     }
    setIsDataLoaded(true);
  }, [newCorrectDate, reloadPage]);

  useEffect(() => {
    loadTasks();
  }, [newCorrectDate, reloadPage]);

  const loadInf = useCallback(async () => {
    const loadedTasks = await getDataTask();
    dispatch(infoForCalendar(loadedTasks));
    setReloadPage(false);
  }, [reloadPage]);

  useEffect(() => {
    loadInf();
  }, [reloadPage]);

  const memoizedInformation = useMemo(() => {
    return information;
  }, [information]);

  useEffect(() => {
    const interval = setInterval(() => {
      const delDat = moment().format('DD-MM-YYYY');
      const currentTime = moment();
      const targetTime = moment().set({ hour: 23, minute: 59, second: 59 });
      if (currentTime.isSame(targetTime)) {
        deleteTaskByDate(delDat);
        setReloadPage(true);

      }
    }, 1000);

    return () => {
      clearInterval(interval); 
    };
  }, []); 

  const className = !user ? "bg" : "";
  return (
    <React.Fragment>
      <AnimatedPage>
        <div>
          <Wrapper>
            <section className={className}>
              {!user && <p className="invalid">CONTENT INVALID</p>}
            </section>

            {user && location.pathname === `/${newDate}` && isDataLoaded && (
              <ShowTask info={memoizedInformation} />
            )}

            {isDataLoaded &&
              memoizedInformation.length === 0 &&
              location.pathname === `/${newDate}` && (
                <div>
                  <Link to={`/${newDate}/add-task`}>
                    {" "}
                    <Button>Add Task</Button>
                  </Link>
                </div>
              )}
            {user && <Outlet />}
          </Wrapper>
        </div>
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Task;
