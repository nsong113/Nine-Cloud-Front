import { Circle } from './LoginSocial.styles';

const LoginNaver = () => {
  const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const REDIRECT_URL = process.env.REACT_APP_NAVER_REDIRECT_URL;
  const state = '99999';
  const link = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=${state}`;
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
