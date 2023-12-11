import React, { useState } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { Toggle } from 'src/components/commons/utills/Toggle/Toggle';
import { addMonths, format, getYear, setMonth, subMonths } from 'date-fns';
import ViewAllInfinite from './ViewAllInfinite';
import MyPageModal from 'src/components/commons/modals/myPage/myPageModal';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'src/components/commons/utills/tooltip/tooltip';
import Animation from 'src/components/commons/utills/Animation/Animation';
import { motion } from 'framer-motion';
// import InfiniteScroll from 'react-infinite-scroller';

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

  const handlePrevMonth = () => {
    const newDate = subMonths(currentMonth, 1);
    setCurrentMonth(newDate);
    // 애니메이션을 위해 클래스 추가
    setAnimationClass('slide-left');

    // 일정 시간이 지난 후에 애니메이션 클래스 제거
    setTimeout(() => {
      setAnimationClass('');
      setCurrentDate(newDate);
    }, animationDuration);
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

  const onClickNextMonth = () => {
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
          {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
          <S.HeaderContainerDiv>
            <S.CalenderHeaderDiv>
              {' '}
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
