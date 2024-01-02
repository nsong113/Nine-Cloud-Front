import { useState } from 'react';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import MyPageModal from 'src/components/commons/modals/myPage/myPageModal';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Loading from 'src/components/commons/utills/loading/Loading';
import CalendarBody from './CalendarBody';
import { useNavigate } from 'react-router-dom';
import {
  addMonths,
  format,
  getMonth,
  getYear,
  subMonths,
  getDate,
} from 'date-fns';
import { QueryClient, useQuery } from 'react-query';
import { getPosts } from 'src/apis/cheolmin-api/apis';
import GPTModal from 'src/components/commons/modals/gpt/GPTModal';

const Calender = () => {
  const queryClient = new QueryClient();
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
  const month = String(getMonth(newDate) + 1).padStart(2, '0');
  const [isGPTModal, setIsGPTModal] = useState(false);

  const { data, isLoading } = useQuery(
    ['posts', currentMonth, currentYear],
    () =>
      getPosts({
        currentMonth: format(currentMonth, 'M'),
        currentYear: getYear(currentYear),
      }),
    {
      cacheTime: getYear(new Date()) !== getYear(currentYear) ? 0 : undefined,
      // cacheTime이 0이면 캐시를 비활성화하고, undefined면 기본 동작(캐시 사용)을 따릅니다.
    }
  );

  const today = getDate(currentDate) - 1;
  const diaryCheck = data?.data[today];

  if (isLoading) {
    return <Loading />;
  }

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const onClickListBtn = () => {
    navigate('/list');
  };

  console.log('테스트', getYear(newDate));

  const onClickNextMonth = async () => {
    const newDate = addMonths(currentMonth, 1);
    await setCurrentMonth(newDate);
    setCurrentDate(newDate);
    setAnimationDirection('leftToRight');
    setCurrentYear(newDate);
  };
  console.log('newDate', newDate);
  console.log('currentMonth', currentMonth);

  console.log('연도', currentYear);

  const onClickPrevMonth = async () => {
    const newDate = subMonths(currentMonth, 1);

    console.log('newDate', newDate);
    await setCurrentMonth(newDate);
    setCurrentDate(newDate);
    setAnimationDirection('rightToLeft');
    setCurrentYear(newDate);
  };

  const onClickCheckGPT = () => {
    setIsGPTModal(!isGPTModal);
  };

  const onClickConfirm = () => {
    setIsGPTModal(!isGPTModal);
  };
  const onClickGotoPost = () => {
    navigate('/post');
  };

  return (
    <>
      <S.CalendarContainerDiv>
        <S.HeaderWrapperDiv>
          <S.DateBoxDiv>
            <S.ExcludeImg src='/exclude.png' alt='이미지' />
            <S.YearMonthChangeBoxDiv>
              <S.PrevMonth onClick={onClickPrevMonth} size={30} />
              <S.MonthNumberSpan>{month}</S.MonthNumberSpan>
              <S.NextMonth onClick={onClickNextMonth} size={26} />
            </S.YearMonthChangeBoxDiv>
            <S.PrevNextMonthBoxDiv>
              <S.YearTextSpan>{year}</S.YearTextSpan>
              <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
            </S.PrevNextMonthBoxDiv>
          </S.DateBoxDiv>
          <S.RightProfile>
            <S.ButtonWrapperDiv>
              {/* <Tooltip message='리스트'> */}
              <S.StyledHoverTapButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClickListBtn}
              >
                <S.List />
              </S.StyledHoverTapButton>
              {/* </Tooltip> */}
            </S.ButtonWrapperDiv>
          </S.RightProfile>
        </S.HeaderWrapperDiv>

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
          {isGPTModal && (
            <GPTModal
              onOk={onClickConfirm}
              onGo={onClickGotoPost}
              diaryCheck={diaryCheck}
            />
          )}
          <S.GPTBox onClick={onClickCheckGPT}>
            <S.GPTFlexBox>
              <S.GPTLogo></S.GPTLogo>
              <S.GPTDiv>
                AI클라우드 <br />
                확인하기
              </S.GPTDiv>
            </S.GPTFlexBox>
          </S.GPTBox>
        </S.Test>
      </S.CalendarContainerDiv>
    </>
  );
};

export default Calender;
