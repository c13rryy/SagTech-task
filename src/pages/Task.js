import React, { useEffect, useState } from 'react';

import { Outlet /* useRouteLoaderData */, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getId } from '../store/idTaker';

import { getData } from '../firebase';



import ShowTask from '../components/ShowTask';




const Task = () => {
  const {date} = useSelector((state) => state.idTaker);
  const { user } = useSelector((state) => state.auth);
  const [tasks, setTasks] = useState([]);

  const  {index} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getId(index));
  }, [index])

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getData(date);
      setTasks(loadedTasks);
    };
    loadTasks();
  }, [date]);




  const className = !user ? 'bg' : '';
  return (
    <React.Fragment>
      <section className={className}>
        <h1>Taskpage</h1>
        {!user && <p className="invalid">CONTENT INVALID</p>}
      </section>
      <ShowTask info={tasks} />
      <Outlet  />
    </React.Fragment>
  );
};

export default Task;

