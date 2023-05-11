import React, { useEffect } from 'react';
import MoreTaskInfo from '../components/MoreTaskInfo';
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from 'react-router-dom';

import { getTaskID } from '../store/idTaker';
const MoreTask = () => {
  const {information} = useSelector(state => state.showData);
  const {id} = useParams();


  const dispatch = useDispatch();

  const taskInfo = information.find(task => task.id === id);

  useEffect(() =>{
     dispatch(getTaskID(id));
  }, [id]);

  return (
    <>
      {taskInfo && <MoreTaskInfo inf={taskInfo} />}
      <Outlet />
    </>
  );
};

export default MoreTask;
