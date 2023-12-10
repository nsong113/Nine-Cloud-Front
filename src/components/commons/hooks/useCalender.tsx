import { getDaysInMonth, subMonths } from 'date-fns';
import React, { useState } from 'react';

const DATE_MONTH_FIXER = 1;
const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAY_LIST = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];

const useCalendar = () => {
  //현재 날짜 상태관리
  const [currentDate, setCurrentDate] = useState(new Date());
  //currentDate Sat Dec 09 2023 13:34:18 GMT+0900 (한국 표준시)
  console.log('currentDate', currentDate);

  //해당 year + month + 1(day)
  const firstDayOfMonth = new Date(
    //년도
    currentDate.getFullYear(),
    //월
    currentDate.getMonth(),
    //1일
    1
  );
  //1일이 일요일을 기준으로 몇 번째에 있는 지.
  //예를 들어 12월 1일은 금요일에 있으니 0(일요일)부터 시작한다면 5번째에 위치한다.
  const startingDayOfWeek = firstDayOfMonth.getDay();

  console.log('startingDayOfWeek', startingDayOfWeek);
  //해당 월의 날짜를 출력.
  //currentDate에 월이 있으니 그 월을 기반으로 하는 듯.
  //getDaysInMonth는 date-fns의 내장함수
  const totalMonthDays = getDaysInMonth(currentDate);

  console.log('totalMonthDays', totalMonthDays);

  //startingDayOfWeek가 5라면  그 달의 1일은 금요일이다. 그럼 0부터 시작하니 총 5다. (0(일),1(월),2(화),3(수),4(목),5(금)) => 이게 startingDayOfWeek
  //그럼 길이가 startingDayOfWeek 길이는 5다. 근데 알다시피 index 0부터 시작.
  //그래서 총 5개다.(0,1,2,3,4)
  //
  const prevDayList = Array.from({ length: startingDayOfWeek }).fill(0);
  //전체날짜만큼의 배열을 만드는 과정
  // 1씩 더해 구색을 갖춘다
  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + 1
  );

  // 해당 월의 마지막 날을 계산합니다
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const lastDayOfWeek = lastDayOfMonth.getDay();

  // 토요일까지의 남은 날짜 수를 계산합니다
  const remainingDaysInWeek = DAY_OF_WEEK - lastDayOfWeek - 1;

  // nextDayList를 현재 월의 나머지 날짜로 채웁니다
  const nextDayList = Array.from({
    length: remainingDaysInWeek,
  }).fill(0);

  //concat은 배열을 합치는 용도.
  // 즉 3개의 배열을 합친 결과물이 currentCalendarList다.
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
