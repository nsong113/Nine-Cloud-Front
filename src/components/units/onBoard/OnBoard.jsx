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
  const [content, setContent] = useState('');
  const [isLastSlide, setIsLastSlide] = useState(false);

  const titleList = [
    '하루하루 감정을 기록해요',
    '감정에 맞는 이모티콘을 추천',
    '그림으로 기록해보세요',
    '당신의 감정을 공유해보세요!',
  ];
  const contentList = [
    `달력에 그날의 감정을 이모티콘으로 기록해봐요`,
    '세세한 감정을 슬라이더로 입력해보세요',
    '당신의 실력을 마음껏 뽐내봐요!',
    '커뮤니티에서 대화를 나눌 수 있어요.',
  ];

  const swiperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(titleList[0]);
    setContent(contentList[0]);
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

  const handleSlideChange = (swiper) => {
    setIsLastSlide(swiper.isEnd);
    setTitle(titleList[swiper.activeIndex]);
    setContent(contentList[swiper.activeIndex]);
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
    <div>
      <S.OnboardTitle>{title}</S.OnboardTitle>
      <S.OnboardContent>{content}</S.OnboardContent>
      <Swiper
        ref={swiperRef}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        onSlideChange={handleSlideChange}
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide
          style={{
            border: '1px solid black',
            height: '500px',
            backgroundImage: 'url(/Calendar.png)',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            border: '1px solid black',
            height: '500px',
            backgroundImage: 'url(/Sliderbar.png)',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            border: '1px solid black',
            height: '500px',
            backgroundImage: 'url(/Palette.png)',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            border: '1px solid black',
            height: '500px',
            backgroundImage: 'url(/Temporaryphotograph.png)',
          }}
        ></SwiperSlide>
      </Swiper>
      <S.Button
        style={{
          backgroundColor: isLastSlide ? '#66CCFF' : '#D9D9D9',
          color: isLastSlide ? 'white' : 'black',
        }}
        onClick={handleButtonClick}
      >
        {isLastSlide ? '로그인' : '다음'}
      </S.Button>
    </div>
  );
}

// style 중복되는 값 묶기, S.Button 아래나 밖으로 빼기
// jsx, tsx 혼용
