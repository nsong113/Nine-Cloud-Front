import React, { useEffect } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import getEmotion from 'src/components/commons/utills/emotionImage';
import { targetDate } from 'src/states/emotionImage';

const CalendarBody = (props: any) => {
  const navigate = useNavigate();
  const { weekCalendarList } = useCalendar();
  const [date, setDate] = useRecoilState(targetDate);
  const allDate = weekCalendarList.flat().filter((value) => value !== 0);

  console.log('리코일date', date);

  const allData = props?.data?.data;

  const getId = (date: string) => {
    const matchingDay = allData.find(
      (el: any) =>
        el?.createdAt &&
        parseInt(el.createdAt.split('.')[2], 10).toString() === date
    );

    return matchingDay ? matchingDay.diaryId : 0;
  };

  const onClickGoToDetailHandler = (id: number) => () => {
    if (id !== 0) {
      navigate(`/post/${id}`);
    } else {
      alert('작성하신 글이 없습니다.');
    }
  };

  const filteredDayList = allData.filter((el: any) => el !== null);

  const getEmotionStatusForDate = (date: string) => {
    const matchingDay = filteredDayList.find(
      (el: any) =>
        //day 일치여부 조회 로직
        el?.createdAt &&
        parseInt(el.createdAt.split('.')[2]).toString() === date
    );

    return matchingDay ? matchingDay.EmotionStatus : 0;
  };

  const getWeatherData = (date: string) => {
    const weatherData = filteredDayList.find(
      (el: any) =>
        //day 일치여부 조회 로직
        el?.createdAt &&
        parseInt(el.createdAt.split('.')[2]).toString() === date
    );

    return weatherData ? weatherData.weather : 0;
  };

  return (
    <S.TableBody>
      {props.weekCalendarList.map((week: any, weekIndex: any) => (
        <S.DayRoow key={weekIndex}>
          {week.map((day: any, dayIndex: any) => {
            const firstDayOfMonth = new Date(
              props.currentMonth.getFullYear(),
              props.currentMonth.getMonth(),
              1
            );
            const daysBeforeFirstDay = firstDayOfMonth.getDay() - 1;

            const cellDate = weekIndex * 7 + dayIndex - daysBeforeFirstDay + 1;
            if (cellDate <= 0 || cellDate > allDate.length) {
              return <S.TableCell key={dayIndex}></S.TableCell>;
            }

            const emotionStatus = getEmotionStatusForDate(String(cellDate));
            const weatherStatus = getWeatherData(String(cellDate));
            const images = getEmotion(emotionStatus, weatherStatus);
            const id = getId(String(cellDate));

            const isToday =
              cellDate === new Date().getDate() &&
              props.currentMonth.getMonth() === new Date().getMonth();

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
                      {cellDate > new Date().getDate() && (
                        <S.BlankDiv></S.BlankDiv>
                      )}
                      {cellDate <= new Date().getDate() && (
                        <S.DateImg
                          src={getEmotion(emotionStatus, weatherStatus)}
                          alt={`Emotion ${emotionStatus}`}
                        />
                      )}
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
