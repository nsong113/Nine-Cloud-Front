import styled from 'styled-components';
import { ISliderInputProps } from './BoardWriteEmotion.types';

export const EmotionContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 900px;
  overflow: hidden;
`;

export const EmotionWrapperUPDiv = styled.div`
  width: 100%;
  min-height: 220px;
  background-color: #ededed;
  position: relative;
`;

export const EmotionWrapperDOWNdiv = styled.div`
  width: 100%;
  min-height: 810px;
  background-color: white;
  border-radius: 50px 0 0 0;
  filter: drop-shadow(-2px -5px 12px rgba(0, 0, 0, 0.2));
  transform: translateY(-30px);
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 1px;
  background-color: #909090;
  margin: 0 auto;
  position: absolute;
`;

export const HeaderFlexBox = styled.div`
  width: 180px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

export const OneBlackSpan = styled.div`
  width: 18px;
  height: 18px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

export const TwoBlankSpan = styled.div`
  width: 18px;
  height: 18px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

export const ThreeFilledSpan = styled.div`
  width: 65px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border: 1px solid #909090;
  border-radius: 12px;
  z-index: 10;
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
  width: 300px;
  height: 80px;
  background-color: #d9d9d9;
  margin-top: 3px;
  border-radius: 0 15px 0 15px;
  padding: 5px;
`;

export const ContentInputDescDiv = styled.div`
  width: 100%;
  text-align: right;
  font-size: 12px;
  margin: 4px 0;
  line-height: 1.2;
`;

export const SliderInput = styled.input<ISliderInputProps>`
  -webkit-appearance: none;
  /* appearance: none; */
  width: 280px;
  height: 6px;
  border-radius: 14px;
  transform: translateX(3px);
  background: ${(props) => {
    const percentage =
      ((props.value - props.min) / (props.max - props.min)) * 100;
    return `linear-gradient(to right, red 0%, red ${percentage}%, blue ${percentage}%, blue 100%)`;
  }};

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: ${colors.white};
    border: 1px solid ${colors.grey[300]};
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

export const SliderBoxDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SliderWrapperDiv = styled.div``;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 500px;
`;
export const CountBoxDiv = styled.div`
  width: 80px;
  height: 30px;
  background-color: #d9d9d9;
  border-radius: 10px 0 10px 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CountP = styled.p``;
export const ContentsBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  justify-content: center;
  align-items: center;
`;

export const ContentBoxDiv = styled.p`
  width: 100%;
  font-size: 19px;
`;

export const ContentBoxSpan = styled.span`
  font-weight: 800;
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
  height: 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const NextButton = styled.button`
  width: 60%;
  height: 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
