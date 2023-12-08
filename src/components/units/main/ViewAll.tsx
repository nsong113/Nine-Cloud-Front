import React, { useState } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { Toggle } from 'src/components/commons/utills/Toggle/Toggle';
import { addMonths, format, getYear, setMonth, subMonths } from 'date-fns';
import ViewAllInfinite from './ViewAllInfinite';
// import InfiniteScroll from 'react-infinite-scroller';

const ViewAll = () => {
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();

  const newDate = new Date(currentDate);
  const year = getYear(newDate);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const formattedMonth = format(currentMonth, 'MMMM');

  const handlePrevMonth = () => {
    const newDate = subMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    // setMonth((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    const newDate = addMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    // setMonth((prev) => prev + 1);
  };

  // const {data,fetchMore}=useQuery<Pick<IQuery,'dummyData'>IQueryFetchBoardArgs>(FETCH_BOARDS)

  // const onLoadMoreNextHandler = async () => {
  //   if (dummyData === undefined) return;
  //   await fetchMore({
  //     variables: { page: Math.ceil(dummyData?.length / 10) + 1 },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.dummyData) {
  //         return {
  //           dummyData: [...prev.dummyData],
  //         };
  //       }
  //       return {
  //         dummyData: [...prev.dummyData, ...fetchMoreResult.dummyData],
  //       };
  //     },
  //   });
  // };

  return (
    <>
      <div>
        <S.CalendarContainerDiv>
          <S.ViewAllWrapperDiv>
            {/* <InfiniteScroll
              pageStart={0}
              loadMore={onLoadMoreNextHandler}
              hasMore={true || false}
              useWindow={false}
              loader={
                <div className='loader' key={0}>
                  Loading ...
                </div>
              }
            > */}
            {/* 이거를 Null이 아닌 것을 최신순으로 돌려줘야함 + 컴포넌트에 키값도 주기*/}
            {dummyData.map((item, index) => {
              return <ViewAllInfinite key={item.UserId} item={item} />;
            })}
            {/* </InfiniteScroll> */}
          </S.ViewAllWrapperDiv>
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
