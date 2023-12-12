import React, { useEffect, useState } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { addMonths, format, getYear, setMonth, subMonths } from 'date-fns';
import ViewAllInfinite from './ViewAllInfinite';
import MyPageModal from 'src/components/commons/modals/myPage/myPageModal';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'src/components/commons/utills/tooltip/tooltip';
import Animation from 'src/components/commons/utills/Animation/Animation';
import { motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroller';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getDiary, getInfiniteDiaries } from 'src/apis/diary';
import { IViewAllProps } from './Main.types';
// import useSearchProductQuery from 'src/components/commons/hooks/useIntersection';
// import { useQuery } from '@apollo/client';

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

  //렌더링 되자마자 보이는 것
  const [isPrefetchData, setIsPrefetchData] = useState<IViewAllProps[]>([]);

  const handlePrevMonth = () => {
    //여기 지금 선언만 되고 사용이 안됨
    const newDate = subMonths(currentMonth, 1);
    setCurrentMonth(newDate);
    // 애니메이션을 위해 클래스 추가
    setAnimationClass('slide-left');

    // 일정 시간이 지난 후에 애니메이션 클래스 제거
    setTimeout(() => {
      setAnimationClass('');
      setCurrentDate(newDate);
    }, animationDuration);
    //전 달꺼 다시 get요청
  };

  const onClickPrevMonth = () => {
    const newDate = addMonths(currentMonth, 1);
    setCurrentMonth(newDate);
    // 애니메이션을 위해 클래스 추가
    setAnimationClass('slide-right');

    // 일정 시간이 지난 후에 애니메이션 클래스 제거
    setTimeout(() => {
      setAnimationClass('');
      setCurrentDate(newDate);
    }, animationDuration);
  };

  const [isToggle, setIsToggle] = useState(false);
  const onClickNextMonth = () => {
    setIsToggle((prev) => !prev);
  };
  const profileImg = localStorage.getItem('image'); //나중에 db에서 get하기
  const [isActiveModal, setIsActiveModal] = useState(false);

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };
  const onClickListBtn = () => {
    navigate('/main');
  };
  const onClickLogo = () => {
    navigate('/main');
  };

  //초기데이터를 이렇게 가져올 필요 없이 useInfiniteQuery가 해결해줌
  // const { data: items } = useQuery('getDiary', getDiary);

  // useEffect(() => {
  //   setIsPrefetchData(items);
  // }, [isPrefetchData]);

  const {
    data, //현재까지 로드된 데이터를 나타냅니다. 이 속성은 배열 형태로 각 페이지의 데이터를 가지고 있습니다.
    isLoading, //데이터를 가져오는 중인지 여부를 나타냅니다. true이면 데이터를 아직 받아오는 중이라는 뜻입니다.
    isFetching, //데이터를 다시 가져오는 중인지 여부를 나타냅니다. true이면 현재 데이터를 다시 가져오는 중이라는 뜻입니다.
    hasNextPage, //더 많은 페이지가 있는지 여부를 나타냅니다. true이면 다음 페이지가 존재한다는 뜻이며, 이 값을 사용하여 무한 스크롤을 구현할 수 있습니다.
    fetchNextPage, //다음 페이지를 가져오기 위해 호출할 함수입니다. 이 함수를 호출하면 다음 페이지의 데이터를 가져옵니다.
    isFetchingNextPage, //다음 페이지를 가져오는 중인지 여부를 나타냅니다. true이면 다음 페이지를 가져오는 중이라는 뜻입니다.
  } = useInfiniteQuery(
    ['getInfiniteDiary'],

    ({ pageParam = 1 }) => getInfiniteDiaries(pageParam),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 100) {
          return pages.length + 1;
        } else return undefined;
      },
    }
  );

  console.log('data', data);

  useEffect(() => {
    // 페이지 로딩 중이거나 다음 페이지를 가져오는 중이 아닐 때만 실행
    if (!isLoading && !isFetchingNextPage) {
      // 데이터를 누적해서 업데이트

      setIsPrefetchData(
        (prevItems: IViewAllProps[]) =>
          [
            ...(prevItems || []),
            ...(data?.pages || []).flat(),
          ] as IViewAllProps[]
      );
    }
  }, [data, isLoading, isFetchingNextPage]);

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <div>Loading...</div>;

  /////////////////////////////////////////////

  const loadFunc = async () => {
    await fetchNextPage();
    // setIsPrefetchData((prevItems: any[]) => {
    //   [...prevItems, ...newData];
    // });
  };

  return (
    <>
      <div>
        <S.CalendarContainerDiv>
          {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
          <S.HeaderContainerDiv>
            <S.CalenderHeaderDiv>
              {' '}
              <S.LogoBoxDiv>
                <S.LogoImg src='/logo.png' alt='로고' onClick={onClickLogo} />
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
                    <Tooltip message='달력'>
                      <S.StyledHoverTapButton
                        whileHover={{ scale: 1.1 }} //마우스를 올리면 자연스럽게 scale이 커진다
                        whileTap={{ scale: 0.9 }} // 마우스를 클릭하면 자연스럽게 줄어든다
                        onClick={onClickListBtn}
                      >
                        <S.Calendar />
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
            <S.ViewAllWrapperDiv>
              <InfiniteScroll
                pageStart={0}
                // dataLength={data?.pages.flat().length || 0}
                loadMore={loadFunc}
                // next={fetchNextPage}
                hasMore={hasNextPage} //스크롤러에도 키기
                useWindow={false}
                loader={
                  <div className='loader' key={0}>
                    Loading ...
                  </div>
                }
              >
                {/* 이거를 Null이 아닌 것을 최신순으로 돌려줘야함 + 컴포넌트에 키값도 주기*/}
                {isPrefetchData?.map((item, index) => {
                  //통신 되면 isPrefetchData로 변경
                  return (
                    <ViewAllInfinite
                      key={item.UserId}
                      item={item}
                      // onClick={fetchNextPage}
                      // disabled={!hasNextPage}
                    />
                  );
                })}
              </InfiniteScroll>
            </S.ViewAllWrapperDiv>
          </Animation>
        </S.CalendarContainerDiv>
      </div>
    </>
  );
};

export default ViewAll;

const dummyData = [
  {
    diaryId: 1,
    UserId: 1,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 2,
    UserId: 2,
    EmotionStatus: 5,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-06T11:17:06.767Z',
    deletedAt: null,
    isPrivate: true,
  },
  {
    diaryId: 3,
    UserId: 3,
    EmotionStatus: 4,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-07T11:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: true,
  },
  {
    diaryId: 4,
    UserId: 5,
    EmotionStatus: 3,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-01T11:17:06.767Z',
    updatedAt: '2023-12-02T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 6,
    UserId: 6,
    EmotionStatus: 4,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-02T11:17:06.767Z',
    updatedAt: '2023-12-01T11:17:06.767Z',
    deletedAt: null,
    isPrivate: true,
  },
  {
    diaryId: 7,
    UserId: 7,
    EmotionStatus: 3,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-02T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 8,
    UserId: 8,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T12:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 9,
    UserId: 9,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T12:17:06.767Z',
    updatedAt: '2023-12-05T16:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 10,
    UserId: 13,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-03T01:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 14,
    UserId: 14,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 15,
    UserId: 15,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 15,
    UserId: 15,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 16,
    UserId: 17,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 17,
    UserId: 17,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
  {
    diaryId: 18,
    UserId: 18,
    EmotionStatus: 1,
    image: 'example.jpg',
    content: '오늘은 재미있었다',
    createdAt: '2023-12-05T11:17:06.767Z',
    updatedAt: '2023-12-05T11:17:06.767Z',
    deletedAt: null,
    isPrivate: false,
  },
];
