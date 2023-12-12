import React from 'react';
import { Circle } from './LoginSocial.styles';
// Redirect URI : http://localhost:3000/auth/kakao/callback
// JavaScript 키 : 1033e5934902e97e107547d11e0b7eaa
// REST API 키 : 32357dbebba692f404b5417ad1630f3b, 찬영님 8e93eaeaded45bab5247d4260ffa68d5
const LoginKakao = () => {
  // kakao developer에서 발급 가능
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  // redirect_uri : 소셜에서 인증코드를 이 url로 리디렉션함. 인증 코드는 엑세스 토큰을 얻기 위해 사용됨
  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <>
      <Circle
        onClick={loginHandler}
        style={{ backgroundImage: "url('/btn_kakao.svg')" }}
      />
    </>
  );
};

export default LoginKakao;
