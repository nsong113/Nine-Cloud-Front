import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import * as S from './OnBoard.styles';
import { CustomSwiperProps } from './OnBoard.types';
import { useNavigate } from 'react-router-dom';

const OnBoard: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('다음');

  const handleSlideChange = (swiper: CustomSwiperProps) => {
    const currentSlideIndex = swiper.activeIndex;
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

    setTitle(titleList[currentSlideIndex]);
    setContent(contentList[currentSlideIndex]);

    // 네번째 슬라이드에서 버튼 텍스트를 '로그인'으로 변경
    if (currentSlideIndex === 3) {
      setButtonText('로그인');
    } else {
      setButtonText('다음');
    }
  };

  return (
    <>
      <div>
        <S.OnboardTitle>{title}</S.OnboardTitle>
        <S.OnboardContent>{content}</S.OnboardContent>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className='mySwiper'
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          <SwiperSlide>
            <S.Dlatlbox
              style={{ backgroundImage: 'url(/Calendar.png)' }}
            ></S.Dlatlbox>
          </SwiperSlide>
          <SwiperSlide>
            <S.Dlatlbox
              style={{ backgroundImage: 'url(/Sliderbar.png)' }}
            ></S.Dlatlbox>
          </SwiperSlide>
          <SwiperSlide>
            <S.Dlatlbox
              style={{ backgroundImage: 'url(/Palette.png)' }}
            ></S.Dlatlbox>
          </SwiperSlide>
          <SwiperSlide>
            <S.Dlatlbox
              style={{ backgroundImage: 'url(/Temporaryphotograph.png)' }}
            ></S.Dlatlbox>
          </SwiperSlide>
        </Swiper>
        {buttonText === '다음' ? (
          <S.Button>{buttonText}</S.Button>
        ) : (
          <S.Button
            onClick={() => navigate('/login')}
            style={{ backgroundColor: '#0080FF' }}
          >
            {buttonText}
          </S.Button>
        )}
      </div>
    </>
  );
};

export default OnBoard;
