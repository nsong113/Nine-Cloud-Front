import styled from 'styled-components';
import { TbSquareRoundedNumber1 } from 'react-icons/tb';
import { TbSquareRoundedNumber1Filled } from 'react-icons/tb';
import { TbSquareRoundedNumber2 } from 'react-icons/tb';
import { TbSquareRoundedNumber2Filled } from 'react-icons/tb';
import { TbSquareRoundedNumber3 } from 'react-icons/tb';
import { TbSquareRoundedNumber3Filled } from 'react-icons/tb';

// slider의 스타일 정의
const colors = {
  mainColor: 'blue', // 메인 색상
  grey: {
    100: 'grey', // 회색 계열 중 100
    300: 'lightgrey', // 회색 계열 중 300
  },
  white: 'white', // 흰색
};

export const SliderInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 300px;
  height: 14px;
  border-radius: 10px;
  background: ${(props) => {
    const percentage = ((Number(props.value) - 1) / 4) * 100;
    return `linear-gradient(to right, ${colors.mainColor} 0%, ${colors.mainColor} ${percentage}%, ${colors.grey[100]} ${percentage}%, ${colors.grey[100]} 100%)`;
  }};

  background: gray;

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
  display: inline-block;
  text-align: center;
  width: 30px;
  font-family: 'SUIT';
  font-style: normal;
  font-size: 16px;
  line-height: 1.5;
`;

export const LabelsDiv = styled.div`
  width: 300px;
`;

export const SliderBoxDiv = styled.div`
  width: 498px;
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

export const ButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 498px;
  margin-top: 50px;
`;

export const NextButton = styled.button`
  width: 100px;
  height: 50px;
`;

export const OneBlackSpan = styled(TbSquareRoundedNumber1)``;

export const OneFilledSpan = styled(TbSquareRoundedNumber1Filled)``;
export const TwoBlankSpan = styled(TbSquareRoundedNumber2)``;

export const TwoFilledSpan = styled(TbSquareRoundedNumber2Filled)``;

export const ThreeBlackSpan = styled(TbSquareRoundedNumber3)``;

export const ThreeFilledSpan = styled(TbSquareRoundedNumber3Filled)``;
