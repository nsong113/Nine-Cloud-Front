import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const KakaoLoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_KAKAO_REDIRECT_URL}/?code=${code}`,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
      }).then((res) => {
        console.log(res);
        localStorage.setItem('name', res.data.account.kakaoName);
        navigate('/owner-question');
      });
    };
    kakaoLogin();
  }, []);

  return (
    <div>
      <div>
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div>spin</div>
      </div>
    </div>
  );
};

export default KakaoLoginHandler;
