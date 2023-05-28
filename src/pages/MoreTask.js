import React, { useCallback, useEffect } from "react";
import MoreTaskInfo from "../components/InfoAboutTask/MoreTaskInfo";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getDataTask } from "../providers/tasks/tasks";
import { getTaskID } from "../store/taskSlice";
import { getAllInfo } from "../store/information";
import { useMemo } from "react";
const MoreTask = () => {
  const loadTasks = useCallback(async () => {
    const loadedTasks = await getDataTask();
    dispatch(getAllInfo(loadedTasks));
  }, []);

  useEffect(() => {
    loadTasks();
  }, []);

  const { information } = useSelector((state) => state.information);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskID(id));
  }, [id]);

  const infoAboutTask = useMemo(() => {
    const taskInfo = information.find((task) => task.id === id);
    return taskInfo;
  }, [information]);

  return (
    <>
      {infoAboutTask && <MoreTaskInfo inf={infoAboutTask} />}
      <Outlet />
    </>
  );
};

export default MoreTask;
