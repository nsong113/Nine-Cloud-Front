import { useMemo } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import getEmotion from 'src/components/commons/utills/emotionImage';
import { arrowNavigate } from 'src/states/navigate';
import { IGetId, IGetPostsData } from './Main.types';

const CalendarBody = (props: IGetPostsData) => {
  const [isGoingToMain, setIsGoingToMain] = useRecoilState(arrowNavigate);
  const navigate = useNavigate();
  const { weekCalendarList } = useCalendar();
  const allDate = weekCalendarList.flat().filter((value) => value !== 0);

  const allData = props?.data?.data;

  const getId = (date: string) => {
    const matchingDay = allData.find(
      (el: IGetId) =>
        el?.createdAt &&
        parseInt(el.createdAt.split('.')[2], 10).toString() === date
    );

    return matchingDay ? matchingDay.diaryId : 0;
  };

  const onClickGoToDetailHandler = (id: number) => () => {
    if (id !== 0) {
      setIsGoingToMain(true);
      navigate(`/post/${id}`);
    } else {
      alert('작성하신 글이 없습니다.');
    }
  };

  const filteredDayList = useMemo(
    () => allData.filter((el: IGetId) => el !== null),
    []
  );

  const getEmotionStatusForDate = (date: string) => {
    const matchingDay = filteredDayList.find(
      (el: IGetId) =>
        //day 일치여부 조회 로직
        el?.createdAt &&
        parseInt(el.createdAt.split('.')[2]).toString() === date
    );

    return matchingDay ? matchingDay.EmotionStatus : 0;
  };

  const getWeatherData = (date: string) => {
    const weatherData = filteredDayList.find(
      (el: IGetId) =>
        //day 일치여부 조회 로직
        el?.createdAt &&
        parseInt(el.createdAt.split('.')[2]).toString() === date
    );

    return weatherData ? weatherData.weather : 0;
  };

  const changedMonth = props.currentMonth.getMonth();
  const fixedMonth = new Date().getMonth();
  const changedYear = props.currentYear.getFullYear() * 10;
  const fixedYear = new Date().getFullYear() * 10;

  const isPastMonth = changedYear + changedMonth < fixedYear + fixedMonth;
  const isFutureMonth = changedYear + changedMonth > fixedYear + fixedMonth;
  const isCurrentMonth = changedYear + changedMonth === fixedYear + fixedMonth;

  return (
    <S.TableBody>
      {props.weekCalendarList.map((week: number[], weekIndex: number) => (
        <S.DayRoow key={weekIndex}>
          {week.map((day: number, dayIndex: number) => {
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
            const id = getId(String(cellDate));

            const isToday =
              cellDate === new Date().getDate() &&
              props.currentMonth.getMonth() === new Date().getMonth();

            return (
              <S.TableCell
                key={dayIndex}
                onClick={onClickGoToDetailHandler(id)}
              >
                {day !== 0 ? (
                  <S.DayWrapperDiv>
                    <S.DateWrapperDiv
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                    >
                      <S.DateSpan istoday={isToday}>{cellDate}</S.DateSpan>
                      <div>
                        {(props.currentMonth.getMonth() === 11 ||
                          isCurrentMonth ||
                          isPastMonth) && (
                          <S.DateImg
                            src={getEmotion(emotionStatus, weatherStatus)}
                            alt={`Emotion ${emotionStatus}`}
                            rel='preload'
                          />
                        )}
                        {props.currentMonth.getMonth() === 11 ||
                          (isFutureMonth && <S.BlankDiv></S.BlankDiv>)}
                      </div>
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
