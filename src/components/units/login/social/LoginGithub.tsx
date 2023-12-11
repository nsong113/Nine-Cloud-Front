import React from 'react';
import { Circle } from './LoginSocial.styles';
// Client ID : 0ba73561d34db5cfd36b
// Client secrets : faad573df8e90ff829c0312f5572a8fd930f6bc3
const LoginGithub = () => {
  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const REDIRECT_URL = process.env.REACT_APP_GITHUB_REDIRECT_URL;
  // 리포지토리 후크를 읽어 사용자 이메일에 대한 권한을 요청
  const link = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo:status read:repo_hook user:email&redirect_uri=${REDIRECT_URL}`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <>
      <Circle
        onClick={loginHandler}
        style={{ backgroundImage: "url('/btn_github.svg')" }}
      />
    </>
  );
};

export default LoginGithub;
