import styled, { css } from 'styled-components';
import { ValidationMessageProps } from './Signup.types';

export const Base = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/bg_final_final.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 30px rgba(200, 200, 200, 0.7);
  border-top-right-radius: 50px;
  border-top: 1px solid #ebebeb;
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

export const signupTitle = styled.h1`
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

export const InputLabel2 = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-top: 25px;
  color: #391d93;
`;

export const Input = styled.input`
  width: 100%;
  height: 10%;
  padding: 10px;
  font-size: 20px;
  border: none;
  background-color: #f5f2ff;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: inherit;
  border-bottom: 2px solid #391d93;
  &:focus {
    outline: none; /* 클릭 시 포커스 효과 제거 */
    border-bottom: 2px solid #391d93; /* 클릭 시 하단 border 추가 */
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
  font-size: 25px;
`;

export const Divider = styled.div`
  width: 80%;
  text-align: center;
  border-bottom: 1px solid #ccc;
  line-height: 0.1em;
  margin: 40px 0 20px;
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

export const ReturnLoginButton = styled.div`
  margin-top: 42px;
  font-size: 15px;
  color: #777;
  background-color: transparent; /* 배경색을 투명하게 설정 */
  cursor: pointer; /* 마우스를 가져다 댔을 때 커서를 포인터로 변경 */
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 400px;
  height: 60px;
  background-color: #391d93;
  color: white;
  font-size: 20px;
  font-family: 900;
  border: 2px solid #d9d9d9;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const CertifiedPlease = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

export const Height150px = styled.div`
  height: 120px;
`;

export const NumberButton = styled.button`
  background-color: #391d93;
  width: 140px;
  height: 30px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border-top-left-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  position: relative;
  transition: top 0.1s; /* 클릭 효과 부드럽게 만들기 */

  &:active {
    top: 1px; /* 클릭 시 1px 아래로 이동 */
  }
`;

export const Mail4 = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
`;

export const NumberButtonSend = styled.div`
  border: 2px solid #8066d1;
  width: 140px;
  height: 30px;
  color: #8066d1;
  font-size: 18px;
  font-weight: 900;
  border-top-left-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
`;

export const NumberCertified = styled.input`
  margin-top: 15px;
  font-size: 18px;
  border: none;
  border-bottom: 5px solid #391d93;
  border-radius: 2px;
  outline: none;
  text-align: center;
`;
