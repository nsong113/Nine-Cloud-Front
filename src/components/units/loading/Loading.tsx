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
    // 페이지가 로드된 후 5초 뒤에 /main으로 이동
    const timeoutId = setTimeout(() => {
      // /main으로 이동하면서 페이지를 다시로드
      navigate('/main');
      window.location.reload();
    }, 2000);

    // 컴포넌트가 언마운트되면 타이머 클리어
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div style={{ backgroundImage: 'url(/bg_final_final.png)' }}>
      <S.DivCenter>
        <div>
          <S.ImgGroup>
            <S.ImgStyle1 src='/sun_happy.png' alt='sun' />
            <S.ImgStyle2 src='/cloud_soso.png' alt='happy' />
            <S.ImgStyle3 src='/rain_sad.png' alt='rain' />
          </S.ImgGroup>
          <S.Title>잠시만 기다려주세요{dots}</S.Title>
          <BarLoader color='#36d7b7' height={14} width={380} />
        </div>
      </S.DivCenter>
    </div>
  );
};

export default Loading;
