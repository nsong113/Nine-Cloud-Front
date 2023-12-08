import styled, { css } from 'styled-components';
import { ValidationMessageProps } from './LoginSignin.types';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 785px;
  background-color: #f0f0f0;
  border-top-left-radius: 80px;
`;

export const LoginTitle = styled.h1`
  margin-top: 140px;
  margin-bottom: 20px;
  margin-left: 44px;
  color: #c8c8c8;
  font-weight: 500;
  font-size: 50px;
`;

export const InputBox = styled.div`
  width: 80%;
  margin-top: 40px;
`;

export const InputLabel = styled.div`
  font-size: 18px;
  margin-top: 45px;
  color: black;
`;

export const Input = styled.input`
  width: 100%;
  height: 30%;
  padding: 10px;
  font-size: 22px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: inherit;
  border-bottom: 5px solid #ffffff;
  &:focus {
    outline: none; /* 클릭 시 포커스 효과 제거 */
    border-bottom: 5px solid white; /* 클릭 시 하단 border 추가 */
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 80px;
  padding: 10px 0;
  border: none;
  border-radius: 20px;
  background-color: #aaa;
  color: white;
  cursor: pointer;
  margin-top: 80px;
  margin-bottom: 60px;
  font-size: 25px;
`;

export const Divider = styled.div`
  width: 80%;
  text-align: center;
  border-bottom: 1px solid #ccc;
  line-height: 0.1em;
  margin: 20px 0 20px;
`;

export const DividerText = styled.span`
  background-color: #f0f0f0;
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
          color: red;
        `
      : css`
          color: blue;
        `}
`;
