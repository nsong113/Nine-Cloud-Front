import React, { useEffect, useState } from 'react';
import * as S from './Main.styles';
import Calendar from 'react-calendar';
import { IMatchingDay, IdateOptions, Value } from './Main.types';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

const Calender = () => {
  const navigate = useNavigate();
  //유저가 달력에 클릭하는 날짜
  const [date, setData] = useState<Value>(new Date());
  // console.log('date', date); //Thu Dec 14 2023 00:00:00 GMT+0900 (일본 표준시) (선택한 날짜)
  //JSX.Element 타입은 리액트에서 사용하는 JSX 자료형을 명시
  const [clickedDate, setClickedDate] = useState<string>('');

  const dayList = [
    {
      EmotionStatus: 1,
      date: '2023-12-10',
      id: 0,
    },
    {
      EmotionStatus: 2,
      date: '2023-12-11',
      id: 1,
    },
    {
      EmotionStatus: 3,
      date: '2023-12-13',
      id: 2,
    },
    {
      EmotionStatus: 4,
      date: '2023-12-07',
      id: 3,
    },
    {
      EmotionStatus: 1,
      date: '2023-12-20',
      id: 4,
    },
    {
      EmotionStatus: 1,
      date: '2023-12-21',
      id: 5,
    },
    {
      EmotionStatus: 1,
      date: '2023-12-22',
      id: 6,
    },
  ];

  const onChangeClickedDate = (date: any) => {
    setData(date);

    const matchingDay: IMatchingDay | undefined = dayList.find(
      (day) => day.date === moment(date).format('YYYY-MM-DD')
    );

    console.log('matchingDay', matchingDay);

    if (matchingDay && typeof matchingDay !== 'undefined') {
      const navigateId: number = matchingDay.id;
      console.log(matchingDay);

      const goToDetail = (navigateId: number) => {
        navigate(`/post/${navigateId}`);
      };

      goToDetail(navigateId);
    } else {
      null;
    }
    // 상태 업데이트
  };

  //오늘 날짜 관리
  const todayDate = moment().format('YYYY-MM-DD');

  //오늘 날짜에 무언가 추가
  const addContent = ({ date }: any): any => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];
    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가

    const matchingDay = dayList.find(
      (day) => day.date === moment(date).format('YYYY-MM-DD')
    );
    // console.log(moment(date)); //지금 시간
    // console.log('matchingDay', matchingDay); //dayList 하나하나

    if (matchingDay) {
      //각 날짜별 emotionState에 따라 다르게 렌더링하기

      //근데 콘텐츠가 그 아이의 콘텐츠여야 함.
      if (matchingDay.EmotionStatus === 1) {
        contents.push(
          <div>
            <S.ShowCloudDivRed />
          </div>
        );
      } else if (matchingDay.EmotionStatus === 2) {
        contents.push(
          <div>
            <S.ShowCloudDivGreen />
          </div>
        );
      } else if (matchingDay.EmotionStatus === 3) {
        contents.push(
          <div>
            <S.ShowCloudDivBlue />
          </div>
        );
      } else {
        contents.push(
          <div>
            <S.ShowCloudDivBlack />
          </div>
        );
      }
    }
    //(dayList.find((day) => day.EmotionStatus === 3))

    return <div>{contents}</div>;
  };

  const onClickDayEachDateHandler = (e: any) => {
    // alert('Clicked day: ', value);
    console.log(e);
  };

  return (
    <S.CalenderBackDiv>
      <S.CalenContainerDiv>
        <Calendar
          onChange={onChangeClickedDate} //달력의 property
          value={date}
          tileContent={addContent}
          formatDay={(locale, date) => moment(date).format('D')}
          view={'month'}
          next2Label={null}
          prev2Label={null}
          // onClickDay={onClickDayEachDateHandler}
        />
      </S.CalenContainerDiv>
    </S.CalenderBackDiv>
  );
};

export default Calender;
