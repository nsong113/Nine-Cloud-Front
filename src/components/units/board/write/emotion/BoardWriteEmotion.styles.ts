import styled from 'styled-components';
import { ISliderInputProps } from './BoardWriteEmotion.types';

export const EmotionContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 960px;
  overflow: hidden;
  background-color: white;
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
  font-weight: 300;
`;

export const ContentSpan = styled.span`
  color: var(--Gray1, #3d3d3d);
  font-size: 15px;
  font-weight: 500;
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
    return `linear-gradient(to right, #5035A6 0%, #ECE9F5 ${percentage}%, white ${percentage}%, white 100%)`;
  }};

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #5035a6;
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
  font-size: 15px;
  font-weight: 100;
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
