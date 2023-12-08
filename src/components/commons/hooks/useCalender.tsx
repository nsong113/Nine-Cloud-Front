import { getDaysInMonth, subMonths } from 'date-fns';
import React from 'react';

const DATE_MONTH_FIXER = 1;
const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAY_LIST = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];

const useCalendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const totalMonthDays = getDaysInMonth(currentDate);

  const prevDayList = Array.from({ length: startingDayOfWeek }).fill(0);
  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + 1
  );
  const nextDayList = Array.from({
    length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
  }).fill(0);

  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);
  const weekCalendarList = currentCalendarList.reduce(
    (acc: number[][], cur, idx) => {
      const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(cur as number);
      return acc;
    },
    []
  );
  return {
    weekCalendarList: weekCalendarList,
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
    DAY_LIST: DAY_LIST,
    DATE_MONTH_FIXER: DATE_MONTH_FIXER,
  };
};

export default useCalendar;
