import React, { useEffect, useState } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { addMonths, format, getYear, subMonths } from 'date-fns';
import ViewAllInfinite from './ViewAllInfinite';
import MyPageModal from 'src/components/commons/modals/myPage/myPageModal';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'src/components/commons/utills/tooltip/tooltip';
import Animation from 'src/components/commons/utills/Animation/Animation';
import { useInfiniteQuery } from 'react-query';
import { getInfiniteDiaries } from 'src/apis/diary';
import { getMonth } from 'date-fns';

//- inView라는 훅을 제공한다. ref 속성을 내가 지정한 곳이 화면에 보이는지, 안보이는지 감지하는 역할을 한다. Boolean값을 반환한다. 내가 지정한 요소가 화면에 보이면 true, 보이지 않으면 false를 반환한다.
import { useInView } from 'react-intersection-observer';

const ViewAll = () => {
  const animationDuration = 300; // 애니메이션 지속 시간(ms)
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState('');
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const formattedMonth = format(currentMonth, 'MMMM');
  const [isToggle, setIsToggle] = useState(false);
  const profileImg = localStorage.getItem('image'); //나중에 db에서 get하기
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [ref, inView] = useInView();

  const month = getMonth(newDate) + 1;

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };
  const onClickListBtn = () => {
    navigate('/main');
  };
  const onClickLogo = () => {
    navigate('/main');
  };

  const onClickGotoDetailPage = (id: any) => {
    navigate(`/post/${id}`);
    console.log('click');
  };

  const {
    data: viewAllData, //현재까지 로드된 데이터를 나타냅니다. 이 속성은 배열 형태로 각 페이지의 데이터를 가지고 있습니다.
    isLoading, //데이터를 가져오는 중인지 여부를 나타냅니다. true이면 데이터를 아직 받아오는 중이라는 뜻입니다.
    hasNextPage, //더 많은 페이지가 있는지 여부를 나타냅니다. true이면 다음 페이지가 존재한다는 뜻이며, 이 값을 사용하여 무한 스크롤을 구현할 수 있습니다.
    isError,
    isSuccess,
    fetchNextPage, //다음 페이지를 가져오기 위해 호출할 함수입니다. 이 함수를 호출하면 다음 페이지의 데이터를 가져옵니다.
  } = useInfiniteQuery(
    'getInfiniteDiary',
    ({ pageParam = 1 }) => getInfiniteDiaries(pageParam),
    {
      //다음 페이지의 pageParam 값을 결정하는 데 사용
      getNextPageParam: (_lastPage) => {
        console.log('_lastPage', _lastPage);
        if (_lastPage?.isLast) {
          return _lastPage?.nextPage;
        } else {
          return null;
        }
      },
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Loading failed...</div>;
  }
  if (isSuccess) {
    console.log('data', viewAllData);
  }

  return (
    <>
      <S.LargeContainer>
        <S.CalendarContainerDiv>
          {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
          <S.HeaderWrapperDiv>
            <S.DateBoxDiv>
              <S.ExcludeImg src='/exclude.png' alt='이미지' />
              <S.YearMonthChangeBoxDiv>
                <div></div>
                <S.MonthNumberSpan>{month}</S.MonthNumberSpan>
              </S.YearMonthChangeBoxDiv>
              <S.PrevNextMonthBoxDiv>
                <S.YearTextSpan>{year}</S.YearTextSpan>
                <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
              </S.PrevNextMonthBoxDiv>
            </S.DateBoxDiv>
            <S.ViewAllRightProfile>
              <S.ButtonWrapperDiv>
                <S.RightProfile>
                  {/* <Tooltip message='달력'> */}
                  <S.StyledHoverTapButton
                    whileHover={{ scale: 1.1 }} //마우스를 올리면 자연스럽게 scale이 커진다
                    whileTap={{ scale: 0.9 }} // 마우스를 클릭하면 자연스럽게 줄어든다
                    onClick={onClickListBtn}
                  >
                    <S.Calendar />
                  </S.StyledHoverTapButton>
                  {/* </Tooltip> */}
                </S.RightProfile>
              </S.ButtonWrapperDiv>
            </S.ViewAllRightProfile>
          </S.HeaderWrapperDiv>
          <Animation>
            <S.ViewAllWrapperDiv>
              <div>
                {viewAllData?.pages.map((page, pageIndex) => {
                  return page?.result.data.map(
                    (item: any, itemIndex: number) => {
                      return (
                        <ViewAllInfinite
                          key={`page-${pageIndex}-item-${itemIndex}`}
                          item={item}
                        />
                      );
                    }
                  );
                })}
              </div>
              <div ref={ref} style={{ color: 'transparent' }}>
                Loading...
              </div>
            </S.ViewAllWrapperDiv>
          </Animation>
        </S.CalendarContainerDiv>
      </S.LargeContainer>
    </>
  );
};

export default ViewAll;
