import { TbSquareRoundedNumber1 } from 'react-icons/tb';
import { TbSquareRoundedNumber2Filled } from 'react-icons/tb';
import { TbSquareRoundedNumber3 } from 'react-icons/tb';
import styled from 'styled-components';
import { IPalette } from './BoardWriteDraw.types';

export const DrawContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DrawWrapperUPDiv = styled.div`
  width: 100%;
  height: 164px;
  background-color: #ededed;
  position: relative;
`;

export const DrawWrapperDOWNdiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 0 0 0 0;
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
  background-color: #909090;
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

export const ContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DrawTitleBox = styled.div`
  width: 100%;
`;

export const DrawWriteTitleH3 = styled.h3`
  text-align: left;
  font-weight: 700;
  margin: 87px 0 26px 0;
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
  width: 80%;
  margin: 0 auto;
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
