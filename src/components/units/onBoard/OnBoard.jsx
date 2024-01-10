import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
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
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.on('init', () => {
        setIsLastSlide(swiperInstance.isEnd);
      });
    }
  }, [swiperRef]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      swiperInstance.on('slideChange', handleSlideChange);

      handleSlideChange(swiperInstance);
    }
  }, [swiperRef]);

  const handleSlideChange = (swiper) => {
    setIsLastSlide(swiper.isEnd);
    setTitle(titleList[swiper.activeIndex]);
    setContent1(contentList1[swiper.activeIndex]);
    setContent2(contentList2[swiper.activeIndex]);

    const underBalls = document.querySelectorAll('.under-ball');

    underBalls.forEach((underBall, index) => {
      if (index === swiper.activeIndex) {
        underBall.style.width = '7.15%';
        underBall.style.backgroundColor = '#391D93';
        underBall.style.borderRadius = '10px';
        underBall.style.borderTopLeftRadius = '2px';
        underBall.style.borderBottomRightRadius = '2px';
      } else {
        underBall.style.width = '15px';
        underBall.style.backgroundColor = '#F5F2FF';
        underBall.style.borderRadius = '50%';
      }
    });
  };

  const handleUnderBallClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleButtonClick = () => {
    if (isLastSlide) {
      navigate('/login');
    } else {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <S.Base>
      <S.OnboardTitle>{title}</S.OnboardTitle>
      <S.OnboardContent>{content1}</S.OnboardContent>
      <S.OnboardContent style={{ marginTop: '0px', marginBottom: '10px' }}>
        {content2}
      </S.OnboardContent>
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        onSlideChange={handleSlideChange}
        style={{ width: '90%' }}
      >
        <SwiperSlide
          style={{
            borderRadius: '10px',
            height: '57.92vh',
            backgroundImage: 'url(/onboard1.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: '10px',
            height: '57.92vh',
            backgroundImage: 'url(/onboard2.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: '10px',
            height: '57.92vh',
            backgroundImage: 'url(/onboard3.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: '10px',
            height: '57.92vh',
            backgroundImage: 'url(/onboard4.png)',
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
            backgroundColor: isLastSlide ? '#391d93' : '#8066D1',
            color: isLastSlide ? 'white' : 'white',
          }}
          onClick={handleButtonClick}
        >
          {isLastSlide ? '나인 클라우드 시작하기' : '다음'}
        </S.Button>
      </S.FlexCenter>
    </S.Base>
  );
}
