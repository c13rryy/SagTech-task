import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getId, numberDate } from "../store/taskSlice";
import { getData } from "../providers/tasks/tasks";
import moment from "moment";
import "moment/locale/ru";
import { getAllInfo } from "../store/information";
import ShowTask from "../components/Tasks/ShowTasks/ShowTask";
import { infoForCalendar } from "../store/information";
import { getDataTask } from "../providers/tasks/tasks";
import { deleteTaskByDate } from "../providers/tasks/tasks";
import AnimatedPage from "./Animated";
import Wrapper from "../UI/WrapperUI/Wrapper";
import Button from "../UI/ButtonUI/Button";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { InformationSlice } from "../reusles-types/reusles.types";

const Task: React.FC = () => {
  const { date } = useAppSelector((state) => state.taskSlice);
  const { information } = useAppSelector((state) => state.information);
  const { realDates } = useAppSelector((state) => state.taskSlice);
  const { correctDate } = useAppSelector((state) => state.taskSlice);
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const { index } = useParams<Record<string, string | undefined>>();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [reloadPage, setReloadPage] = useState(false);
  const dispatch = useAppDispatch();

  const locationLogic = useMemo(
    () => location.pathname === `/${date}`,
    [location.pathname, date]
  );

  useEffect(() => {
    if (index !== undefined && typeof index === "string") {
      dispatch(getId(index));
      dispatch(numberDate(realDates[+index]));
    }
  }, [index, realDates, dispatch]);

  const loadTasks = useCallback(async () => {
    setIsDataLoaded(false);
    if (correctDate !== undefined && correctDate !== null) {
      const loadedTasks: InformationSlice[] | undefined = await getData(
        correctDate
      );

      if (loadedTasks !== undefined) {
        dispatch(getAllInfo(loadedTasks));
      }
    }
    setIsDataLoaded(true);
  }, [correctDate, reloadPage]);

  useEffect(() => {
    loadTasks();
  }, [correctDate, reloadPage]);

  const loadInf = useCallback(async () => {
    const loadedTasks: InformationSlice[] | undefined = await getDataTask();
    if (loadedTasks !== undefined) {
      dispatch(infoForCalendar(loadedTasks));
    }
    setReloadPage(false);
  }, [reloadPage]);

  useEffect(() => {
    loadInf();
  }, [reloadPage]);

  const memoizedInformation = useMemo(() => {
    return information;
  }, [information]);

  useEffect(() => {
    const interval = setInterval(() => {
      const delDat = moment().format("DD-MM-YYYY");
      const currentTime = moment();
      const targetTime = moment().set({ hour: 23, minute: 59, second: 59 });
      if (currentTime.isSame(targetTime)) {
        deleteTaskByDate(delDat);
        setReloadPage(true);
      }
    }, 1000);

    return (): void => {
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      <AnimatedPage>
        <div>
          <Wrapper>
            {user && locationLogic && isDataLoaded && (
              <ShowTask info={memoizedInformation} />
            )}

            {isDataLoaded &&
              memoizedInformation.length === 0 &&
              locationLogic && (
                <div>
                  <Link to={`/${date}/add-task`}>
                    {" "}
                    <Button>Add Task</Button>
                  </Link>
                </div>
              )}
            {user && <Outlet />}
          </Wrapper>
        </div>
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Task;
