import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AnimatedPage from '../pages/Animated';


const Calendar = () => {
  /*   const [isTaskAdded, setIsTaskAdded] = useState(false); */
  const [da, setDays] = useState([]);
  const [completedDates, setCompletedDates] = useState([]);
  /*  const [taskInfo, setTaskInfo] = useState(null); */
  const { allInfo } = useSelector((state) => state.showData);
  const { date } = useSelector((state) => state.idTaker);

  const dayN = Number(date);

  const { taskStatus } = useSelector((state) => state.idTaker);

  const groupedTasks = {};

  allInfo.forEach((task) => {
    const { date, id } = task;

    if (!groupedTasks[date]) {
      groupedTasks[date] = [];
    }

    groupedTasks[date].push({ date, id });
  });

  console.log(groupedTasks[dayN]);

  const actDate = useCallback(() => {
    const currentMonth = moment();
    const daysInMonth = currentMonth.daysInMonth();
    const now = moment();
    const day = now.format('D');

    const days = [];
    for (let i = day; i <= daysInMonth; i++) {
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

    const nextMonth = currentMonthNew.clone().add(1, 'month');
    const daysInMonth = nextMonth.daysInMonth();
    const nextDays = [];
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

  /*   useEffect(() => {
    const tasks = allInfo.filter((task) => task.date === date);
    setTaskInfo(tasks.length);
  },[allInfo, date]);
 */

  useEffect(() => {
    const completedTaskDates = Object.keys(taskStatus).filter(
      (date) => taskStatus[date].length > 0
    );
    setCompletedDates(completedTaskDates);
  }, [taskStatus]);

  /*    
useEffect(() => {
    const whatDate = allInfo.map((obj) => obj.date);
    const uniqArray = [...new Set(whatDate)];
    const numericArr = uniqArray.map(str => parseInt(str));
    setIsTaskAdded(numericArr)
    
  }, [allInfo]);
 */

  const dayCells = da.map((day, index) => {
    const isCompleted = completedDates.includes(String(index));
    const tasksForDate = groupedTasks[index] || [];
    const areAllTasksCompleted =
      tasksForDate.length > 0 &&
      tasksForDate.every((task) => taskStatus[task.id]);

    return (
      <SwiperSlide className="swiper-slide" key={index}>
        <NavLink
          to={`/${index}`}
          className={({ isActive }) => (isActive ? 'active' : 'slideItem')}
          key={index}
        >
          <div className="dayWeek">{day.format('ddd')}</div>
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

  const settings = {
    slidesPerView: 23.5,
    navigation: true,
    breakpoints: {
      1500: {
        slidesPerView: 23.5,
      },
      1280: {
        slidesPerView: 20.5,
      },
      1140: {
        slidesPerView: 18.5,
      },

      1024:{
        slidesPerView: 16.5
      },

      900:{
        slidesPerView: 14.5
      },
      775:{
        slidesPerView: 12.5
      },

      600:{
        slidesPerView: 10.5
      },

      515:{
        slidesPerView: 8.5
      },

      414:{
        slidesPerView: 6.5
      },

      300:{
        slidesPerView: 5.5
      }

    },
  };

  return (
    <>
    <AnimatedPage>
    <Swiper {...settings} >{dayCells}</Swiper>
    </AnimatedPage>
    </>
  );
};

export default Calendar;
