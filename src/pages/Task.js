import React, { useEffect } from 'react';

import { Outlet /* useRouteLoaderData */,  useLocation,  useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getId } from '../store/idTaker';

import { getData } from '../firebase';

import { getAllInfo } from '../store/showData';

import classes from '../pages/Task.module.css'

import ShowTask from '../components/ShowTask';

import { infoForCalendar } from '../store/showData';

import { getDataTask } from '../firebase';





const Task = () => {
  const {date} = useSelector((state) => state.idTaker);
  const  {information} = useSelector((state) => state.showData);
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();
  const  {index} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getId(index));
  }, [index])

  useEffect(() => {
   if(location.pathname === `/${date}`){
    const loadTasks = async () => {
      const loadedTasks = await getData(date);
      dispatch(getAllInfo(loadedTasks));
      
    };
    loadTasks();
   }
  }, [date, location.pathname]);

  useEffect(() => {
    const loadInf = async () => {
      const loadedTasks = await getDataTask();
      dispatch(infoForCalendar(loadedTasks));
   }
   loadInf();
  }, []);




  const className = !user ? 'bg' : '';
  return (
    <React.Fragment>
      <section  className={className}>
        {user && location.pathname === `/${date}` && <h1 className={classes.somegap}>Your Tasks</h1>}
        {!user && <p className="invalid">CONTENT INVALID</p>}
      </section>
      
      {user && location.pathname === `/${date}` && <ShowTask info={information} />}
     {user &&  <Outlet  />}
    </React.Fragment>
  );
};

export default Task;

