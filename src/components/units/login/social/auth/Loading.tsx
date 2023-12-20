import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import * as S from '../LoginSocial.styles';

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
    <>
      <S.DivCenter>
        <div>
          <S.Title>잠시만 기다려주세요{dots}</S.Title>
          <BarLoader color='#36d7b7' height={14} width={380} />
        </div>
      </S.DivCenter>
    </>
  );
};

export default Loading;
