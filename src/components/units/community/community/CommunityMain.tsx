import React, { useEffect, useState } from 'react';
import * as S from './CommunityMain.style';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from 'react-query';
import CommunityEach from './CommunityEach';
import { getInfiniteCommunity } from 'src/apis/community';
import { Link, useNavigate } from 'react-router-dom';
import { getPosts } from 'src/apis/cheolmin-api/apis';
import useSetEmotionIcon from 'src/components/commons/hooks/useSetEmotionIcon';

const CommunityMain = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [profilePicture, setProfilePicture] = useState('/avatar.png');

  const todayDate = new Date();
  const currentYear = todayDate.getFullYear(); //2023
  const currentMonth = todayDate.getMonth() + 1; //12
  const currentDate = todayDate.getDate(); //12
  const arrayDate = currentDate - 1;

  const { data: todayOriginData, isSuccess } = useQuery(
    ['posts', currentMonth, currentYear],
    () => getPosts({ currentYear, currentMonth })
  );

  const todayData = todayOriginData?.data[arrayDate];
  const [countAverage, setTodayEmotion] = useState(
    todayData?.EmotionStatus || 0
  );
  const [weather, setWeather] = useState(todayData?.weather || '');
  const { emotionPicture } = useSetEmotionIcon(weather, countAverage);
  useEffect(() => {
    setProfilePicture(todayOriginData?.userProfileImg.profileImg || '');
  }, [todayOriginData]);

  const {
    data: viewAllData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    'getInfiniteCommunity',
    ({ pageParam = 1 }) => getInfiniteCommunity(pageParam),
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

  useEffect(() => {
    if (todayData) {
      setTodayEmotion(todayData.EmotionStatus);
      setWeather(todayData.weather);
    }
  }, [todayData, isSuccess]);

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <S.MainContainer>
      <S.MainHeader>
        <S.MainFlexBoxDiv>
          <S.Div onClick={goToMain}>
            <img alt='logo' src='/logo_final.png' />
          </S.Div>
          <S.MainProfileFlexDiv>
            <img
              alt='프로필이미지'
              src={profilePicture}
              style={profileImgStyle}
            />
          </S.MainProfileFlexDiv>
        </S.MainFlexBoxDiv>
      </S.MainHeader>
      <S.MainSectionContainer>
        <S.MainSectionHeaderWrapper>
          <S.MainFlexBox style={iconStyle}>
            <S.MainTitleFlex>
              <S.MainTodayEmoji>
                <img
                  src={emotionPicture}
                  style={emotionPictureStyle}
                  alt='감정이모티콘'
                />
              </S.MainTodayEmoji>
              <S.MainChatTitle>
                {/* <S.ChatTitleSpan>탕수육</S.ChatTitleSpan> 님! <br />  */}
                오늘 같은 감정인 사람들과 <br />
                대화를 나눠보세요!
              </S.MainChatTitle>
            </S.MainTitleFlex>
            <S.MainProfileDiv>
              <S.MainHeaderOn>
                <S.MainChattingRoomFlex onClick={() => alert('준비중 입니다.')}>
                  <img
                    src='/chatting_emoji.png'
                    alt='채팅방 가기'
                    style={chatting_emoji}
                  />
                  <S.MainChattingContent>참여하기</S.MainChattingContent>
                </S.MainChattingRoomFlex>
              </S.MainHeaderOn>
            </S.MainProfileDiv>
          </S.MainFlexBox>
        </S.MainSectionHeaderWrapper>
        <S.MainLine />
        <S.MainSlideBox>
          <S.MainMapContainer>
            <div>
              {viewAllData?.pages.map((page, pageIndex) => {
                return page?.result.data.map((item: any, itemIndex: number) => {
                  return (
                    <CommunityEach
                      key={`page-${pageIndex}-item-${itemIndex}`}
                      item={item}
                    />
                  );
                });
              })}
            </div>
            <div ref={ref} style={{ color: 'transparent' }}>
              Loading...
            </div>
          </S.MainMapContainer>
        </S.MainSlideBox>
      </S.MainSectionContainer>
    </S.MainContainer>
  );
};

export default CommunityMain;

const iconStyle = {
  fontSize: '30px',
};

const emotionPictureStyle = {
  width: '80%',
  height: '80%',
};

const chatting_emoji = {
  width: '30px',
  height: '30px',
};

const profileImgStyle = {
  width: '58px',
  height: '58px',
  borderRadius: '50%',
  cursor: 'pointer',
};
