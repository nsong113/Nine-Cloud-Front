import styled from 'styled-components';
import { ISliderInputProps } from './BoardWriteEmotion.types';

export const EmotionContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 960px;
  overflow: hidden;
  background-image: url('/bg_final_final.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const EmotionWrapperUPDiv = styled.div`
  width: 100%;
  min-height: 100px;
  position: relative;
`;

export const EmotionWrapperDOWNdiv = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: white;
  border-radius: 50px 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 775px;
  border-radius: 22.583px 5.646px 5.646px 5.646px;
  background: rgba(245, 242, 255, 0.3);
  box-shadow: 0px 4.517px 2.258px 0px rgba(80, 53, 166, 0.2),
    0px 4.517px 11.291px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4.517px 22.583px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(16.93691062927246px);
  /* opacity: 0.8; */
`;

export const HeaderButtonBoxDiv = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 50px;
`;
export const HeaderLine = styled.div`
  width: 150px;
  height: 2px;
  background-color: #ece9f5;
  margin: 0 auto;
  position: absolute;
`;

export const HeaderFlexBox = styled.div`
  width: 200px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

export const OneBlackSpan = styled.div`
  width: 17.862px;
  height: 18px;
  /* transform: translateX(-15px); */

  border-radius: 45px;
  background: radial-gradient(
        circle at 100% 100%,
        #ffffff 0,
        #ffffff 6px,
        transparent 6px
      )
      0% 0%/8px 8px no-repeat,
    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 6px, transparent 6px)
      100% 0%/8px 8px no-repeat,
    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 6px, transparent 6px)
      0% 100%/8px 8px no-repeat,
    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 6px, transparent 6px) 100%
      100%/8px 8px no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 4px)
      calc(100% - 16px) no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 16px)
      calc(100% - 4px) no-repeat,
    linear-gradient(
      319deg,
      rgba(255, 255, 255, 0.7) 51%,
      rgba(80, 53, 166, 0.77) 100%
    ),
    linear-gradient(
      128deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(80, 53, 166, 0.77) 100%
    ),
    radial-gradient(at 0% 0%, rgba(80, 53, 166, 0.2) 0%, transparent 70%),
    linear-gradient(
      44deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(80, 53, 166, 0.2) 100%
    );
  box-sizing: border-box;
  /* glassmorphism */
  box-shadow: 0px 4px 2px 0px rgba(80, 53, 166, 0.2),
    0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(15px);
`;

export const TwoBlankSpan = styled.div`
  width: 18px;
  height: 18px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

//////////
export const SelectBox = styled.div`
  width: 90px;
  height: 37px;
  transform: translateY(8px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ThreeFilledSpan = styled.div`
  width: 17.862px;
  height: 18px;

  z-index: 10;

  border-radius: 45px;
  border: 1px solid var(--glassmorphism-line, rgba(80, 53, 166, 0.77));

  background: var(--1, #5035a6);
  box-shadow: 0px 4px 2px 0px rgba(80, 53, 166, 0.2),
    0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(15px);
`;

export const SelectP = styled.div`
  color: var(--1, #5035a6);
  /* font-family: Spoqa Han Sans Neo; */
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2px;
  /* transform: translateX(-30%); */
`;

export const SelectP2 = styled.div`
  color: var(--1-1, #ece9f5);
  /* font-family: Spoqa Han Sans Neo; */
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2px;
  /* transform: translateX(-80%); */
`;

export const SelectP3 = styled.div`
  color: var(--1-1, #ece9f5);
  /* font-family: Spoqa Han Sans Neo; */
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* transform: translateX(-80%); */
`;

const colors = {
  mainColor: 'blue',
  grey: {
    100: 'grey',
    300: 'lightgrey', // 회색 계열 중 300
  },
  white: 'white',
};

export const ContentInputBoxDiv = styled.div`
  width: 100%;
  height: 100px;
  padding: 5px;

  /* border: 1px solid var(--glassmorphism-line2, rgba(239, 170, 173, 0.7)); */

  border-radius: 10px 0px;
  background: #f5f2ff;

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 2px 10px 0px rgba(80, 53, 166, 0.15);
  backdrop-filter: blur(15px);
`;

export const ContentInputDescDiv = styled.div`
  width: 100%;
  text-align: left;
  font-size: 12px;
  line-height: 1.2;
  color: var(--Gray1, #3d3d3d);
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ContentSpan = styled.span`
  color: var(--Gray1, #3d3d3d);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SliderInput = styled.input<ISliderInputProps>`
  -webkit-appearance: none;

  width: 90%;
  height: 5px;
  background: transparent;
  transform: translate(17px, 25px);
  border-radius: 14px;

  background: ${(props) => {
    const percentage =
      ((props.value - props.min) / (props.max - props.min)) * 100;
    return `linear-gradient(to right, #9279E1 0%, #9279E1 ${percentage}%, #ECE9F5 ${percentage}%, #ECE9F5 100%)`;
  }};

  /* -webkit-box-shadow: 1px 7px 13px -5px rgba(80, 53, 166, 0.75);
  box-shadow: 1px 7px 13px -5px rgba(80, 53, 166, 0.75);
  background-clip: content-box; */

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #5035a6;
    /* border: 1px solid ${colors.grey[300]}; */
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    background-color: ${colors.white};
    border: 1px solid ${colors.grey[300]};
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const LabelsDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  transform: translateY(-20px);
  color: var(--1, #5035a6);
  /* font-family: Spoqa Han Sans Neo; */
  font-size: 15px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`;

// 각 label의 컨테이너 스타일 정의
export const Labels = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

// 각 label 스타일 정의
export const Label = styled.span`
  position: relative;
  cursor: pointer;
  text-align: center;
  font-style: normal;
  font-size: 16px;
  margin-top: 6px;
`;
export const SliderWrapperDiv = styled.div`
  width: 100%;
`;

export const SliderBoxDiv = styled.div`
  margin: 30px auto;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerDiv = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 500px;
`;
export const CountBoxDiv = styled.div`
  width: 89.419px;
  height: 25px;
  border-radius: 5px 2px;
  background: #5035a6;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const CountP = styled.p``;
export const ContentsBoxDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const ContentFlexDivBox = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentBoxDiv = styled.p`
  width: 70%;
  font-size: 18px;
  color: #222122;
  font-weight: 300;
`;

export const ContentBoxSpan = styled.span`
  font-weight: 500;
  color: #222122;
  font-size: 18px;
`;

export const ButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;

export const PrevButton = styled.button`
  width: 30%;
  height: 60px;
  outline: none;
  cursor: pointer;
  border-radius: 5px 20px;
  border: 1px solid var(--1-1, #ece9f5);
  background: #fff;
  color: var(--1, #5035a6);
  /* font-family: Spoqa Han Sans Neo; */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const NextButton = styled.button`
  width: 60%;
  height: 60px;
  outline: none;
  cursor: pointer;

  border-radius: 20px 5px;
  border: 1px solid var(--1-1, #ece9f5);
  background: var(--1-1, #ece9f5);
  color: var(--1, #5035a6);
  /* font-family: Spoqa Han Sans Neo; */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
