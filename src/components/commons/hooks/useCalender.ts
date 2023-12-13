import { getDaysInMonth, subMonths } from 'date-fns';
import React, { useState } from 'react';

const DATE_MONTH_FIXER = 1;
const DAY_OF_WEEK = 7;
const DAY_LIST = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];

const useCalendar = () => {
  //현재 날짜 상태관리
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());
  //currentDate Sat Dec 09 2023 13:34:18 GMT+0900 (한국 표준시)
  console.log('currentDate', currentDate);

  //해당 year + month + 1(day)
  const firstDayOfMonth = new Date(
    //2023
    currentDate.getFullYear(),
    //11 (getMonth() 메서드의 반환 값은 0부터 시작해서 11까지의 숫자 => 0이 1월)
    currentDate.getMonth(),
    //1
    1
  );
  //getDay() 메서드는 주의 일요일부터 토요일까지의 숫자를 반환합니다. 0은 일요일을 나타내고, 6은 토요일을 나타낸다.
  //예를 들어 12월 1일은 금요일에 있으니 0(일요일)부터 시작한다면 6번째에 위치한다.
  //근데 0부터 시작하니 [0,1,2,3,4,5] index 상으로는 5에 위치
  //firstDayOfMonth의 요일에 해당하는 값으로 설정 => 5로 설정
  const startingDayOfWeek = firstDayOfMonth.getDay();

  console.log('startingDayOfWeek', startingDayOfWeek);
  //해당 월의 날짜를 출력.
  //currentDate에 월이 있으니 그 월을 기반으로 하는 듯.
  //getDaysInMonth는 date-fns의 내장함수
  //totalMonthDays === 31
  const totalMonthDays = getDaysInMonth(currentDate);

  console.log('totalMonthDays', totalMonthDays);

  //startingDayOfWeek가 5라면  그 달의 1일은 금요일이다. 그럼 0부터 시작하니 총 5다. (0(일),1(월),2(화),3(수),4(목),5(금)) => 이게 startingDayOfWeek
  //그럼 길이가 startingDayOfWeek 길이는 5다. 근데 알다시피 index 0부터 시작.
  //그래서 총 5개다.(0,1,2,3,4)
  //

  //원래 기존에 배열을 만들 때는 Array(길이).fill(0) 인데 Array.from으로 길이 설정이 가능하다
  // prevDayList = [0,0,0,0,0]

  //++ Array.from(startingDayOfWeek).fill(0);,  Array.from({startingDayOfWeek}).fill(0); => 둘 다 적용불가 빈배열로 나옴. 무조건 아래 방식대로 해야함.
  const prevDayList = Array.from({ length: startingDayOfWeek }).fill(0);
  //전체날짜만큼의 배열을 만드는 과정
  // 값이 31개 있는 배열을 만드는데 index는 0부터 시작하니 1을 더해준다.
  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + 1
  );

  // 해당 월의 마지막 날을 계산
  const lastDayOfMonth = new Date(
    //2023
    currentDate.getFullYear(),
    //1을 더하는 이유는  getMonth() 메서드의 반환 값은 0부터 시작해서 11까지의 숫자 => 12
    currentDate.getMonth() + 1,
    // 1월의 0번째 날이라는 것은 12월의 마지막날을 의미하기도 한다.
    0
  );
  // Sun Dec 31 2023 00:00:00 GMT+0900 (한국 표준시)
  console.log('lastDayOfMonth', lastDayOfMonth);
  // lastDayOfWeek => 0
  //0이 나온 이유는 12월의 마지막 날의 요일이 일요일이기 때문이다
  const lastDayOfWeek = lastDayOfMonth.getDay();

  console.log('lastDayOfWeek', lastDayOfWeek);

  // 토요일까지의 남은 날짜 수를 계산합니다
  //const remainingDaysInWeek = 6
  // -1을 하는 이유는 getDay 함수가 0부터 시작하니까 맞춰줘야 한다. 그래서 -1을 하는 것. 아니면 DAY_OF_WEEK이 지금 7이니까 이걸 6으로 한다면 -1을 하지 않아도 된다.
  const remainingDaysInWeek = DAY_OF_WEEK - lastDayOfWeek - 1;

  // nextDayList를 현재 월의 나머지 날짜로 채웁니다
  // nextDayList = [0,0,0,0,0,0]
  const nextDayList = Array.from({
    length: remainingDaysInWeek,
  }).fill(0);

  //concat은 배열을 합치는 용도.
  // 즉 3개의 배열을 합친 결과물이 currentCalendarList다.
  // currentCalendarList = [0,0,0,0,0,1~31,0,0,0,0,0,0]
  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);

  //2차원 배열로 만드는 과정인데... 쉽지 않다...
  // [[0,0,0,0,0,1,2] [3,4,5,6,7,8,9] ... [31,0,0,0,0,0,0]]
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
