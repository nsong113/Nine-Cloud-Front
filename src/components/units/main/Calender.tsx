import React, { useEffect, useState } from 'react';
import * as S from './Main.styles';
import Calendar from 'react-calendar';
import { IdateOptions, Value } from './Main.types';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

const Calender = () => {
  const navigate = useNavigate();
  //유저가 달력에 클릭하는 날짜
  const [date, setData] = useState<Value>(new Date());
  //JSX.Element 타입은 리액트에서 사용하는 JSX 자료형을 명시
  const [clickedDate, setClickedDate] = useState<string>('');

  // const dayList1 = [
  //   '2023-03-10',
  //   '2023-03-21',
  //   '2023-04-02',
  //   '2023-04-14',
  //   '2023-04-27',
  // ];

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

    const matchingDay = dayList.find(
      (day) => day.date === moment(date).format('YYYY-MM-DD')
    );

    console.log(matchingDay);
    // const navigateId = matchingDay.id:number;
    const goToDetail = (navigateId: number) => {
      navigate(`/post/${navigateId}`);
    };

    // // 상태 업데이트
    // setClickedDate(goToDetail);
  };

  //오늘 날짜 관리
  const todayDate = moment().format('YYYY-MM-DD');

  //각 날짜별 emotion state에 따라 다르게 렌더링하기
  // console.log(dayList.find((day) => day.EmotionStatus === 2));

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
