import React, { useEffect } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import useEmotion from 'src/components/commons/hooks/useEmotion';
import { dayList } from './test';
import { useNavigate } from 'react-router-dom';

const CalendarBody = () => {
  const navigate = useNavigate();

  const { weekCalendarList, currentMonth, DAY_LIST } = useCalendar();

  const { getEmotion, getEmotionStatusForDate } = useEmotion();

  const allDate = weekCalendarList.flat().filter((value) => value !== 0);

  const getId = (date: string) => {
    const matchingDay = dayList.find(
      (el: any) =>
        el?.date && parseInt(el.date.split('.')[2], 10).toString() === date
    );
    return matchingDay ? matchingDay.id : 0;
  };

  const onClickGoToDetailHandler = (id: any) => () => {
    if (id !== 0) {
      navigate(`/post/${id}`);
    } else {
      alert('작성하신 글이 없습니다.');
    }
  };

  return (
    <S.TableBody>
      {weekCalendarList.map((week, weekIndex) => (
        <S.DayRoow key={weekIndex}>
          {week.map((day, dayIndex) => {
            const firstDayOfMonth = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              1
            );
            const daysBeforeFirstDay = firstDayOfMonth.getDay();

            const cellDate = weekIndex * 7 + dayIndex - daysBeforeFirstDay + 1;
            if (cellDate <= 0 || cellDate > allDate.length) {
              return <S.TableCell key={dayIndex}></S.TableCell>;
            }

            const emotionStatus = getEmotionStatusForDate(String(cellDate));
            const id = getId(String(cellDate));

            const isToday =
              cellDate === new Date().getDate() &&
              currentMonth.getMonth() === new Date().getMonth();

            return (
              <S.TableCell
                key={dayIndex}
                onClick={onClickGoToDetailHandler(id)}
                isToday={isToday}
              >
                {day !== 0 ? (
                  <S.DayWrapperDiv>
                    <S.DateWrapperDiv>
                      <S.DateSpan isToday={isToday}>{cellDate}</S.DateSpan>
                      {/* {cellDate <= currentDate.getDate() && ( */}
                      <S.DateImg
                        src={getEmotion(emotionStatus)}
                        alt={`Emotion ${emotionStatus}`}
                      />
                      {/* )} */}
                    </S.DateWrapperDiv>
                  </S.DayWrapperDiv>
                ) : (
                  ''
                )}
              </S.TableCell>
            );
          })}
        </S.DayRoow>
      ))}
    </S.TableBody>
  );
};

export default CalendarBody;
