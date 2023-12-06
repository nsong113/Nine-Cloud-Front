import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { IemotionSetting, ValueI } from './Main.types';

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Calender = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMont] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  //useCalender에서 내용 꺼내오기
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();

  //전체 데이터 분해
  const allDate = weekCalendarList.flat().map((day) => day);
  const selectedDayAndMonth = dayList.map((el: any) => el.date);

  console.log('allDay', allDate);

  console.log('weekCalendarList', weekCalendarList); //각 주에 며칠이 있는가
  console.log('currentDate', currentDate); //Tue Dec 05 2023 16:56:49 GMT+0900 (일본 표준시)
  console.log('DAY_LIST', DAY_LIST); //일월화수목금토일

  //currentDate를 내가 원하는 형식으로 변경
  const formattedTodayDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(currentDate);

  console.log('formattedTodayDate', formattedTodayDate); //2023. 12. 5.

  // const [date, setData] = useState<ValueI>(new Date());
  // console.log('date', date);

  // console.log('matchingDay', matchingDay);

  // 달 이동
  //현재날짜를 기반으로 Date객체 생성 -> SetMonth 메서드를 사용해서 1줄임
  const handlePrevMonth = () => {
    //cf) Date는 js 내장 객체임
    //새로운 객체를 생성해서 currentDate와 별개의 객체를 생성,
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  //감정 상태에 따라 다른 아이콘을 반환하기
  const getEmotion = (emotionStatus: any) => {
    switch (emotionStatus) {
      case 1:
        return '🥰';
      case 2:
        return '🥲';
      case 3:
        return '😎';
      case 4:
        return '🥳';
      default:
        return '';
    }
  };
  const selectedDay = dayList.map((el: any) =>
    parseInt(el.date.split('.')[2], 10).toString()
  );

  const getEmotionStatusForDate = (date: string) => {
    //dayList에서 날짜만 추출한 것과 전체 날짜가 일치하는 것이 matchignDay에 담긴다
    const matchingDay = dayList.find(
      (el: any) => parseInt(el.date.split('.')[2], 10).toString() === date
    );
    console.log('matchingDay', matchingDay);

    return matchingDay ? matchingDay.EmotionStatus : 0;
  };

  const selectedMonth = dayList.map((el: any) =>
    parseInt(el.date.split('.')[1])
  );

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  //클릭했을 때 디테일 페이지로 이동
  const onClickGoToDetailHandler = (
    event: React.MouseEvent<HTMLTableCellElement>
  ) => {
    //클릭한 날짜가 며칠인지 확인
    const id = event.currentTarget.textContent;
    navigate(`/post/${id}`);
  };

  return (
    <S.CalendarContainerDiv>
      <S.CalenderHeaderDiv>
        <S.CalenderPrevBtnDiv onClick={handlePrevMonth}>
          {'<'}
        </S.CalenderPrevBtnDiv>

        <span>{currentDate.toLocaleDateString()}</span>
        <S.CalenderPrevBtnDiv onClick={handleNextMonth}>
          {'>'}
        </S.CalenderPrevBtnDiv>
      </S.CalenderHeaderDiv>
      <S.CalendarTable>
        <S.TableHead>
          <S.TableRow>
            {DAY_LIST.map((day, index) => (
              <S.ThCell key={index}>{day}</S.ThCell>
            ))}
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {weekCalendarList.map((week, weekIndex) => (
            <S.DayRoow key={weekIndex}>
              {week.map((day, dayIndex) => {
                //cellDate = 전체날짜
                const cellDate = String(allDate[weekIndex * 7 + dayIndex]);
                const isMatchingDate = selectedDay.includes(cellDate);
                const emotionStatus = getEmotionStatusForDate(cellDate);

                return (
                  <S.TableCell
                    key={dayIndex}
                    onClick={onClickGoToDetailHandler}
                    style={{
                      backgroundColor: isMatchingDate ? 'skyblue' : 'inherit',
                    }}
                  >
                    {day !== 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>{day}</span> {/* 날짜 표시 */}
                        <span style={{ fontSize: '30px' }}>
                          {getEmotion(emotionStatus)}
                        </span>{' '}
                        {/* 이모지 표시 */}
                      </div>
                    ) : (
                      ''
                    )}
                  </S.TableCell>
                );
              })}
            </S.DayRoow>
          ))}
        </S.TableBody>
      </S.CalendarTable>
    </S.CalendarContainerDiv>
  );
};

export default Calender;

//////////////////////////////////
const dayList = [
  {
    EmotionStatus: 1,
    date: '2023. 12. 05.',
    id: 1,
  },
  {
    EmotionStatus: 2,
    date: '2023. 12. 06.',
    id: 2,
  },
  {
    EmotionStatus: 3,
    date: '2023. 12. 10.',
    id: 3,
  },
  {
    EmotionStatus: 4,
    date: '2023. 12. 13.',
    id: 2,
  },
  {
    EmotionStatus: 3,
    date: '2023. 12. 21.',
    id: 3,
  },
  {
    EmotionStatus: 3,
    date: '2023. 12. 30.',
    id: 4,
  },
];
