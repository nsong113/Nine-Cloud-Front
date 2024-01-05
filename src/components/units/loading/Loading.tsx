import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import * as S from './Loading.style';

const Loading = () => {
  const navigate = useNavigate();
  const [dots, setDots] = useState('.');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? '.' : prevDots + '.'));
    }, 500);
    const timeoutId = setTimeout(() => {
      navigate('/main');
      window.location.reload();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div style={{ backgroundImage: 'url(/bg_final_final.png)' }}>
      <S.DivCenter>
        <div>
          <S.ImgGroup>
            <S.ImgStyle1 src='/sun_happy.webp' alt='sun' />
            <S.ImgStyle2 src='/cloud_soso.webp' alt='happy' />
            <S.ImgStyle3 src='/rain_sad.webp' alt='rain' />
          </S.ImgGroup>
          <S.Title>잠시만 기다려주세요{dots}</S.Title>
          <BarLoader color='#36d7b7' height={14} width={380} />
        </div>
      </S.DivCenter>
    </div>
  );
};

export default Loading;
