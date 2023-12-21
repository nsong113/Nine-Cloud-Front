import React, { useEffect, useRef, useState } from 'react';
import * as S from './CommunityMain.style';
import { RiMessage3Fill } from 'react-icons/ri';

import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { getInfiniteDiaries } from 'src/apis/diary';
import CommunityEach from './CommunityEach';
import { getInfiniteCommunity } from 'src/apis/community';

const CommunityMain = () => {
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number | undefined>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);

  const [ref, inView] = useInView();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const {
    data: viewAllData, //현재까지 로드된 데이터를 나타냅니다. 이 속성은 배열 형태로 각 페이지의 데이터를 가지고 있습니다.
    isLoading, //데이터를 가져오는 중인지 여부를 나타냅니다. true이면 데이터를 아직 받아오는 중이라는 뜻입니다.
    hasNextPage, //더 많은 페이지가 있는지 여부를 나타냅니다. true이면 다음 페이지가 존재한다는 뜻이며, 이 값을 사용하여 무한 스크롤을 구현할 수 있습니다.
    isError,
    isSuccess,
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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Loading failed...</div>;
  }
  if (isSuccess) {
    // console.log('data', viewAllData);
  }

  // const [emotionPicture, setEmotionPicture] = useState('');

  return (
    <S.MainContainer>
      <S.MainHeader>
        <S.MainFlexBoxDiv>
          <img alt='logo' src='/logo_final.png' />
          <S.MainProfileFlexDiv>
            <img alt='profile' src='/avatar.png' />
          </S.MainProfileFlexDiv>
        </S.MainFlexBoxDiv>
      </S.MainHeader>
      <S.MainSectionContainer>
        <S.MainSectionHeaderWrapper>
          <S.MainFlexBox style={iconStyle}>
            <RiMessage3Fill />
            <S.MainProfileDiv>
              <S.MainHeaderContent>
                오늘의 채팅방을 <br />
                방문해보세요
              </S.MainHeaderContent>
              <S.MainHeaderOn></S.MainHeaderOn>
            </S.MainProfileDiv>
          </S.MainFlexBox>
        </S.MainSectionHeaderWrapper>
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
