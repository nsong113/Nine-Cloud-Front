import styled, { css } from 'styled-components';
import { ValidationMessageProps } from './LoginSignin.types';

export const Base = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/bg_final_final.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LogoGroup = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 30px;
`;

export const LogoImg = styled.div`
  width: 160px;
  height: 40px;
  background-image: url('/logo_final.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 30px rgba(200, 200, 200, 0.7);
  border-top-right-radius: 50px;
  border-top: 1px solid #ebebeb;
`;

export const LoginTitle = styled.h1`
  margin-bottom: 20px;
  margin-left: 30px;
  color: #391d93;
  font-weight: 900;
  font-size: 42px;
`;

export const InputBox = styled.div`
  width: 80%;
  margin-top: 40px;
`;

export const InputLabel = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #391d93;
`;

export const Input = styled.input`
  margin-top: 60px;
  width: 100%;
  height: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  border: none;
  background-color: #f5f2ff;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: inherit;
  border-bottom: 3px solid #391d93;
  &:focus {
    outline: none; /* 클릭 시 포커스 효과 제거 */
    border-bottom: 3px solid #391d93; /* 클릭 시 하단 border 추가 */
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 60px;
  padding: 10px 0;
  border: none;
  border-radius: 20px;
  background-color: #aaa;
  color: white;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 60px;
  font-size: 21px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Divider = styled.div`
  width: 80%;
  text-align: center;
  border-bottom: 1px solid #391d93;
  line-height: 0.1em;
  margin: 20px 0 20px;
`;

export const DividerText = styled.span`
  background-color: white;
  padding: 0 10px;
`;

export const SocialButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin-bottom: 1rem;
`;

export const Circle = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ccc;
  background-size: cover; /* 이미지 크기 조절 */
  background-position: center;
  background-color: white;
  border: none;
  transition: transform 0.2s ease-in-out; /* 클릭 시 애니메이션 효과 */

  &:active {
    transform: scale(0.95); /* 클릭 시 약간 축소 효과 */
  }
`;

export const SignupLink = styled.div`
  color: #777;
  cursor: pointer;
  margin-top: 40px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const ValidationMessage = styled.div<ValidationMessageProps>`
  font-size: 14px;
  height: 14px;
  margin-top: 5px; /* 적절한 여백 설정 */

  ${({ isError }) =>
    isError
      ? css`
          color: #391d93;
        `
      : css`
          color: blue;
        `}
`;
