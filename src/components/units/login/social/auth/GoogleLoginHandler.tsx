import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from 'src/apis/loginapi';

const GoogleLoginHandler = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? '.' : prevDots + '.'));
    }, 500);
    const GoogleLogin = async () => {
      try {
        const response = await axiosInstance.post(
          `/google/callback`,
          {
            code: code,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const accessToken = response.headers['authorization'];
        const refreshToken = response.headers['refreshtoken'];
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/main');
        window.location.reload();
      } catch (error) {
        alert('로그인 실패. 다시 시도해 주세요.');
      }
    };
    GoogleLogin();
    return () => clearInterval(intervalId);
  }, [code, navigate]);

  return <></>;
};

export default GoogleLoginHandler;
