import React, { useState } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { Toggle } from 'src/components/commons/utills/Toggle/Toggle';
import { addMonths, format, getYear, setMonth, subMonths } from 'date-fns';
import ViewAllInfinite from './ViewAllInfinite';
import MyPageModal from 'src/components/commons/modals/myPage/myPageModal';
import { useNavigate } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroller';

const ViewAll = () => {
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();

  const navigate = useNavigate();

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

  const onClickChangeToggleHandler = () => {
    setIsToggle((prev) => !prev);
  };
  const profileImg = localStorage.getItem('image');
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };
  const onClickListBtn = () => {
    navigate('/main');
  };

  return (
    <>
      <div>
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
                <S.Calendar size={40} onClick={onClickListBtn}>
                  달력 보기
                </S.Calendar>
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
              </S.ButtonWrapperDiv>
            </S.RightProfile>
          </S.CalenderHeaderDiv>
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
