 import React, { useEffect, useState } from 'react';

import { Link ,Outlet ,  useLocation,  useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getId } from '../store/idTaker';

import { getData } from '../firebase';

import { getAllInfo } from '../store/showData';

import classes from '../pages/Task.module.css'

import ShowTask from '../components/ShowTask';

import { infoForCalendar } from '../store/showData';

import { getDataTask } from '../firebase';

/* import { CSSTransition } from 'react-transition-group';

import 'animate.css'; */
import AnimatedPage from './Animated';




const Task = () => {
  const {date} = useSelector((state) => state.idTaker);
  const  {information} = useSelector((state) => state.showData);
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const  {index} = useParams();
  
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isReloading, setIsReloading] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getId(index));
  }, [index])

  useEffect(() => {
   if(location.pathname === `/${date}`){
    const loadTasks = async () => {
      setIsDataLoaded(false);
      const loadedTasks = await getData(date);
      dispatch(getAllInfo(loadedTasks));
      setIsDataLoaded(true);
      setIsReloading(true);
    };
    loadTasks();
   }
  }, [date, location.pathname]);


   console.log(isReloading)

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
      <AnimatedPage>
      <div> 
      <section  className={className}>
        {user && location.pathname === `/${date}` && <h1 className={classes.somegap}>Your Tasks</h1>}
        {!user && <p className="invalid">CONTENT INVALID</p>}
      </section>
      
      {user && location.pathname === `/${date}` && isDataLoaded && <ShowTask info={information} />}

      {isDataLoaded && information.length === 0 && location.pathname === `/${date}` &&  <div className={classes.nobutt}>
       <Link to={`/${date}/add-task`}> <button >Add Task</button></Link>
      </div>}
     {user &&  <Outlet  />}
      </div>
    
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Task;

 

