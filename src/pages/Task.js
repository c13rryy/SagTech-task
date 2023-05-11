import React, { useEffect } from 'react';

import { Outlet /* useRouteLoaderData */,  useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getId } from '../store/idTaker';

import { getData } from '../firebase';

import { getAllInfo } from '../store/showData';

import classes from '../pages/Task.module.css'

import ShowTask from '../components/ShowTask';





const Task = () => {
  const {date} = useSelector((state) => state.idTaker);
  /* const {taskId} = useSelector((state) => state.idTaker); */
  const  {information} = useSelector((state) => state.showData);
  const { user } = useSelector((state) => state.auth);

  const  {index} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getId(index));
  }, [index])

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getData(date);
      dispatch(getAllInfo(loadedTasks));
      
    };
    loadTasks();
  }, [date]);
  




  const className = !user ? 'bg' : '';
  return (
    <React.Fragment>
      <section  className={className}>
        {user && <h1 className={classes.somegap}>Your Tasks</h1>}
        {!user && <p className="invalid">CONTENT INVALID</p>}
      </section>
      
      {user && <ShowTask info={information} />}
     {user &&  <Outlet  />}
    </React.Fragment>
  );
};

export default Task;

