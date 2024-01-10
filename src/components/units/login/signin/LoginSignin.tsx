import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import * as S from './LoginSignin.styles';
import { useNavigate } from 'react-router-dom';
import LoginKakao from '../social/LoginKakao';
import LoginGoogle from '../social/LoginGoogle';
import LoginNaver from '../social/LoginNaver';
import axiosInstance from 'src/apis/loginapi';
import Swal from 'sweetalert2';

const imagePreload = [];

const LoginSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const navigate = useNavigate();
  const imageUrls = [
    'https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/exclude.png',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/blank_circle.png',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/gptCloud.png',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/logo_final.png',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/avatar.png',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/list.png',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/cloud_soso.webp',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/cloud_happy.webp',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/cloud_sad.webp',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/sun_soso.webp',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/sun_sad.webp',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/sun_happy.webp',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/rain_sad.webp',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/rain_happy.webp',
    'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/rain_soso.webp',
    'https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/alert.png',
  ];

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  useEffect(() => {
    if (accessToken || refreshToken) {
      Swal.fire({
        icon: 'warning',
        width: '400px',
        title:
          '<span style="font-size: 24px; font-weight: bolder;">이미 로그인 된 상태입니다.</span>',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
        confirmButtonText: '확인',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/main');
        }
      });
    }
  }, []);

  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        imagePreload.push(img);
      };
    });
  }, []);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickLoginHandler();
    }
  };

  const onClickLoginHandler = async (): Promise<void> => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;

      if (!emailRegex.test(email)) {
        setEmailValidationMessage('이메일 형식으로 입력해주세요');
        return;
      }

      if (!passwordRegex.test(password)) {
        setPasswordValidationMessage(
          '8~20자의 소문자, 숫자, 특수문자(@, $, !, %, *, ?, #)를 포함해야 합니다.'
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
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      alert(`${response.data.message}`);
      navigate('/loading');
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        const userResponse = confirm(`${error.response.data.message}`);
        if (userResponse) {
          const response = await axiosInstance.post(`/cancel-signoff`, {
            email: email,
          });
          alert(`${response.data.message} 다시 로그인 해주세요.`);
        } else {
          const response = await axiosInstance.post(`/signoffInProgress`, {
            email: email,
          });
          alert(`${response.data.message}`);
        }
      } else {
        alert(`${error.response.data.message}`);
      }
    }
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/;
    if (newEmail.trim() === '') {
      setEmailValidationMessage('');
    } else if (!emailRegex.test(newEmail)) {
      setEmailValidationMessage('이메일 형식으로 입력해주세요');
    } else {
      setEmailValidationMessage('완료');
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;
    if (newPassword.trim() === '') {
      setPasswordValidationMessage('');
    } else if (!passwordRegex.test(newPassword)) {
      setPasswordValidationMessage(
        '8~20자의 영문자, 숫자, 특수문자(@, $, !, %, *, ?, #)를 포함해야 합니다.'
      );
    } else {
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
      <S.Base>
        <S.LogoGroup>
          <S.LogoImg />
        </S.LogoGroup>
        <S.LoginTitle>Login</S.LoginTitle>
        <S.LoginContainer>
          <S.InputBox>
            <S.FlexBox>
              <S.Input
                type='text'
                value={email}
                onChange={handleEmailChange}
                onKeyDown={handleKeyPress}
                placeholder='Email'
              />
            </S.FlexBox>
            <S.ValidationMessage isError={emailValidationMessage !== '완료'}>
              {emailValidationMessage}
            </S.ValidationMessage>
            <div>
              <S.Input
                type='password'
                value={password}
                onChange={handlePasswordChange}
                onKeyDown={handleKeyPress}
                placeholder='Password'
              />
            </div>
            <S.ValidationMessage isError={passwordValidationMessage !== '완료'}>
              {passwordValidationMessage}
            </S.ValidationMessage>
          </S.InputBox>
          <S.Button
            onClick={onClickLoginHandler}
            style={{
              backgroundColor: isValidationComplete() ? '#391d93' : 'grey',
              cursor: isValidationComplete() ? 'pointer' : 'not-allowed',
            }}
          >
            나인 클라우드 시작하기
          </S.Button>
          <S.Divider>
            <S.DividerText>sns 계정으로 시작하기</S.DividerText>
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
      </S.Base>
    </>
  );
};

export default LoginSignin;
