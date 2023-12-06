import styled from 'styled-components';
import { TbSquareRoundedNumber1 } from 'react-icons/tb';
import { TbSquareRoundedNumber1Filled } from 'react-icons/tb';
import { TbSquareRoundedNumber2 } from 'react-icons/tb';
import { TbSquareRoundedNumber2Filled } from 'react-icons/tb';
import { TbSquareRoundedNumber3 } from 'react-icons/tb';
import { TbSquareRoundedNumber3Filled } from 'react-icons/tb';
import { ISliderInputProps } from './BoardWriteEmotion.types';

//전체 폼
export const EmotionContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* overflow: hidden; */
`;

export const EmotionWrapperUPDiv = styled.div`
  width: 100%;
  height: 164px;
  background-color: #ededed;
  position: relative;
`;

export const EmotionWrapperDOWNdiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 50px 0 0 0;
  filter: drop-shadow(-2px -5px 12px rgba(0, 0, 0, 0.2));
  transform: translateY(-30px);
`;

export const HeaderButtonBoxDiv = styled.div`
  width: 100%;

  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 50px;
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

// slider의 스타일 정의
const colors = {
  mainColor: 'blue', // 메인 색상
  grey: {
    100: 'grey', // 회색 계열 중 100
    300: 'lightgrey', // 회색 계열 중 300
  },
  white: 'white', // 흰색
};

export const ContentInputBoxDiv = styled.div`
  width: 300px;
  height: 75px;
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
`;

//   -webkit-appearance: none;
//   appearance: none;
//   width: 300px;
//   height: 8px;
//   border-radius: 4px;
//   background: ${(props) => {
//     const percentage = ((Number(props.value) - 1) / 4) * 100;
//     // return `linear-gradient(to right, ${colors.mainColor} 0%, ${colors.mainColor} ${percentage}%, ${colors.grey[100]} ${percentage}%, ${colors.grey[100]} 100%)`;

//     return `linear-gradient(to right, red 0%, red ${props.inputNumber}%, blue ${props.inputNumber}%, blue 100%)`;

//     // return `linear-gradient(to right, red 0%, ${
//     //   props.inputNumber >= 50 ? 'blue' : 'red'
//     // } 50%, blue 100%)`;
//   }};

//   background: gray;

//   &:focus {
//     outline: none;
//   }

//   &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     appearance: none;
//     width: 28px;
//     height: 28px;
//     background-color: ${colors.white};
//     border: 1px solid ${colors.grey[300]};
//     border-radius: 50%;
//     cursor: pointer;
//   }

//   &::-moz-range-thumb {
//     width: 28px;
//     height: 28px;
//     background-color: ${colors.white};
//     border: 1px solid ${colors.grey[300]};
//     border-radius: 50%;
//     cursor: pointer;
//   }
// `;
export const SliderInput = styled.input<ISliderInputProps>`
  -webkit-appearance: none;
  appearance: none;
  width: 300px;
  height: 8px;
  border-radius: 14px;
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
    width: 28px;
    height: 28px;
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

// 각 label의 컨테이너 스타일 정의
export const Labels = styled.div`
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

export const LabelsDiv = styled.div`
  width: 300px;
`;

export const SliderBoxDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  width: 498px;
  margin-top: 50px;
`;
export const CountBoxDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  margin-left: 50px;
`;
export const CountP = styled.p`
  text-align: center;
`;
export const ContentsBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
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
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
`;

export const NextButton = styled.button`
  width: 100px;
  height: 50px;
`;
