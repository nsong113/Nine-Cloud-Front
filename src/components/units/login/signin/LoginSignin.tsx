import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import * as S from './LoginSignin.styles';
import { useNavigate } from 'react-router-dom';
import LoginKakao from '../social/LoginKakao';
import LoginGoogle from '../social/LoginGoogle';
import LoginNaver from '../social/LoginNaver';
import axiosInstance from 'src/apis/loginapi';

const LoginSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickLoginHandler();
    }
  };

  const onClickLoginHandler = async (): Promise<void> => {
    try {
      // 이메일 정규식 표현 부분
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =
        /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/;

      if (!emailRegex.test(email)) {
        setEmailValidationMessage('이메일 형식으로 입력해주세요');
        return;
      }

      if (!passwordRegex.test(password)) {
        setPasswordValidationMessage(
          '8~20자의 소문자, 숫자, 특수문자를 포함해야 합니다.'
        );
        return;
      }

      const response = await axiosInstance.post(
        `/signin`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const accessToken = response.headers['authorization'];
      const refreshToken = response.headers['refreshtoken'];
      const expiredTime = response.headers['expiredtime'];
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('expiredTime', expiredTime);
      alert(`${response.data.msg}`);
      navigate('/loadingpage');
    } catch (error: any) {
      console.error('네트워크 오류', error.message);
      // if (error.response) {
      //   const errorMsg = error.response.data.msg;
      //   console.error('로그인 실패', errorMsg);

      //   if (error.response.status === 400) {
      //     try {
      //       const refreshResponse = await axios.post(`${BASE_URL}/token`, {
      //         refreshToken: localStorage.getItem('refreshToken'),
      //       });

      //       const newAccessToken = refreshResponse.headers['authorization'];
      //       const newRefreshToken = refreshResponse.headers['refreshtoken'];
      //       const newExpiredTime = refreshResponse.headers['expiredtime'];

      //       localStorage.setItem('accessToken', newAccessToken);
      //       localStorage.setItem('refreshToken', newRefreshToken);
      //       localStorage.setItem('expiredTime', newExpiredTime);

      //       return onClickLoginHandler();
      //     } catch (refreshError: any) {
      //       console.error('토큰 갱신 실패', refreshError.message);
      //       alert('토큰 갱신 실패');
      //     }
      //   } else {
      //     alert(errorMsg);
      //   }
      // } else {
      //   console.error('네트워크 오류', error.message);
      //   alert('네트워크 오류');
      // }
    }
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  // 유효성 검사 부분
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/;
    if (newEmail.trim() === '') {
      // 이메일이 비어 있다면 메시지 초기화
      setEmailValidationMessage('');
    } else if (!emailRegex.test(newEmail)) {
      // 이메일 형식이 유효하지 않은 경우 메시지 표시

      setEmailValidationMessage('이메일 형식으로 입력해주세요');
    } else {
      // 유효한 이메일 형식인 경우 완료 메시지 표시
      setEmailValidationMessage('완료');
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/;
    if (newPassword.trim() === '') {
      // 비밀번호가 비어 있다면 메시지 초기화
      setPasswordValidationMessage('');
    } else if (!passwordRegex.test(newPassword)) {
      // 비밀번호 유효성 검사 실패 시 메시지 표시
      setPasswordValidationMessage(
        '8~20자의 소문자, 숫자, 특수문자를 포함해야 합니다.'
      );
    } else {
      // 유효한 비밀번호인 경우 완료 메시지 표시
      setPasswordValidationMessage('완료');
    }
  };

  const isValidationComplete = () => {
    return (
      emailValidationMessage === '완료' && passwordValidationMessage === '완료'
    );
  };

  return (
    <>
      <S.LoginTitle>Login</S.LoginTitle>
      <S.LoginContainer>
        <S.InputBox>
          <S.InputLabel>E- mail</S.InputLabel>
          <S.Input
            type='text'
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeyPress}
          />
          <S.ValidationMessage isError={emailValidationMessage !== '완료'}>
            {emailValidationMessage}
          </S.ValidationMessage>
        </S.InputBox>
        <S.InputBox>
          <S.InputLabel style={{ marginTop: '60px' }}>Password</S.InputLabel>
          <S.Input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
          />
          <S.ValidationMessage isError={passwordValidationMessage !== '완료'}>
            {passwordValidationMessage}
          </S.ValidationMessage>
        </S.InputBox>
        <S.Button
          onClick={onClickLoginHandler}
          style={{
            backgroundColor: isValidationComplete() ? '#0080FF' : 'grey',
            cursor: isValidationComplete() ? 'pointer' : 'not-allowed',
          }}
        >
          로그인
        </S.Button>
        <S.Divider>
          <S.DividerText>sns 계정으로 로그인하기</S.DividerText>
        </S.Divider>
        <S.SocialButton>
          <LoginKakao />
          <LoginGoogle />
          <LoginNaver />
        </S.SocialButton>
        <S.SignupLink onClick={navigateToSignup}>
          아직 계정이 없으신가요?
        </S.SignupLink>
      </S.LoginContainer>
    </>
  );
};

export default LoginSignin;

// 버튼 스타일 props
// 비동기통신 apis 폴더로 빼놓기, 이름
// 인터셉터
