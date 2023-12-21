import { keyframes, styled } from 'styled-components';

export const slideIn = keyframes`
  from {
    transform: translateY(100%)
  }
  to {
    transform: translateY(0) 
  }
`;

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
  background: rgba(245, 242, 255, 1);

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 5px 50px 0px rgba(57, 29, 147, 0.2),
    0px -5px 50px 0px rgba(57, 29, 147, 0.2);
  backdrop-filter: blur(15px);

  margin: 0 auto;
  padding: 20px;
`;

export const GPTHeaderDiv = styled.div`
  color: var(--Gray2, #929292);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
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
  min-height: 140px;
  height: auto;
  margin: 20px auto 0 auto;
  overflow-y: auto;
`;
export const GPTEachSolutionDiv = styled.div`
  width: 100%;
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
  background: #ece9f5;

  text-align: center;

  color: var(--main, #391d93);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.18px;
  margin: 15px auto;
`;

export const ModalContentDivGo = styled.div`
  width: 415px;
  height: 290px;
  display: flex;
  flex-direction: column;
  border-radius: 50px 50px 0 0;
  animation: ${slideIn} 0.5s ease-in-out;

  border-radius: 5px 20px;
  background: rgba(245, 242, 255, 1);

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 5px 50px 0px rgba(57, 29, 147, 0.2),
    0px -5px 50px 0px rgba(57, 29, 147, 0.2);
  backdrop-filter: blur(15px);

  margin: 0 auto;
`;

export const GptFlexBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GptEmoji = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('/gpt_cloud_emoji.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GptSolutionP = styled.div`
  width: 100%;
  text-align: left;
  margin-left: 10px;
`;
export const GptX = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 20px;
  margin-left: 360px;
  background-image: url('/closeModalIcon.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const GptH3 = styled.div`
  color: var(--main, #391d93);
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 40px;
`;

export const GptP = styled.div`
  color: var(--Gray2, #929292);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 15px;
`;
export const GPTBtnDivGo = styled.div`
  width: 384px;
  height: 48px;
  border-radius: 2px 10px;
  background: #391d93;

  text-align: center;
  color: #fff;

  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.18px;

  margin: 0 auto;
`;

export const GptReloadingBox = styled.div`
  width: 240px;
  height: 30px;
  margin-top: 15px;
  margin-left: 130px;
`;

export const GptReloadingFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GptReloadingP = styled.div`
  color: var(--Gray2, #929292);
  font-size: 15px;
  font-weight: 300;
`;

export const GptReloadingImg = styled.div`
  width: 21.5px;
  height: 21px;
  background-image: url('/gptReload.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
