import { TbSquareRoundedNumber1 } from 'react-icons/tb';
import { TbSquareRoundedNumber2Filled } from 'react-icons/tb';
import { TbSquareRoundedNumber3 } from 'react-icons/tb';
import styled from 'styled-components';
import { IPalette } from './BoardWriteDraw.types';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProgressWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 498px;
  margin-top: 50px;
`;

export const ContentsDiv = styled.div`
  width: 300px;
  height: 600px;
  border: 1px solid black;
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 498px;
  margin-top: 50px;
`;

export const PrevButton = styled.button`
  height: 50px;
  width: 100px;
  margin-right: 50px;
`;

export const NextButton = styled.button`
  height: 50px;
  width: 100px;
`;

export const OneBlankSpan = styled(TbSquareRoundedNumber1)``;

export const TwoFilledSpan = styled(TbSquareRoundedNumber2Filled)``;

export const ThreeBlankSpan = styled(TbSquareRoundedNumber3)``;

export const ColorSettingDiv = styled.div`
  width: 377px;
  height: 29px;
  border-radius: 11px;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px;
`;

export const ThicknessDiv = styled.div`
  width: 16px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ThicknessBold = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #111;
`;

export const ThicknessMedium = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #111;
`;

export const ThicknessThin = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #111;
`;

export const ColorPaletteFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
`;

export const Palette = styled.div<IPalette>`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ArrowDiv = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 23px 28px 23px;
  border-color: transparent transparent #d9d9d9 transparent;
  transform: rotate(0deg);
  border-radius: 20px;
  transform: translate(110px, 40%);
  z-index: -1;
`;

export const ToggleBox = styled.div`
  width: 213px;
  height: 61px;
  margin: 24px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FirstToggle = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
