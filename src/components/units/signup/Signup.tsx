import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import * as S from './Signup.styles';
import { useNavigate } from 'react-router-dom';
import LoginKakao from '../login/social/LoginKakao';
import LoginGoogle from '../login/social/LoginGoogle';
import LoginNaver from '../login/social/LoginNaver';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const [
    confirmPasswordValidationMessage,
    setConfirmPasswordValidationMessage,
  ] = useState('');
  const [nicknameValidationMessage, setNicknameValidationMessage] =
    useState('');
  const [state, setState] = useState<number>(
    Math.floor(Math.random() * (99999999 - 10000 + 1)) + 10000
  );

  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  const onClickSignupHandler = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =
        /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/;
      const confirmPasswordRegex =
        /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/;
      const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,8}$/;

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

      if (!confirmPasswordRegex.test(confirmPassword)) {
        setPasswordValidationMessage(
          '8~20자의 소문자, 숫자, 특수문자를 포함해야 합니다.'
        );
        return;
      }

      if (!nicknameRegex.test(nickname)) {
        setNicknameValidationMessage('한글 2~6, 영문 2~12');
        return;
      }

      const response = await axios.post(
        `${BASE_URL}/signup`,
        {
          email: email,
          password: password,
          username: nickname, // 수정 계획
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('회원가입 성공:', response);
      alert('회원가입이 성공적으로 완료되었습니다.');
      navigate('/login');
    } catch (error: any) {
      if (error.response) {
        // 서버 응답이 있는 경우
        const errorMsg = error.response.data.msg;
        console.error('로그인 실패', errorMsg);
        alert(errorMsg);
      } else {
        // 서버 응답이 없는 경우
        console.error('네트워크 오류', error.message);
        alert('네트워크 오류');
      }
    }
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

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    const confirmPasswordRegex =
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/;

    if (newConfirmPassword.trim() === '') {
      // 비밀번호가 비어 있다면 메시지 초기화
      setConfirmPasswordValidationMessage('');
    } else if (!confirmPasswordRegex.test(newConfirmPassword)) {
      // 비밀번호 유효성 검사 실패 시 메시지 표시
      setConfirmPasswordValidationMessage(
        '8~20자의 소문자, 숫자, 특수문자를 포함해야 합니다.'
      );
    } else if (newConfirmPassword !== password) {
      // 비밀번호와 확인 비밀번호가 일치하지 않는 경우 메시지 표시
      setConfirmPasswordValidationMessage('비밀번호가 일치하지 않습니다.');
    } else {
      // 유효한 비밀번호인 경우 완료 메시지 표시
      setConfirmPasswordValidationMessage('완료');
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setNickname(newNickname);

    const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,8}$/;
    if (newNickname.trim() === '') {
      // 닉네임 비어 있다면 메시지 초기화
      setNicknameValidationMessage('');
    } else if (!nicknameRegex.test(newNickname)) {
      // 닉네임 유효성 검사 실패 시 메시지 표시
      setNicknameValidationMessage(
        '한글 2~12글자, 영문 2~24글자까지 가능합니다.'
      );
    } else {
      // 유효한 닉네임인 경우 완료 메시지 표시
      setNicknameValidationMessage('완료');
    }
  };

  const isValidationComplete = () => {
    return (
      emailValidationMessage === '완료' &&
      passwordValidationMessage === '완료' &&
      confirmPasswordValidationMessage === '완료' &&
      nicknameValidationMessage === '완료'
    );
  };

  const returnLoginHandler = () => {
    navigate('/login');
  };

  return (
    <>
      <S.signupTitle>Sign up</S.signupTitle>
      <S.SignupContainer>
        <S.InputBox>
          <S.InputLabel>E- mail</S.InputLabel>
          <S.Input type='text' value={email} onChange={handleEmailChange} />
          <S.ValidationMessage isError={emailValidationMessage !== '완료'}>
            {emailValidationMessage}
          </S.ValidationMessage>
          <S.InputLabel>Password</S.InputLabel>
          <S.Input
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <S.ValidationMessage isError={passwordValidationMessage !== '완료'}>
            {passwordValidationMessage}
          </S.ValidationMessage>
          <S.InputLabel>Confirm Password</S.InputLabel>
          <S.Input
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <S.ValidationMessage
            isError={confirmPasswordValidationMessage !== '완료'}
          >
            {confirmPasswordValidationMessage}
          </S.ValidationMessage>
          <S.InputLabel>Nickname</S.InputLabel>
          <S.Input
            type='text'
            value={nickname}
            onChange={handleNicknameChange}
          />
          <S.ValidationMessage isError={nicknameValidationMessage !== '완료'}>
            {nicknameValidationMessage}
          </S.ValidationMessage>
        </S.InputBox>
        <S.Button
          onClick={onClickSignupHandler}
          style={{
            backgroundColor: isValidationComplete() ? '#0080FF' : 'grey',
            cursor: isValidationComplete() ? 'pointer' : 'not-allowed',
          }}
        >
          회원가입
        </S.Button>
        <S.Divider>
          <S.DividerText>sns 계정으로 로그인하기</S.DividerText>
        </S.Divider>
        <S.SocialButton>
          <LoginKakao />
          <LoginGoogle />
          <LoginNaver />
        </S.SocialButton>
        <S.ReturnLoginButton onClick={returnLoginHandler}>
          로그인 화면으로 돌아가기
        </S.ReturnLoginButton>
      </S.SignupContainer>
    </>
  );
};

export default Signup;

// 유효성 검사 user api로 빼기
