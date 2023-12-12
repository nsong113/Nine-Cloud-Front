import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const KakaoLoginHandler = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  // const code = window.location.href;
  const navigate = useNavigate();
  console.log(code);
  useEffect(() => {
    const KakaoLogin = async () => {
      try {
        const response = await axios.post(
          `https://astraiosissda.shop/callback`,
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
        navigate('/loadingpage');
      } catch (error) {
        console.error('로그인 실패', error);
      }
    };
    KakaoLogin();
  }, [code]);
  return (
    <>
      <div>
        제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발
      </div>
    </>
  );
};

export default KakaoLoginHandler;
