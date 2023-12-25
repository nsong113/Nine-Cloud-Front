import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom'; // 추가된 부분
import * as S from './OnBoard.styles';

export default function OnBoard() {
  const [title, setTitle] = useState('');
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');
  const [isLastSlide, setIsLastSlide] = useState(false);

  const titleList = [
    '매일매일 감정을 기록해보세요',
    '그림일기-',
    '최적의 솔루션을 받아보세요',
    '다른 사람들과 소통해요',
  ];
  const contentList1 = [
    `그날의 감정 클라우드를`,
    '기억하고 싶은 순간이 있다면',
    '정성스레 입력해주신 일기를',
    '오늘 나와 같은 감정인 사람들의',
  ];

  const contentList2 = [
    '한번에 모아보세요!',
    '그림으로도 기록할 수 있어요',
    'ai가 분석해드릴게요',
    '이야기를 들어보세요!',
  ];
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(titleList[0]);
    setContent1(contentList1[0]);
    setContent2(contentList2[0]);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      // Check if swiperRef has been assigned
      const swiperInstance = swiperRef.current.swiper;

      // Add event listener for when the Swiper instance is ready
      swiperInstance.on('init', () => {
        setIsLastSlide(swiperInstance.isEnd);
      });
    }
  }, [swiperRef]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      // Add event listener for when the slide changes
      swiperInstance.on('slideChange', handleSlideChange);

      // Manually trigger the initial style update
      handleSlideChange(swiperInstance);
    }
  }, [swiperRef]);

  const handleSlideChange = (swiper) => {
    setIsLastSlide(swiper.isEnd);
    setTitle(titleList[swiper.activeIndex]);
    setContent1(contentList1[swiper.activeIndex]);
    setContent2(contentList2[swiper.activeIndex]);

    // 활성 슬라이드의 인덱스를 기반으로 UnderBall 엘리먼트의 스타일 업데이트
    // 이 부분에서 충돌나시면 그대로 추가하시면 됩니다.
    const underBalls = document.querySelectorAll('.under-ball');

    underBalls.forEach((underBall, index) => {
      if (index === swiper.activeIndex) {
        // 활성 슬라이드인 경우 해당하는 스타일로 업데이트
        underBall.style.width = '48px';
        underBall.style.backgroundColor = '#391D93';
        underBall.style.borderRadius = '15px';
        underBall.style.borderTopLeftRadius = '0px';
        underBall.style.borderBottomRightRadius = '0px';
      } else {
        // 비활성 슬라이드인 경우 기본 스타일로 재설정
        underBall.style.width = '24px'; // 비활성 슬라이드의 기본 너비
        underBall.style.backgroundColor = '#F5F2FF'; // 비활성 슬라이드의 기본 배경색
        underBall.style.borderRadius = '50%';
      }
    });
  };

  const handleUnderBallClick = (index) => {
    // 이 함수에서 각 버튼(또는 UnderBall)을 클릭했을 때 슬라이드 이동 로직을 추가합니다.
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleButtonClick = () => {
    if (isLastSlide) {
      navigate('/login');
    } else {
      // Go to the next slide
      swiperRef.current.swiper.slideNext();
    }
  };
  // 사진 크기 440px X 500px
  return (
    <S.Base>
      <S.OnboardTitle>{title}</S.OnboardTitle>
      <S.OnboardContent>{content1}</S.OnboardContent>
      <S.OnboardContent style={{ marginTop: '0px', marginBottom: '30px' }}>
        {content2}
      </S.OnboardContent>
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        onSlideChange={handleSlideChange}
        style={{ width: '80%' }}
      >
        <SwiperSlide
          style={{
            borderRadius: '10px',
            height: '500px',
            backgroundImage: 'url(/onboard01.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: '10px',
            height: '500px',
            backgroundImage: 'url(/onboard02.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: '10px',
            height: '500px',
            backgroundImage: 'url(/onboard03.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: '10px',
            height: '500px',
            backgroundImage: 'url(/onboard04.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></SwiperSlide>
      </Swiper>
      <S.UnderBallList>
        <S.UnderBall
          className='under-ball'
          onClick={() => handleUnderBallClick(0)}
        />
        <S.UnderBall
          className='under-ball'
          onClick={() => handleUnderBallClick(1)}
        />
        <S.UnderBall
          className='under-ball'
          onClick={() => handleUnderBallClick(2)}
        />
        <S.UnderBall
          className='under-ball'
          onClick={() => handleUnderBallClick(3)}
        />
      </S.UnderBallList>
      <S.FlexCenter>
        <S.Button
          style={{
            backgroundColor: isLastSlide ? '#391d93' : '#D9D9D9',
            color: isLastSlide ? 'white' : 'black',
          }}
          onClick={handleButtonClick}
        >
          {isLastSlide ? '로그인' : '다음'}
        </S.Button>
      </S.FlexCenter>
    </S.Base>
  );
}

// style 중복되는 값 묶기, S.Button 아래나 밖으로 빼기
// jsx, tsx 혼용
