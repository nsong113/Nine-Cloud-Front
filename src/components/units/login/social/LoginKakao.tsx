import React from 'react';
import { Circle } from './LoginSocial.styles';
// Redirect URI : http://localhost:3000/auth/kakao/callback
// JavaScript 키 : 1033e5934902e97e107547d11e0b7eaa
// REST API 키 : 32357dbebba692f404b5417ad1630f3b
const LoginKakao = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

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
