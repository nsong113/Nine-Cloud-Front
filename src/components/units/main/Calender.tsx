import { useState } from 'react';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import { useNavigate } from 'react-router-dom';
import { addMonths, format, getYear, subMonths } from 'date-fns';
import { dayList } from './test';
import MyPageModal from 'src/components/commons/modals/myPage/myPageModal';
import { useQuery } from 'react-query';
import { getPosts } from 'src/apis/cheolmin-api/apis';
import { Tooltip } from 'src/components/commons/utills/tooltip/tooltip';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Image from './Image';

const Calender = () => {
  const navigate = useNavigate();
  const { data } = useQuery('posts', getPosts);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('');
  const {
    weekCalendarList,
    currentDate,
    setCurrentDate,
    currentMonth,
    setCurrentMonth,
    DAY_LIST,
  } = useCalendar();

  const formattedMonth = format(currentMonth, 'MMMM');
  const allDate = weekCalendarList.flat().filter((value) => value !== 0);

  const onClickPrevMonth = () => {
    const newDate = subMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setAnimationDirection('rightToLeft');
  };

  const onClickNextMonth = () => {
    const newDate = addMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setAnimationDirection('leftToRight');
  };

  const filteredDayList = dayList.filter((el) => el !== null);

  const getEmotionStatusForDate = (date: string) => {
    const matchingDay = filteredDayList.find(
      (el: any) =>
        //day 일치여부 조회 로직
        el?.date && parseInt(el.date.split('.')[2]).toString() === date
    );

    return matchingDay ? matchingDay.EmotionStatus : 0;
  };

  const emotionImages: { [key: string]: string | undefined } = {
    1: '/blue.png',
    2: '/Pink.png',
    3: '/Purple.png',
    4: '/Lemon.png',
  };

  const getEmotion = (emotionStatus: any) => {
    return emotionImages[emotionStatus] || '/blank.png';
  };

  const getId = (date: string) => {
    const matchingDay = dayList.find(
      (el: any) =>
        el?.date && parseInt(el.date.split('.')[2], 10).toString() === date
    );
    return matchingDay ? matchingDay.id : 0;
  };

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const onClickListBtn = () => {
    navigate('/list');
  };

  const onClickGoToDetailHandler = (id: any) => () => {
    if (id !== 0) {
      navigate(`/post/${id}`);
    } else {
      alert('작성하신 글이 없습니다.');
    }
  };
  const profileImg = localStorage.getItem('image');
  const year = getYear(currentDate);
  return (
    <>
      <S.CalendarContainerDiv>
        <S.HeaderContainerDiv>
          {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
          <S.CalenderHeaderDiv>
            <S.LogoBoxDiv>
              <S.LogoImg src='/logo.png' alt='로고' />
              <S.BrandTextBoxDiv>
                <span>NINE</span>
                <span>CLOUD</span>
              </S.BrandTextBoxDiv>
            </S.LogoBoxDiv>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <S.HeaderLeftWrapperDiv>
                <S.DateBoxDiv>
                  <S.YearTextSpan>{year}</S.YearTextSpan>
                  <S.PrevNextMonthBoxDiv>
                    <S.PrevMonth onClick={onClickPrevMonth} size={30} />
                    <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
                    <S.NextMonth onClick={onClickNextMonth} size={30} />
                  </S.PrevNextMonthBoxDiv>
                </S.DateBoxDiv>
              </S.HeaderLeftWrapperDiv>
              <S.RightProfile>
                <S.ButtonWrapperDiv>
                  <Tooltip message='리스트'>
                    <S.StyledHoverTapButton
                      whileHover={{ scale: 1.1 }} //마우스를 올리면 자연스럽게 scale이 커진다
                      whileTap={{ scale: 0.9 }} // 마우스를 클릭하면 자연스럽게 줄어든다
                      onClick={onClickListBtn}
                    >
                      <S.List />
                    </S.StyledHoverTapButton>
                  </Tooltip>
                  <Tooltip message='마이페이지'>
                    <S.StyledHoverTapButton
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onClickMyProfile}
                    >
                      {!profileImg && (
                        <S.ProfileBoxDiv>
                          <S.AvatarSizeImg src='/avatar.png' alt='기본' />
                        </S.ProfileBoxDiv>
                      )}
                      {profileImg && (
                        <div>
                          <S.AvatarSizeImg src={profileImg} alt='기본' />
                        </div>
                      )}
                    </S.StyledHoverTapButton>
                  </Tooltip>
                </S.ButtonWrapperDiv>
              </S.RightProfile>
            </div>
          </S.CalenderHeaderDiv>
        </S.HeaderContainerDiv>
        <Animation>
          {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
          <S.LeftRightAnimeButton
            key={currentMonth.toString()}
            initial={{
              opacity: 0,
              x: animationDirection === 'leftToRight' ? '-75%' : '75%',
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: animationDirection === 'leftToRight' ? '75%' : '-75%',
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
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
                      const firstDayOfMonth = new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth(),
                        1
                      );
                      const daysBeforeFirstDay = firstDayOfMonth.getDay();

                      const cellDate =
                        weekIndex * 7 + dayIndex - daysBeforeFirstDay + 1;
                      if (cellDate <= 0 || cellDate > allDate.length) {
                        return <S.TableCell key={dayIndex}></S.TableCell>;
                      }

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
                          onClick={onClickGoToDetailHandler(id)}
                          isToday={isToday}
                        >
                          {day !== 0 ? (
                            <S.DayWrapperDiv>
                              <S.DateWrapperDiv>
                                <S.DateSpan isToday={isToday}>
                                  {cellDate}
                                </S.DateSpan>
                                {cellDate <= currentDate.getDate() && (
                                  <S.DateImg
                                    src={getEmotion(emotionStatus)}
                                    alt={`Emotion ${emotionStatus}`}
                                  />
                                )}
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
            </S.CalendarTable>
          </S.LeftRightAnimeButton>
        </Animation>
        <Image />
      </S.CalendarContainerDiv>
    </>
  );
};

export default Calender;
