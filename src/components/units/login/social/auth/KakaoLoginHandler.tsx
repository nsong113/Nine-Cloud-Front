import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const KakaoLoginHandler = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  // const code = window.location.href;
  const navigate = useNavigate();

  const asd = async () => {
    console.log(code);
    try {
      await axios.post(
        `https://astraiosissda.shop/kakao/code`,
        {
          code: code,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(code);
      // const accessToken = response.headers['authorization'];
      // const refreshToken = response.headers['refreshtoken'];
      // const expiredTime = response.headers['expiredtime'];
      // console.log(response);
      // console.log('at: ', accessToken);
      // console.log('rt: ', refreshToken);
      // console.log('et: ', expiredTime);
      // localStorage.setItem('accessToken', accessToken);
      // localStorage.setItem('refreshToken', refreshToken);
      // localStorage.setItem('expiredTime', expiredTime);
      // navigate('/loadingpage');
    } catch (error) {
      console.error('로그인 실패');
    }
  };

  return (
    <>
      <div>로그인 중입니다. 제발 돼라</div>;
      <button onClick={asd}>보내기</button>
    </>
  );
};

export default KakaoLoginHandler;
