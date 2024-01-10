import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './Signup.styles';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'src/apis/loginapi';
import Swal from 'sweetalert2';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [Authenticationcode, setAuthenticationcode] = useState('');
  const [isVerificationSent, setIsVerificationSent] = useState(false);
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

  const [timeRemaining, setTimeRemaining] = useState(180);

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
    let timer: any;

    if (isVerificationSent && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isVerificationSent, timeRemaining]);

  const formattedTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const onClickSignupHandler = async (e: any) => {
    e.preventDefault();
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;
      const confirmPasswordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;
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

      const response = await axiosInstance.post(
        `/signup`,
        {
          email: email,
          password: password,
          username: nickname,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsVerificationSent(true);
    } catch (error: any) {
      if (error.response) {
        const errorMsg = error.response.data.message;
        alert(errorMsg);
      } else {
        alert('네트워크 오류');
      }
    }
  };

  const handleVerification = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`/complete-signup`, {
        email,
        Authenticationcode,
        password,
        username: nickname,
      });
      alert(response.data.message);
      if (response.data.message.includes('회원가입이 완료')) {
        setEmail('');
        setPassword('');
        setNickname('');
        setAuthenticationcode('');
        setIsVerificationSent(false);
        navigate('/login');
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
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
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/;
    if (newPassword.trim() === '') {
      setPasswordValidationMessage('');
    } else if (!passwordRegex.test(newPassword)) {
      setPasswordValidationMessage(
        '8~20자의 소문자, 숫자, 특수문자를 포함해야 합니다.'
      );
    } else {
      setPasswordValidationMessage('완료');
    }
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    const confirmPasswordRegex =
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/;

    if (newConfirmPassword.trim() === '') {
      setConfirmPasswordValidationMessage('');
    } else if (!confirmPasswordRegex.test(newConfirmPassword)) {
      setConfirmPasswordValidationMessage(
        '8~20자의 소문자, 숫자, 특수문자를 포함해야 합니다.'
      );
    } else if (newConfirmPassword !== password) {
      setConfirmPasswordValidationMessage('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordValidationMessage('완료');
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setNickname(newNickname);

    const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;
    if (newNickname.trim() === '') {
      setNicknameValidationMessage('');
    } else if (!nicknameRegex.test(newNickname)) {
      setNicknameValidationMessage('2글자 이상, 10글자 이하만 가능합니다.');
    } else {
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
      <S.Base>
        <S.LogoGroup>
          <S.LogoImg />
        </S.LogoGroup>
        <S.signupTitle>Sign up</S.signupTitle>
        <form
          onSubmit={
            isVerificationSent ? handleVerification : onClickSignupHandler
          }
        >
          <S.SignupContainer>
            <S.InputBox>
              <S.InputLabel>Email</S.InputLabel>
              <S.Input
                type='text'
                value={email}
                onChange={handleEmailChange}
                placeholder='Email'
              />
              <S.ValidationMessage isError={emailValidationMessage !== '완료'}>
                {emailValidationMessage}
              </S.ValidationMessage>
              <S.InputLabel2>Password</S.InputLabel2>
              <S.Input
                type='password'
                value={password}
                onChange={handlePasswordChange}
                placeholder='Password'
              />
              <S.ValidationMessage
                isError={passwordValidationMessage !== '완료'}
              >
                {passwordValidationMessage}
              </S.ValidationMessage>
              <S.InputLabel2>Confirm Password</S.InputLabel2>
              <S.Input
                type='password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder='Confirm Password'
              />
              <S.ValidationMessage
                isError={confirmPasswordValidationMessage !== '완료'}
              >
                {confirmPasswordValidationMessage}
              </S.ValidationMessage>
              <S.InputLabel2>Nickname</S.InputLabel2>
              <S.Input
                type='text'
                value={nickname}
                onChange={handleNicknameChange}
                placeholder='Nickname'
              />
              <S.ValidationMessage
                isError={nicknameValidationMessage !== '완료'}
              >
                {nicknameValidationMessage}
              </S.ValidationMessage>
            </S.InputBox>
            {!isVerificationSent && (
              <S.Height150px>
                <S.CertifiedPlease>Email 인증을 진행해주세요</S.CertifiedPlease>
                <S.FlexCenter>
                  <S.NumberButton type='submit'>인증번호 받기</S.NumberButton>
                </S.FlexCenter>
              </S.Height150px>
            )}
            {isVerificationSent && (
              <>
                <S.Height150px>
                  <S.Mail4>메일로 받은 6자리를 입력해주세요.</S.Mail4>
                  <S.FlexCenter>
                    <S.NumberButtonSend>인증번호 받기</S.NumberButtonSend>
                  </S.FlexCenter>
                  <S.FlexCenter>
                    <S.NumberCertified
                      type='text'
                      name='Authenticationcode'
                      value={Authenticationcode}
                      onChange={(e) => setAuthenticationcode(e.target.value)}
                      required
                    />
                  </S.FlexCenter>
                  <S.FlexCenter>
                    <S.Timer>남은 시간: {formattedTime()}</S.Timer>
                  </S.FlexCenter>
                </S.Height150px>
              </>
            )}
            <S.SignupButton
              type='submit'
              style={{
                backgroundColor: isValidationComplete() ? '#391d93' : '#D9D9D9',
                cursor: isValidationComplete() ? 'pointer' : 'not-allowed',
              }}
            >
              회원가입
            </S.SignupButton>
            <S.ReturnLoginButton onClick={returnLoginHandler}>
              로그인 화면으로 돌아가기
            </S.ReturnLoginButton>
          </S.SignupContainer>
        </form>
      </S.Base>
    </>
  );
};

export default Signup;

// 유효성 검사 user api로 빼기
