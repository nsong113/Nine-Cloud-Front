import { getDaysInMonth, subMonths } from 'date-fns';
import { useState } from 'react';

const DATE_MONTH_FIXER = 1;
const DAY_OF_WEEK = 7;
const DAY_LIST = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const useCalendar = () => {
  //현재 날짜 상태관리
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),

    1
  );
  const startingDayOfWeek = firstDayOfMonth.getDay() - 1;
  const totalMonthDays = getDaysInMonth(currentDate);
  const prevDayList = Array.from({ length: startingDayOfWeek }).fill(0);
  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + 1
  );

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const lastDayOfWeek = lastDayOfMonth.getDay();
  const remainingDaysInWeek = DAY_OF_WEEK - lastDayOfWeek;
  const nextDayList =
    remainingDaysInWeek === DAY_OF_WEEK
      ? []
      : Array.from({ length: remainingDaysInWeek }).fill(0);

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
    currentMonth: currentMonth,
    setCurrentMonth: setCurrentMonth,
    currentYear: currentYear,
    setCurrentYear: setCurrentYear,

    DAY_LIST: DAY_LIST,
    DATE_MONTH_FIXER: DATE_MONTH_FIXER,
  };
};

export default useCalendar;
