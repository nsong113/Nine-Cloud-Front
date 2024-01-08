import { useEffect, useState } from 'react';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Loading from 'src/components/commons/utills/loading/Loading';
import CalendarBody from './CalendarBody';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import { useNavigate } from 'react-router-dom';
import {
  addMonths,
  format,
  getMonth,
  getYear,
  subMonths,
  getDate,
} from 'date-fns';
import { useQuery } from 'react-query';
import { getPosts } from 'src/apis/cheolmin-api/apis';
import GPTOverlay from 'src/components/commons/modals/modalSetting/overlay/GPTOverlay/GPTOverlay';
import { useRecoilState } from 'recoil';
import { isFireWork } from 'src/states/firework';

const canvasStyles: React.CSSProperties = {
  position: 'fixed',
  width: '430px',
  height: '100%',
  marginRight: '400px',
  marginTop: '500px',
  zIndex: '3',
};

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

  const [isAcriveFireWork, setIsActiveFireWork] =
    useRecoilState<boolean>(isFireWork);
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

  useEffect(() => {
    if (isAcriveFireWork) {
      // Fireworks가 끝난 후에 isFireWork를 false로 변경
      const timeoutId = setTimeout(() => {
        setIsActiveFireWork(false);
      }, 1000); // duration 값에 맞춰서 설정 (여기서는 4초로 설정)

      // 컴포넌트가 언마운트되거나 다시 렌더링될 때 clearTimeout
      return () => clearTimeout(timeoutId);
    }
  }, [isAcriveFireWork]);

  const today = getDate(currentDate) - 1;
  const diaryCheck = data?.data[today];

  if (isLoading) {
    return <Loading />;
  }

  const onClickListBtn = () => {
    navigate('/list');
  };

  const onClickNextMonth = async () => {
    const newDate = addMonths(currentMonth, 1);
    await setCurrentMonth(newDate);
    setCurrentDate(newDate);
    setAnimationDirection('leftToRight');
    setCurrentYear(newDate);
  };

  const onClickPrevMonth = async () => {
    const newDate = subMonths(currentMonth, 1);
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

  const decorateOptions = (originalOptions: any) => {
    return {
      ...originalOptions,
      particleCount: 100, // 조각 개수 설정
      spread: 80, // 퍼짐 정도 설정
      startVelocity: 50, // 초기 속도 설정
      ticks: 100, // 애니메이션 지속 시간 설정
      origin: { x: 0.5, y: 0.8 }, // 발사 위치 설정
      shapes: ['circle', 'circle', 'square'], // 이미지 배열을 shapes로 설정
      gravity: 2, // 중력 설정
    };
  };

  return (
    <>
      <S.CalendarContainerDiv>
        <S.HeaderWrapperDiv>
          <S.DateBoxDiv>
            {/* <S.ExcludeImg
              src='https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/exclude.png'
              rel='preload'
              alt='이미지'
            /> */}
            <S.YearMonthChangeBoxDiv>
              <S.StyledHoverTapButton
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 1 }}
              >
                <S.PrevMonth onClick={onClickPrevMonth} size={30} />
              </S.StyledHoverTapButton>
              <S.MonthNumberSpan>{month}</S.MonthNumberSpan>
              <S.StyledHoverTapButton
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 1 }}
              >
                <S.NextMonth onClick={onClickNextMonth} size={30} />
              </S.StyledHoverTapButton>
            </S.YearMonthChangeBoxDiv>
            <S.PrevNextMonthBoxDiv>
              <S.YearTextSpan>{year}</S.YearTextSpan>
              <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
            </S.PrevNextMonthBoxDiv>
          </S.DateBoxDiv>
          <S.RightProfile>
            <S.ButtonWrapperDiv>
              {/* <Tooltip message='리스트'> */}
              <S.List
                src='https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/list.png'
                alt='리스트'
                rel='preload'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClickListBtn}
              />
              {isAcriveFireWork && (
                <Fireworks
                  autorun={{ speed: 0.5, duration: 3 }}
                  style={canvasStyles}
                  decorateOptions={decorateOptions} // 함수 실행을 위해 괄호를 추가
                />
              )}

              {/* </Tooltip> */}
            </S.ButtonWrapperDiv>
          </S.RightProfile>
        </S.HeaderWrapperDiv>

        <S.Test>
          <Animation>
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
                  currentYear={currentYear}
                  currentMonth={currentMonth}
                  currentDate={currentDate}
                  data={data}
                />
              </S.CalendarTable>
            </S.LeftRightAnimeButton>
          </Animation>
          {isGPTModal && (
            <GPTOverlay
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
