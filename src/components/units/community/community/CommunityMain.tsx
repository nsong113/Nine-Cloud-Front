import React, { useEffect, useRef, useState } from 'react';
import * as S from './CommunityMain.style';
import { RiMessage3Fill } from 'react-icons/ri';
import CommunityEach from './CommunityEach';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { getInfiniteDiaries } from 'src/apis/diary';

// type MyEventHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

// interface CloudyProps {
//   hasCloudyArea?: boolean;
//   cloudyAreaBgColor?: string;
// }
// interface Props extends CloudyProps {
//   children: React.ReactNode;
// }

const CommunityMain = () => {
  // //드래그 중인지 여부를 나타내는 상태 변수
  // const [isDragging, setIsDragging] = useState(false);
  // console.log('isDragging', isDragging);
  // //드래그 시작 지점의 x좌포를 저장하는 상태 변수
  // const [startX, setStartX] = useState(0);
  // console.log('startX', startX);
  // //드래그 중인 동안 x좌표의 변위를 나타내는 상태 변수
  // const [offset, setOffset] = useState(0);
  // console.log('offset', offset);
  // //
  // //슬라이더를 참조하는 레프
  // const sliderRef = useRef<HTMLDivElement | null>(null);

  // //마우스 핸들러: 마우스 클릭으로 드래그 시작 시 호출되는 함수. 'isDragging'을 true로 설정하고 시작 지점 x좌표를 저장
  // const handleMouseDown: MyEventHandler = (e) => {
  //   setIsDragging(true);
  //   setStartX(e.clientX - startX);
  // };

  // //마우스 핸들러: 마우스 이동 중 호출되는 함수, 드래그 중이면 현재 x좌표와 시작 지점 x좌표의 차이를 offset에 저장
  // const handleMouseMove: MyEventHandler = (e) => {
  //   if (isDragging) {
  //     const deltaX = e.clientX - startX;
  //     setOffset(deltaX);
  //   }
  // };

  // //마우스 핸들러: 마우스 클릭 해제로 드래그 종료 시 호출되는 함수. 'isDragging'을 flase로 설정하고 시작 지점 x좌표 초기화
  // const handleMouseUp: MyEventHandler = (e) => {
  //   setIsDragging(false);
  //   setStartX(e.clientX - startX);
  // };

  // if (startX > 1000) {
  //   setStartX(startX - 900);
  // }

  // //마우스 이벤트 리스너 등록과 해제
  // useEffect(() => {
  //   //isDragging의 변화에 따라 mousemove, mouseup이벤트 리스너를 동록하거나 해제
  //   const sliderElement = sliderRef.current;
  //   if (sliderElement) {
  //     if (isDragging) {
  //       /* eslint-disable */
  //       sliderElement.addEventListener('mousemove', handleMouseMove); // @ts-ignore:
  //       sliderElement.addEventListener('mouseup', handleMouseUp); // @ts-ignore:
  //     } else {
  //       sliderElement.removeEventListener('mousemove', handleMouseMove); // @ts-ignore:
  //       sliderElement.removeEventListener('mouseup', handleMouseUp); // @ts-ignore:
  //     }
  //     return () => {
  //       sliderElement.removeEventListener('mousemove', handleMouseMove); // @ts-ignore:
  //       sliderElement.removeEventListener('mouseup', handleMouseUp); // @ts-ignore:
  //       /* eslint-enable */
  //     };
  //   }
  // }, [isDragging]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number | undefined>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);

  const [ref, inView] = useInView();

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

  console.log('viewAllData', viewAllData);

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

  //사용할 이벤트
  //onMouseDown: 마우스 왼쪽 버튼 누르고 있는 상태
  //onMouseUp: 마우스 왼쪽 버튼 뗀 상태
  //onMouseMove : 마우스를 움직이는 상태 (클릭 하던 안 하던 상관없이)
  //onMouseLeave: dom에서 마우스가 벗어났는지 체크하는 이벤트

  //사용할 변수
  // DOM.scrollWidth: 스크롤 할 수 있는 총 길이
  // DOM.clientWidth: 설정한 max-width(화면에 보이는 스크롤의 길이)
  // DOM.scrollLeft: 스크롤 가장 왼쪽 부터 이동한 스크롤 길이,. DOM.scrollLeft만큼 스크롤 이동
  // mouseEvent.pageX : onMouseDown시 x좌표

  const onDragStart: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDrag(true);
    if (!scrollRef.current) return;
    console.log('1', e.pageX + scrollRef.current.scrollLeft);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsDrag(false);
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (isDrag && startX) {
      if (!scrollRef.current) return;
      console.log('2', startX - e.pageX);
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <S.MainContainer>
      <S.MainHeader>
        <S.MainFlexBoxDiv>
          <img alt='logo' src='/ninecloud.png' />
          <S.MainProfileFlexDiv>
            <img alt='감정이모티콘'></img>
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
          {/* 스타일드 컴포넌트를 사용하여 UI를 정의하고, 슬라이더의 위치를 offset에 따라 변화시킴 */}
          <S.MainSlideFlex
            onMouseDown={onDragStart}
            onMouseMove={onMouseMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            ref={scrollRef}
            // $currentIndex={currentIndex}
            // $transX={transX}
          >
            <S.MainEachSlideBox>
              <p>전체</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정1</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정2</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정3</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정4</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정5</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정6</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정7</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정8</p>
            </S.MainEachSlideBox>
            <S.MainEachSlideBox>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정9</p>
            </S.MainEachSlideBox>
          </S.MainSlideFlex>
          <S.MainMapContainer>
            <div>
              {/* {viewAllData?.pages.map((page, pageIndex) => {
                return page?.data.map((item, itemIndex) => {
                  return (
                    <CommunityEach
                      key={`page-${pageIndex}-item-${itemIndex}`}
                      item={item}
                    />
                  );
                });
              })} */}
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
