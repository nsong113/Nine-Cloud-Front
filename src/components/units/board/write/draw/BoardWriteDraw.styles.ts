import styled from 'styled-components';
import { IPalette } from './BoardWriteDraw.types';

export const DrawContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 900px;
  overflow: hidden;
`;

export const DrawWrapperUPDiv = styled.div`
  width: 100%;
  min-height: 220px;
  background-color: #ededed;
  position: relative;
`;

export const DrawWrapperDOWNdiv = styled.div`
  width: 100%;
  min-height: 810px;
  background-color: white;
  border-radius: 0 50px 0 0;
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
export const DoneCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-10px);
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
  margin: 87px 0 10px 0;
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
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
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

export const ColorSettingDiv = styled.div`
  width: 377px;
  height: 55px;
  border-radius: 11px;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 21px;
  margin: 0 auto;
  margin-bottom: 10px;
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
`;

export const ThicknessMedium = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
`;

export const ThicknessThin = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
`;

export const EraserThicknessBold = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
`;
export const ThicknessBoldMedium = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
`;

export const EraserThicknessMedium = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
`;

export const ThicknessMediumThin = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
`;

export const EraserThicknessThin = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
`;

export const ColorPaletteFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Palette = styled.div<IPalette>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const ArrowDiv = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 18px 13px 18px;
  border-color: transparent transparent #ebebeb transparent;
  transform: rotate(0deg);
  border-radius: 20px;
  transform: translate(85px, 20%);
  z-index: -1;
`;

export const ToggleBox = styled.div`
  width: 60%;
  height: 61px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FirstToggle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

//////////eraser
export const EraserArrowDiv = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 18px 13px 18px;
  border-color: transparent transparent #ebebeb transparent;
  transform: rotate(0deg);
  border-radius: 20px;
  transform: translate(150px, 20%);
  z-index: -1;
`;

export const EraserThicknessDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
