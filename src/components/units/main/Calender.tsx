import React, { useState } from 'react';

import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import { useNavigate } from 'react-router-dom';
import { addMonths, format, getYear, subMonths } from 'date-fns';
import { Toggle } from 'src/components/commons/utills/Toggle';

const Calender = () => {
  const navigate = useNavigate();
  const [month, setMonth] = useState(12);
  const [selectedEmotionStatus, setSelectedEmotionStatus] = useState<
    number | null
  >(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const formattedMonth = format(currentMonth, 'MMMM');

  console.log('formattedMonth', formattedMonth);
  //useCalender에서 내용 꺼내오기
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();

  //전체 데이터 분해
  const allDate = weekCalendarList.flat().map((day) => day);
  const selectedDayAndMonth = dayList.map((el: any) => el.date);

  //currentDate를 내가 원하는 형식으로 변경
  const formattedTodayDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(currentDate);

  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  console.log('newDate', newDate);

  const handlePrevMonth = () => {
    const newDate = subMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setMonth((prev) => prev - 1);
  };

  const onClickHappyImg = () => {
    // 이미 선택된 감정 상태인 경우 선택을 해제하도록 처리
    setSelectedEmotionStatus((prevStatus) => (prevStatus === 1 ? null : 1));
  };

  const onClickAngryImg = () => {
    setSelectedEmotionStatus((prevStatus) => (prevStatus === 2 ? null : 2));
  };

  const onClickGloomyImg = () => {
    setSelectedEmotionStatus((prevStatus) => (prevStatus === 3 ? null : 3));
  };

  const onClickSadImg = () => {
    setSelectedEmotionStatus((prevStatus) => (prevStatus === 4 ? null : 4));
  };

  const handleNextMonth = () => {
    const newDate = addMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setMonth((prev) => prev + 1);
  };

  const emotionImages: { [key: string]: string | undefined } = {
    1: '/happy.png',
    2: '/angry.png',
    3: '/gloomy.png',
    4: '/sad.png',
  };

  const happyCount = dayList.filter(
    (emotion) => emotion.EmotionStatus === 1
  ).length;
  const angryCount = dayList.filter(
    (emotion) => emotion.EmotionStatus === 2
  ).length;
  const gloomyCount = dayList.filter(
    (emotion) => emotion.EmotionStatus === 3
  ).length;
  const sadCount = dayList.filter(
    (emotion) => emotion.EmotionStatus === 4
  ).length;

  //감정 상태에 따라 다른 아이콘을 반환하기
  const getEmotion = (emotionStatus: any) => {
    return emotionImages[emotionStatus] || '/silence.png';
  };

  const getEmotionStatusForDate = (date: string) => {
    //dayList에서 날짜만 추출한 것과 전체 날짜가 일치하는 것이 matchignDay에 담긴다
    const matchingDay = dayList.find(
      (el: any) => parseInt(el.date.split('.')[2], 10).toString() === date
    );

    return matchingDay ? matchingDay.EmotionStatus : 0;
  };

  const getBorderColor = (emotionStatus: any) => {
    switch (emotionStatus) {
      case 1:
        return selectedEmotionStatus === 1 ? '#ffcc00' : 'white';
      case 2:
        return selectedEmotionStatus === 2 ? '#ff6666' : 'white';
      case 3:
        return selectedEmotionStatus === 3 ? '#6666ff' : 'white';
      case 4:
        return selectedEmotionStatus === 4 ? '#999999' : 'white';
      default:
        return 'wihte';
    }
  };

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  //클릭했을 때 디테일 페이지로 이동
  const onClickGoToDetailHandler = (
    event: React.MouseEvent<HTMLTableCellElement>
  ) => {
    // 클릭한 날짜가 며칠인지 확인
    const clickedDate = event.currentTarget.textContent;

    // dayList에서 클릭한 날짜와 매칭되는 요소 찾기
    const matchingDay = dayList.find((el) => el.date === clickedDate);

    // 매칭된 요소의 id 가져오기
    const id = matchingDay ? matchingDay.id : null;

    if (id !== null) {
      // id가 존재하면 해당 id로 상세 페이지로 이동
      navigate(`/post/${id}`);
    } else {
      // id가 존재하지 않으면 에러 처리 또는 다른 동작 수행
      console.error('해당 날짜의 ID를 찾을 수 없습니다.');
    }
  };
  return (
    <S.CalendarContainerDiv>
      <S.CalenderHeaderDiv>
        <S.DateBoxDiv>
          <S.YearTextSpan>{year}</S.YearTextSpan>
          <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
        </S.DateBoxDiv>
        <div>{Toggle()}</div>
        <div style={{ display: 'flex' }}>
          <S.AvatarSizeImg src='/avatar.png' alt='기본' />
        </div>
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
                const selectedDay = dayList.map((el: any) => el.id);
                const cellDate = String(allDate[weekIndex * 7 + dayIndex]);
                const isMatchingDate = selectedDay.includes(cellDate);
                const emotionStatus = getEmotionStatusForDate(cellDate);

                return (
                  <S.TableCell
                    key={dayIndex}
                    onClick={() => onClickGoToDetailHandler}
                    style={{
                      backgroundColor: `${getBorderColor(emotionStatus)}`,
                    }}
                  >
                    {day !== 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {month === 12 ? (
                          <>
                            <span>{day}</span> {/* 날짜 표시 */}
                            <img
                              src={getEmotion(emotionStatus)}
                              alt={`Emotion ${emotionStatus}`}
                              style={{ width: '30px' }}
                            />
                          </>
                        ) : (
                          <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                          >
                            <span>{day}</span>
                            <img
                              src='/silence.png'
                              alt={`Emotion ${emotionStatus}`}
                              style={{ width: '30px' }}
                            />
                          </div>
                        )}
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
      <S.ImageWrapperDiv>
        <S.ImageBoxDiv>
          <S.ExpressionImage
            onClick={onClickHappyImg}
            src='/happy.png'
            alt='해피'
          />
          <S.CountSpan>{happyCount}</S.CountSpan>
          <S.ExpressionImage
            onClick={onClickAngryImg}
            src='/angry.png'
            alt='화남'
          />
          <S.CountSpan>{angryCount}</S.CountSpan>
          <S.ExpressionImage
            onClick={onClickGloomyImg}
            src='/gloomy.png'
            alt='우울'
          />
          <S.CountSpan>{gloomyCount}</S.CountSpan>
          <S.ExpressionImage
            onClick={onClickSadImg}
            src='/sad.png'
            alt='슬픔'
          />
          <S.CountSpan>{sadCount}</S.CountSpan>
        </S.ImageBoxDiv>
      </S.ImageWrapperDiv>
      <S.CalenderPrevBtnDiv onClick={handlePrevMonth}>
        {'<'}
      </S.CalenderPrevBtnDiv>
      <S.CalenderPrevBtnDiv onClick={handleNextMonth}>
        {'>'}
      </S.CalenderPrevBtnDiv>
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
