import React, { useEffect, useState } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { format, getYear, subMonths } from 'date-fns';
import ViewAllInfinite from './ViewAllInfinite';
import { useNavigate } from 'react-router-dom';
import Animation from 'src/components/commons/utills/Animation/Animation';
import { useInfiniteQuery } from 'react-query';
import { getInfiniteDiaries } from 'src/apis/diary';
import { getMonth } from 'date-fns';

import { useInView } from 'react-intersection-observer';

const ViewAll = () => {
  const animationDuration = 300;
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();
  const navigate = useNavigate();
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const formattedMonth = format(currentMonth, 'MMMM');
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [ref, inView] = useInView();

  const month = getMonth(newDate) + 1;
  const today = new Date();
  const formattedTodayDate = today.toISOString();

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const {
    data: viewAllData,
    isLoading,
    hasNextPage,
    isError,
    isSuccess,
    fetchNextPage,
  } = useInfiniteQuery(
    'getInfiniteDiary',
    ({ pageParam = 1 }) => getInfiniteDiaries(pageParam, formattedTodayDate),
    {
      getNextPageParam: (_lastPage) => {
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
    // console.log('data', viewAllData);
  }

  return (
    <>
      <S.LargeContainer>
        <S.CalendarContainerDiv>
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
                  <S.StyledHoverTapButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <S.Calendar />
                  </S.StyledHoverTapButton>
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
