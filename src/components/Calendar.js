import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Calendar.css';
import { NavLink } from 'react-router-dom';

const Calendar = () => {
  const [da, setDays] = useState([]);

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
    if (da.length <= 15 && da.length > 0) {
      newDate();
    }
  }, [da, newDate]);

  const dayCells = da.map((day, index) => (
    <NavLink
      to={`/${index}`}
      className={({ isActive }) => (isActive ? 'active' : 'slideItem')}
      key={index}
    >
      <div className="dayWeek">{day.format('ddd')}</div>
      <div className="dayNumber">{day.date()}</div>
    </NavLink>
  ));

  const settings = {
    dots: false,
    infinite: false,
    draggable: true,
    speed: 500,
    slidesToShow: 23.5,
    slidesToScroll: 10,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 23.5,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 19.4,
        },
      },

      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 16.2,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 13.5,
        },
      },

      {
        breakpoint: 840,
        settings: {
          slidesToShow: 10.8,
          slidesToScroll: 5,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 9.5,
          slidesToScroll: 5,
        },
      },

      {
        breakpoint: 580,
        settings: {
          slidesToShow: 7.3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 444,
        settings: {
          slidesToShow: 5.7,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return <Slider {...settings}>{dayCells}</Slider>;
};

export default Calendar;
