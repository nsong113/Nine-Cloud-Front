import React from 'react';
import { Circle } from './LoginSocial.styles';
// Redirect URI : http://localhost:3000/auth/kakao/callback
// JavaScript 키 : 1033e5934902e97e107547d11e0b7eaa
// REST API 키 : 32357dbebba692f404b5417ad1630f3b
const LoginGoogle = () => {
  // const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  // const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;

  const link = `https://accounts.google.com/o/oauth2/v2/auth?
  client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
  &redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
  &response_type=code
  &scope=email profile`;

  const loginHandler = () => {
    // window.location.href = link;
  };

  return (
    <>
      <Circle
        onClick={loginHandler}
        style={{ backgroundImage: "url('/btn_google.svg')" }}
      />
    </>
  );
};

export default LoginGoogle;
