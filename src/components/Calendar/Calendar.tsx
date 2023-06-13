import React, { useCallback, useEffect, useMemo, useState } from "react";
import moment, { Moment } from "moment";
import "moment/locale/ru";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";
import AnimatedPage from "../../pages/Animated";
import { actulDates } from "../../store/taskSlice";
import "./CalendarStyles/Calendar.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { settings } from "./SwiperSettings/swiper-settings";

interface OutsideGroupedTasks {
  [key: string]: string;
}

interface GroupedTasksStr {
  [key: string]: OutsideGroupedTasks[];
}

const Calendar: React.FC = () => {
  const [da, setDays] = useState<Moment[]>([]);
  const [completedDates, setCompletedDates] = useState<string[]>([]);
  const { allInfo } = useAppSelector((state) => state.information);
  const { taskStatus } = useAppSelector((state) => state.taskSlice);

  const dispatch = useAppDispatch();
  const groupedTasks = useMemo(() => {
    const groupedTasks: GroupedTasksStr = {};

    allInfo.forEach((task) => {
      const { correctDate, id, date } = task;

      if (!groupedTasks[correctDate]) {
        groupedTasks[correctDate] = [];
      }

      groupedTasks[correctDate].push({ date, id, correctDate });
    });
    return groupedTasks;
  }, [allInfo]);

  const actDate = useCallback(() => {
    const currentMonth = moment();
    const daysInMonth = currentMonth.daysInMonth();
    const now = moment();
    const day = now.format("D");

    const days: Moment[] = [];
    for (let i = +day; i <= daysInMonth; i++) {
      const allDays = currentMonth.clone().date(i);
      days.push(allDays);
    }

    setDays(days);
  }, []);

  useEffect(() => {
    actDate();
  }, [actDate]);

  const newDate = useCallback(() => {
    const currentMonthNew = moment();

    const nextMonth = currentMonthNew.clone().add(1, "month");
    const daysInMonth = nextMonth.daysInMonth();
    const nextDays: Moment[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const allDays = nextMonth.clone().date(i);
      nextDays.push(allDays);
    }

    setDays([...da, ...nextDays]);
  }, [da]);

  useEffect(() => {
    if (da.length <= 25 && da.length > 0) {
      newDate();
    }
  }, [da, newDate]);

  useEffect(() => {
    const completedTaskDates = Object.keys(taskStatus).filter(
      (date) => taskStatus[date].length > 0
    );
    setCompletedDates(completedTaskDates);
  }, [taskStatus]);

  useEffect(() => {
    const fullDates = da.map((momentObj) => {
      const day = momentObj.date().toString().padStart(2, "0");
      const month = String(momentObj.month() + 1).padStart(2, "0");
      const year = momentObj.year();

      return `${day}-${month}-${year}`;
    });

    dispatch(actulDates(fullDates));
  }, [actDate, newDate]);

  const dayCells = useMemo(() => {
    return da.map((day, index) => {
      const isCompleted = completedDates.includes(day.format("DD-MM-YYYY"));
      const tasksForDate = groupedTasks[day.format("DD-MM-YYYY")] || [];
      const areAllTasksCompleted =
        tasksForDate.length > 0 &&
        tasksForDate.every((task) => taskStatus[task.id]);

      return (
        <SwiperSlide className="swiper-slide" key={index}>
          <NavLink
            to={`/${index}`}
            className={({ isActive }): string =>
              isActive ? "active" : "slideItem"
            }
            key={index}
          >
            <div className="dayWeek">{day.format("ddd")}</div>
            <div className="dayNumber">{day.date()}</div>
            <div>
              {isCompleted && (
                <div className="block-comp">
                  <span className="completed"></span>
                </div>
              )}
              {!isCompleted &&
                tasksForDate.length > 0 &&
                !areAllTasksCompleted && (
                  <div className="block-comp">
                    <span className="notCompleted"></span>
                  </div>
                )}
            </div>
          </NavLink>
        </SwiperSlide>
      );
    });
  }, [da, completedDates, groupedTasks, taskStatus]);

  return (
    <>
      <AnimatedPage>
        <Swiper {...settings}>{dayCells}</Swiper>
      </AnimatedPage>
    </>
  );
};

export default Calendar;
