import React from 'react';
import { Circle } from './LoginSocial.styles';
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
