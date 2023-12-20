import { keyframes, styled } from 'styled-components';

export const slideIn = keyframes`
  from {
    transform: translateY(100%)
  }
  to {
    transform: translateY(0) 
  }
`;
//
export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: end;
`;

export const ModalContentDiv = styled.div`
  width: 415px;
  height: 357px;
  display: flex;
  flex-direction: column;
  border-radius: 50px 50px 0 0;
  animation: ${slideIn} 0.5s ease-in-out;

  border-radius: 5px 20px;
  background: rgba(255, 255, 255, 0.7);

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 5px 50px 0px rgba(57, 29, 147, 0.2),
    0px -5px 50px 0px rgba(57, 29, 147, 0.2);
  backdrop-filter: blur(15px);

  margin: 0 auto;
`;

export const GPTHeaderDiv = styled.div`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 40px;
`;
export const GptSpan = styled.div`
  color: var(--main, #391d93);
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const GPTSolutionDiv = styled.div`
  width: 377px;
  height: 170px;
  border: 2px solid red;
  margin: 20px auto 0 auto;
`;
export const GPTEachSolutionDiv = styled.div`
  width: 335px;
  color: var(--Gray1, #3d3d3d);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const GPTBtnDiv = styled.div`
  width: 384px;
  height: 48px;
  border-radius: 2px 10px;
  background: #391d93;

  text-align: center;
  color: #fff;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0.18px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px auto;
`;
