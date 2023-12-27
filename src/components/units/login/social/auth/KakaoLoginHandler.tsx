import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from 'src/apis/loginapi';
import Loading from 'src/components/units/loading/Loading';

const KakaoLoginHandler = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  // const code = window.location.href;
  const navigate = useNavigate();
  const [dots, setDots] = useState('.');

  console.log(code);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? '.' : prevDots + '.'));
    }, 500);
    const KakaoLogin = async () => {
      try {
        const response = await axiosInstance.post(
          `/kakao/callback`,
          {
            code: code,
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
      <Loading />
    </>
  );
};

export default KakaoLoginHandler;
