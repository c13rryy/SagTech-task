import React, { useEffect } from 'react';
import MoreTaskInfo from '../components/MoreTaskInfo';
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from 'react-router-dom';
import { getDataTask } from '../firebase';
import { getTaskID } from '../store/idTaker';
import { getAllInfo } from '../store/showData';
const MoreTask = () => {

  useEffect(() => {
     const loadTasks = async () => {
       const loadedTasks = await getDataTask();
       dispatch(getAllInfo(loadedTasks));
    }
    loadTasks();
   }, []);
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
