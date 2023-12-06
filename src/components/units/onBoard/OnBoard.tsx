import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import { Dlatlbox } from './OnBoard.styles';

const OnBoard = () => {
  const [title, setTitle] = useState('');
  return (
    <div>
      {/* <h1>여기에 들어갈 목록들 [안녕,반가워,졸려,잘래]</h1> */}
      <>
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
        >
          <SwiperSlide>
            <Dlatlbox style={{ backgroundColor: 'red' }}>{title}</Dlatlbox>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: 'blue' }}>
            <Dlatlbox>{title}</Dlatlbox>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: 'yellow' }}>
            <Dlatlbox>{title}</Dlatlbox>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: 'teal' }}>
            <Dlatlbox>{title}</Dlatlbox>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default OnBoard;
