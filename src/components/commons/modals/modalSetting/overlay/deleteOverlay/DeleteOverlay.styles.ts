import styled, { keyframes } from 'styled-components';

export const slideIn = keyframes`
  from {
    transform: translateY(100%)
  }
  to {
    transform: translateY(0%) 
  }
`;

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 960px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: end;

  transition: opacity 0.3s ease-in-out;
`;

export const ModalContentDiv = styled.div`
  width: 415px;
  height: 357px;
  border-radius: 5px 20px;
  background: rgba(255, 255, 255, 0.7);

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 5px 50px 0px rgba(57, 29, 147, 0.2),
    0px -5px 50px 0px rgba(57, 29, 147, 0.2);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.97;
`;

export const TitleSpan = styled.span`
  color: var(--main, #391d93);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

export const SubTitleSpan = styled.span`
  color: var(--Gray2, #929292);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const CancleButton = styled.button`
  color: #fff;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px; /* 172.222% */
  letter-spacing: 0.18px;
  width: 186px;
  height: 48px;
  flex-shrink: 0;
  background-color: #391d93;
  border-radius: 5px 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const OkButton = styled.button`
  width: 182px;
  height: 48px;
  color: var(--sub, #8066d1);
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px; /* 172.222% */
  letter-spacing: 0.18px;
  border-radius: 5px 20px;
  background: rgba(255, 255, 255, 0.7);

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 5px 50px 0px rgba(57, 29, 147, 0.2),
    0px -5px 50px 0px rgba(57, 29, 147, 0.2);
  backdrop-filter: blur(15px);
  cursor: pointer;
`;

export const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapperDiv = styled.div`
  margin-top: 30px;
`;
