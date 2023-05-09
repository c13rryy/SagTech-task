import React from 'react';

import { Outlet, useRouteLoaderData } from 'react-router-dom';

import { useSelector } from 'react-redux';



import ShowTask from '../components/ShowTask';



const Task = () => {
  const { user } = useSelector((state) => state.auth);



  const  data = useRouteLoaderData('task-data');
  






  const className = !user ? 'bg' : '';
  return (
    <React.Fragment>
      <section className={className}>
        <h1>Taskpage</h1>
        {!user && <p className="invalid">CONTENT INVALID</p>}
      </section>
      <ShowTask info={data} />
      <Outlet />
    </React.Fragment>
  );
};

export default Task;

