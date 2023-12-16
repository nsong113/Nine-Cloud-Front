import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import axios from 'axios';
import * as S from '../LoginSocial.styles';

const NaverLoginHandler = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const [dots, setDots] = useState('.');
  const state = '99999';
  console.log(code);
  console.log(state);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? '.' : prevDots + '.'));
    }, 500);
    const KakaoLogin = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/naver/callback`,
          {
            code: code,
            state: state,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response);
        const accessToken = response.headers['authorization'];
        const refreshToken = response.headers['refreshtoken'];
        const expiredTime = response.headers['expiredtime'];
        console.log(response);
        console.log('at: ', accessToken);
        console.log('rt: ', refreshToken);
        console.log('et: ', expiredTime);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('expiredTime', expiredTime);
        navigate('/main');
        window.location.reload();
      } catch (error) {
        console.error('로그인 실패', error);
      }
    };
    KakaoLogin();
    return () => clearInterval(intervalId);
  }, [code, navigate]);

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

export default NaverLoginHandler;
