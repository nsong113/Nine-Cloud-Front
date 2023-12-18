import { useEffect, useState } from 'react';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import MyPageModal from 'src/components/commons/modals/myPage/myPageModal';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Image from './Image';
import Loading from 'src/components/commons/utills/loading/Loading';
import CalendarBody from './CalendarBody';
import { useNavigate } from 'react-router-dom';
import { addMonths, format, getYear, setMonth, subMonths } from 'date-fns';
import { Tooltip } from 'src/components/commons/utills/tooltip/tooltip';
import { useQuery } from 'react-query';
import { getPosts, getPrevMonthPosts } from 'src/apis/cheolmin-api/apis';

const Calender = () => {
  const navigate = useNavigate();
  const {
    weekCalendarList,
    currentDate,
    setCurrentDate,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    DAY_LIST,
  } = useCalendar();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('');
  const formattedMonth = format(currentMonth, 'MMMM');
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const { data, isLoading, refetch } = useQuery(
    ['posts', currentMonth, currentYear],
    () =>
      getPosts({
        currentYear: getYear(currentDate),
        currentMonth: format(currentMonth, 'M'),
      })
  );

  console.log('current Year', currentYear, 'current Month', currentMonth);

  console.log(data);
  if (isLoading) {
    return <Loading />;
  }

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const onClickListBtn = () => {
    navigate('/list');
  };

  const profileImg = localStorage.getItem('image');

  const onClickNextMonth = async () => {
    const newDate = addMonths(currentMonth, 1);
    await setCurrentMonth(newDate); // setCurrentMonth 함수의 실행을 기다림
    setCurrentDate(newDate);
    setAnimationDirection('leftToRight');
    setCurrentYear(newDate); // setCurrentYear를 수정하여 바로 반영
    // await refetch(); // 다음 달 데이터 다시 가져오기
  };

  const onClickPrevMonth = async () => {
    const newDate = subMonths(currentMonth, 1);
    await setCurrentMonth(newDate); // setCurrentMonth 함수의 실행을 기다림
    setCurrentDate(newDate);
    setAnimationDirection('rightToLeft');
    setCurrentYear(newDate); // setCurrentYear를 수정하여 바로 반영
    // await refetch(); // 이전 달 데이터 다시 가져오기
  };

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
                  <S.YearMonthChangeBoxDiv>
                    <S.YearTextSpan>{year}</S.YearTextSpan>
                    <S.PrevMonth onClick={onClickPrevMonth} size={30} />
                    <S.NextMonth onClick={onClickNextMonth} size={26} />
                  </S.YearMonthChangeBoxDiv>
                  <S.PrevNextMonthBoxDiv>
                    <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
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
        <S.Test>
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
                {/* 캘린더 바디 컴포넌트 */}
                <CalendarBody
                  weekCalendarList={weekCalendarList}
                  currentMonth={currentMonth}
                  currentDate={currentDate}
                  data={data}
                />
              </S.CalendarTable>
            </S.LeftRightAnimeButton>
          </Animation>
          <Image data={data} />
        </S.Test>
      </S.CalendarContainerDiv>
    </>
  );
};

export default Calender;
