import React, { useEffect, useState } from 'react';
import * as S from './CommunityMain.style';
import { RiMessage3Fill } from 'react-icons/ri';

import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from 'react-query';
import CommunityEach from './CommunityEach';
import { getInfiniteCommunity } from 'src/apis/community';
import { useNavigate } from 'react-router-dom';
import { getPosts } from 'src/apis/cheolmin-api/apis';

const CommunityMain = () => {
  const navigate = useNavigate();

  const [ref, inView] = useInView();
  const [emotionPicture, setEmotionPicture] = useState('');
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
  const [todayEmotion, setTodayEmotion] = useState(
    todayData?.EmotionStatus || 0
  );
  const [weather, setWeather] = useState(todayData?.weather || '');

  useEffect(() => {
    setProfilePicture(todayOriginData?.userProfileImg.profileImg || '');
  }, [todayOriginData]);

  console.log('profilePicture', profilePicture);

  const {
    data: viewAllData, //현재까지 로드된 데이터를 나타냅니다. 이 속성은 배열 형태로 각 페이지의 데이터를 가지고 있습니다.
    isLoading, //데이터를 가져오는 중인지 여부를 나타냅니다. true이면 데이터를 아직 받아오는 중이라는 뜻입니다.
    hasNextPage, //더 많은 페이지가 있는지 여부를 나타냅니다. true이면 다음 페이지가 존재한다는 뜻이며, 이 값을 사용하여 무한 스크롤을 구현할 수 있습니다.
    isError,
    fetchNextPage, //다음 페이지를 가져오기 위해 호출할 함수입니다. 이 함수를 호출하면 다음 페이지의 데이터를 가져옵니다.
  } = useInfiniteQuery(
    'getInfiniteCommunity',
    ({ pageParam = 1 }) => getInfiniteCommunity(pageParam),
    {
      //다음 페이지의 pageParam 값을 결정하는 데 사용
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

  console.log('todayOriginData', todayOriginData);

  console.log('todayData', todayData);

  useEffect(() => {
    console.log('Entering useEffect');
    if (todayData) {
      console.log('Setting todayEmotion and weather');
      setTodayEmotion(todayData.EmotionStatus);
      setWeather(todayData.weather);
    }
  }, [todayData, isSuccess]);

  console.log('123123123', todayEmotion, weather);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Loading failed...</div>;
  }

  const goToMain = () => {
    navigate('/main');
  };

  // const [emotionPicture, setEmotionPicture] = useState('');
  //React Hook "useState" is called conditionally.
  //Rendered more hooks than during the previous render.

  let emotionPath = '';

  if (weather === '1') {
    if (todayEmotion <= 1.6) {
      emotionPath = '/rain_sad.png';
    } else if (todayEmotion <= 3.3) {
      emotionPath = '/rain_soso.png';
    } else if (todayEmotion <= 5) {
      emotionPath = '/rain_happy.png';
    }
  } else if (weather === '2') {
    if (todayEmotion <= 1.6) {
      emotionPath = '/cloud_sad.png';
    } else if (todayEmotion <= 3.3) {
      emotionPath = '/cloud_soso.png';
    } else if (todayEmotion <= 5) {
      emotionPath = '/cloud_happy.png';
    }
  } else if (weather === '3') {
    if (todayEmotion <= 1.6) {
      emotionPath = '/sun_sad.png';
    } else if (todayEmotion <= 3.3) {
      emotionPath = '/sun_soso.png';
    } else if (todayEmotion <= 5) {
      emotionPath = '/sun_happy.png';
    }
  } else {
    console.log('아무것도 아님');
  }

  if (emotionPath && emotionPath !== emotionPicture) {
    setEmotionPicture(emotionPath);
  }

  console.log('todayOriginData', todayOriginData);

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
              {/* <S.MainHeaderContent>
                오늘의 채팅방을 <br />
                방문해보세요
              </S.MainHeaderContent> */}
              <S.MainHeaderOn>
                <S.MainChattingRoomFlex>
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
  width: '100%',
  height: '100%',
};

const chatting_emoji = {
  width: '40px',
  height: '40px',
};

const profileImgStyle = {
  width: '58px',
  height: '58px',
  borderRadius: '50%',
};
