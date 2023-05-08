import React from 'react';

import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';



const Task = () => {
  const { user } = useSelector((state) => state.auth);

  const className = !user ? 'bg' : '';
  return (
    <React.Fragment>
      <section className={className}>
        <h1>Taskpage</h1>

        {!user && <p className="invalid">CONTENT INVALID</p>}
      </section>
      <Outlet />
    </React.Fragment>
  );
};

export default Task;

