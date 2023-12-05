import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { IemotionSetting, ValueI } from './Main.types';

const Calender = () => {
  const navigate = useNavigate();

  //useCalender에서 내용 꺼내오기
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();
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
  const getEmotion = (EmotionStatus: number) => {
    switch (EmotionStatus) {
      case 1:
        '🥰';
        break;
      case 2:
        '🥲';
        break;
      case 3:
        '😎';
        break;
      case 4:
        '🥳';
        break;
      default:
        '';
        break;
    }
  };
  //0있이 감정 값이 있는 로직
  // {
  //   EmotionStatus: 0,
  //   date: '2023. 12. 01.',
  //   id: 1,
  // },

  //0과 0이 아닌 것을 분리
  //0이 아니라면 각 id값과 일치하는 칸에 emotionStatus를 렌더링

  // if (dayList.EmotionStatus === 0) {
  //   ('');
  // } else {
  // }

  //0없이 감정 값이 있는 로직
  // const emotionSetting = useState<IemotionSetting[]>({
  //   matchDDD: null,
  //   matchEmotionStatus: null,
  // });

  // useEffect(() => {
  //   //DD 를 꺼내오는 정규 표현식
  //   const dayRegex = /\b(\d{1,2})\.\s*$/;
  //   //각 리스트에서 DD를 꺼낸다. : 매칭이 되는 '값'을 꺼내서 =>10이면 10의 자리와 이모션을 같이 객체로 묶어 배열로 묶는다.
  //   for (let i = 0; i < dayList.length; i++) {
  //     //각 list의 DD를 뽑아서 matchDD에 넣음
  //     const matchDD = dayList[i].date.match(dayRegex);
  //     if (matchDD) {
  //       //각 list의 날짜를 뽑아서 matchDD에 넣음
  //       const matchDDD = Number(matchDD[1]);
  //       const matchDate = matchDD.input;
  //       const matchEmotionStatus = dayList[i].EmotionStatus;
  //       //감정 상태값 넣기 matchDate의 emotionStatus만 골라오기

  //       // console.log('matchDD', matchDD);
  //       // console.log('match1', matchDDD); // 22
  //       // console.log('match2', matchDate); // "2023. 12. 22."
  //       // console.log('matchEmotionStatus', matchEmotionStatus);

  //       emotionSetting.push({
  //         matchDDD,
  //         matchEmotionStatus,
  //       });
  //     }
  //   }
  // }, []);

  // console.log('emotionSetting', emotionSetting);

  // //emotionSetting의 matchDDD값이 weekCalendar의 값과 같으면 matchEmotionStatus를 반환한다.
  // console.log('1', emotionSetting.matchDDD);
  // console.log('2', emotionSetting.matchEmotionStatus);

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
              {week.map((day, dayIndex) => (
                <S.TableCell key={dayIndex} onClick={onClickGoToDetailHandler}>
                  {day !== 0 ? day : ''}
                </S.TableCell>
              ))}
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
  //2023. 12. 5.
  // {
  //   EmotionStatus: 0,
  //   date: '2023. 12. 01.',
  //   id: 1,
  // },
  // {
  //   EmotionStatus: 0,
  //   date: '2023. 12. 02.',
  //   id: 2,
  // },
  {
    EmotionStatus: 3,
    date: '2023. 12. 03.',
    id: 3,
  },
  {
    EmotionStatus: 2,
    date: '2023. 12. 04.',
    id: 4,
  },
  {
    EmotionStatus: 1,
    date: '2023. 12. 05.',
    id: 5,
  },
  {
    EmotionStatus: 1,
    date: '2023. 12. 06.',
    id: 6,
  },
  {
    EmotionStatus: 3,
    date: '2023. 12. 07.',
    id: 7,
  },
  {
    EmotionStatus: 2,
    date: '2023. 12. 08.',
    id: 8,
  },
  {
    EmotionStatus: 3,
    date: '2023. 12. 09.',
    id: 9,
  },
  {
    EmotionStatus: 4,
    date: '2023. 12. 10.',
    id: 10,
  },
  {
    EmotionStatus: 1,
    date: '2023. 12. 11.',
    id: 11,
  },
  {
    EmotionStatus: 1,
    date: '2023. 12. 12.',
    id: 12,
  },
  {
    EmotionStatus: 1,
    date: '2023. 12. 13.',
    id: 13,
  },
];
