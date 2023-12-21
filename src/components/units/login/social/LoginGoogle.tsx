import { Circle } from './LoginSocial.styles';

const LoginGoogle = () => {
  const loginHandler = () => {
    // 구글 로그인 화면으로 이동시키기 google cloud console에서 발급 가능
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=code
		&scope=email profile`;
  };
  // response_type=code : Google 서버에게 인증 코드를 반환하도록 요청하는 매개변수, scope=email profile :  OAuth 인증을 통해 얻고자 하는 권한 범위 - email, profile
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

