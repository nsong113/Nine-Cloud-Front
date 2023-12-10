import React, { useState } from 'react';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import { useNavigate } from 'react-router-dom';
import { addMonths, format, getYear, subMonths } from 'date-fns';
import { dayList } from './test';
import MyPageModal from 'src/components/commons/modals/myPage/myPageModal';
import { useQuery } from 'react-query';
import { getPosts } from 'src/apis/cheolmin-api/apis';
import ViewAll from './ViewAll';
import { Toggle } from 'src/components/commons/utills/Toggle/Toggle';
import { Tooltip } from 'src/components/commons/utills/tooltip/tooltip';

const Calender = () => {
  const navigate = useNavigate();
  const [month, setMonth] = useState(12);
  const [selectedImage, setSelectedImage] = useState(null);
  const { data } = useQuery('posts', getPosts);

  console.log('data', data);

  const [isHappyImg, setIsHappyImg] = useState(false);
  const [isAngryImg, setIsAngryImg] = useState(false);
  const [isSadImg, setIsSadImg] = useState(false);
  const [isGloomyImg, setIsGloomyImg] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isActiveModal, setIsActiveModal] = useState(false);
  const formattedMonth = format(currentMonth, 'MMMM');
  const [isToggle, setIsToggle] = useState(false);

  console.log('formattedMonth', formattedMonth);
  //useCalender에서 내용 꺼내오기
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();

  //전체 데이터 분해
  const allDate = weekCalendarList
    //2차원 배열을 1차원으로 합쳐줌.
    .flat()
    .filter((value) => value !== 0);

  console.log('allDate', allDate);

  const newDate = new Date(currentDate);
  console.log('newDate', newDate);

  const handlePrevMonth = () => {
    const newDate = subMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setMonth((prev) => prev - 1);
  };

  const onClickHappyImg = () => {
    // 이미 선택된 감정 상태인 경우 선택을 해제하도록 처리
    setIsHappyImg((prev) => !prev);
  };

  const onClickAngryImg = () => {
    setIsAngryImg((prev) => !prev);
  };

  const onClickGloomyImg = () => {
    setIsGloomyImg((prev) => !prev);
  };

  const onClickSadImg = () => {
    setIsSadImg((prev) => !prev);
  };

  const handleNextMonth = () => {
    const newDate = addMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setMonth((prev) => prev + 1);
  };

  const filteredDayList = dayList.filter((el) => el !== null);

  console.log('filteredDayList', filteredDayList);

  const emotionImages: { [key: string]: string | undefined } = {
    1: '/blue.png',
    2: '/Pink.png',
    3: '/Purple.png',
    4: '/Lemon.png',
  };

  const happyCount = dayList.filter(
    (emotion) => emotion?.EmotionStatus === 1
  ).length;
  const angryCount = dayList.filter(
    (emotion) => emotion?.EmotionStatus === 2
  ).length;
  const gloomyCount = dayList.filter(
    (emotion) => emotion?.EmotionStatus === 3
  ).length;
  const sadCount = dayList.filter(
    (emotion) => emotion?.EmotionStatus === 4
  ).length;

  //감정 상태에 따라 다른 아이콘을 반환하기
  const getEmotion = (emotionStatus: any) => {
    return emotionImages[emotionStatus] || '/blank.png';
  };

  const getEmotionStatusForDate = (date: string) => {
    //dayList에서 날짜만 추출한 것과 전체 날짜가 일치하는 것이 matchignDay에 담긴다
    const matchingDay = filteredDayList.find(
      (el: any) =>
        el?.date && parseInt(el.date.split('.')[2], 10).toString() === date
    );

    console.log('matchingDay', matchingDay);

    return matchingDay ? matchingDay.EmotionStatus : 0;
  };

  const getId = (date: string) => {
    //dayList에서 날짜만 추출한 것과 전체 날짜가 일치하는 것이 matchignDay에 담긴다
    const matchingDay = dayList.find(
      (el: any) =>
        el?.date && parseInt(el.date.split('.')[2], 10).toString() === date
    );

    return matchingDay ? matchingDay.id : 0;
  };

  const getBorderColor = (emotionStatus: any) => {
    switch (emotionStatus) {
      case 1:
        return isHappyImg === true ? '#ffcc00' : 'white';
      case 2:
        return isAngryImg === true ? '#ff6666' : 'white';
      case 3:
        return isGloomyImg === true ? '#6666ff' : 'white';
      case 4:
        return isSadImg === true ? '#999999' : 'white';
      default:
        return 'white';
    }
  };

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const onClickChangeToggleHandler = () => {
    setIsToggle((prev) => !prev);
  };

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  const onClickListBtn = () => {
    navigate('/list');
  };

  //클릭했을 때 디테일 페이지로 이동
  const onClickGoToDetailHandler = (id: any) => {
    // 매칭된 요소의 id 가져오기
    if (id !== 0) {
      navigate(`/post/${id}`);
    } else {
      alert('작성하신 글이 없습니다.');
    }
  };
  const profileImg = localStorage.getItem('image');
  const year = getYear(newDate);
  return (
    <>
      <S.CalendarContainerDiv>
        <S.LogoImg></S.LogoImg>
        {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
        <S.CalenderHeaderDiv>
          <S.HeaderLeftWrapperDiv>
            <S.DateBoxDiv>
              <S.YearTextSpan>{year}</S.YearTextSpan>
              <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
            </S.DateBoxDiv>
            <S.PrevMonth size={20} onClick={handlePrevMonth} />
            <S.NextMonth size={20} onClick={handleNextMonth} />
          </S.HeaderLeftWrapperDiv>
          <S.RightProfile>
            <S.ButtonWrapperDiv
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Tooltip message='리스트'>
                <S.List size={40} onClick={onClickListBtn} />
              </Tooltip>
              <Tooltip message='마이페이지'>
                {!profileImg && (
                  <S.AvatarSizeImg
                    onClick={onClickMyProfile}
                    src='/avatar.png'
                    alt='기본'
                  />
                )}
                {profileImg && (
                  <S.AvatarSizeImg
                    onClick={onClickMyProfile}
                    src={profileImg}
                    alt='기본'
                  />
                )}
              </Tooltip>
            </S.ButtonWrapperDiv>
          </S.RightProfile>
        </S.CalenderHeaderDiv>
        {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
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
                  const selectedDay = dayList
                    .filter((el) => el !== null)
                    .map((el) => String(el?.id));

                  const firstDayOfMonth = new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth(),
                    1
                  );
                  const daysBeforeFirstDay = firstDayOfMonth.getDay();
                  const cellDate =
                    weekIndex * 7 + dayIndex - daysBeforeFirstDay + 1;

                  // 현재 주의 시작 이전이거나 이후인 경우 빈 셀을 반환합니다.
                  if (cellDate <= 0 || cellDate > allDate.length) {
                    return <S.TableCell key={dayIndex}></S.TableCell>;
                  }

                  const isMatchingDate = selectedDay.includes(String(cellDate));
                  const emotionStatus = getEmotionStatusForDate(
                    String(cellDate)
                  );
                  const id = getId(String(cellDate));

                  const isToday =
                    cellDate === new Date().getDate() &&
                    currentMonth.getMonth() === new Date().getMonth();
                  return (
                    <S.TableCell
                      key={dayIndex}
                      onClick={() => onClickGoToDetailHandler(id)}
                      style={{
                        border: isToday
                          ? '5px solid #4CAF50'
                          : '1px solid #ddd',
                      }}
                    >
                      {day !== 0 ? (
                        <div
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          <S.DateWrapperDiv>
                            <S.DateSpan
                              style={{
                                color: isToday ? 'black' : 'inherit',
                                backgroundColor: isToday
                                  ? '#FF4BB7'
                                  : '#D9D9D9',
                              }}
                            >
                              {cellDate}
                            </S.DateSpan>
                            {cellDate <= newDate.getDate() && (
                              <img
                                src={getEmotion(emotionStatus)}
                                alt={`Emotion ${emotionStatus}`}
                                style={{ width: '46px', height: '46px' }}
                              />
                            )}
                          </S.DateWrapperDiv>
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
              src='/blue.png'
              alt='해피'
            />
            <S.CountSpan>{happyCount}</S.CountSpan>
            <S.ExpressionImage
              onClick={onClickAngryImg}
              src='/Pink.png'
              alt='화남'
            />
            <S.CountSpan>{angryCount}</S.CountSpan>
            <S.ExpressionImage
              onClick={onClickGloomyImg}
              src='/Purple.png'
              alt='우울'
            />
            <S.CountSpan>{gloomyCount}</S.CountSpan>
            <S.ExpressionImage
              onClick={onClickSadImg}
              src='/Lemon.png'
              alt='슬픔'
            />
            <S.CountSpan>{sadCount}</S.CountSpan>
          </S.ImageBoxDiv>
        </S.ImageWrapperDiv>
      </S.CalendarContainerDiv>
    </>
  );
};

export default Calender;
