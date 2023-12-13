import React from 'react';
import { Circle } from './LoginSocial.styles';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginNaver = () => {
  const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const REDIRECT_URL = process.env.REACT_APP_NAVER_REDIRECT_URL;
  const state = '99999';
  // 리포지토리 후크를 읽어 사용자 이메일에 대한 권한을 요청
  const link = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=${state}`;
  console.log(state);
  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <>
      <Circle
        onClick={loginHandler}
        style={{ backgroundImage: "url('/naver.png')" }}
      />
    </>
  );
};

export default LoginNaver;
