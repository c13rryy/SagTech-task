import React, { useCallback, useEffect } from "react";
import MoreTaskInfo from "../components/Tasks/InfoAboutTask/MoreTaskInfo";
import { Outlet, useParams } from "react-router-dom";
import { getDataTask } from "../providers/tasks/tasks";
import { getTaskID } from "../store/taskSlice";
import { getAllInfo } from "../store/information";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store";

const MoreTask: React.FC = () => {
  const loadTasks = useCallback(async () => {
    const loadedTasks = await getDataTask();
    if (loadedTasks !== undefined) {
      dispatch(getAllInfo(loadedTasks));
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, []);

  const { information } = useAppSelector((state) => state.information);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getTaskID(id));
    }
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
