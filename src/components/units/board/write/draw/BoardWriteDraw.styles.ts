import styled from 'styled-components';
import { IPalette } from './BoardWriteDraw.types';

export const DrawContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 960px;
  overflow: hidden;
  background-color: white;
`;

export const DrawWrapperDOWNdiv = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: white;

  height: 775px;

  border-radius: 5px 20px 5px 5px;
  background: rgba(245, 242, 255, 0.3);

  box-shadow: 0px 4px 2px 0px rgba(80, 53, 166, 0.2),
    0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(15px);
  padding: 6px;
  box-sizing: border-box;
  backdrop-filter: blur(15px);
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
  height: 2px;
  background-color: rgba(57, 29, 147, 0.5);
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

export const ContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DrawTitleFlexIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  transform: translateY(20px);
`;

export const DrawTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrashcanDiv = styled.div`
  width: 15.778px;
  height: 24.351px;
  background-image: url('/trashcan.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const DownloadDiv = styled.div`
  width: 15.778px;
  height: 24.351px;
  background-image: url('/download.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const CanvasContainer = styled.div``;

export const DrawCanvas = styled.canvas`
  margin: 5px auto;

  border-radius: 10px;
  border: 1px solid var(--line, #cfc0ff);
  background: #fff;

  padding: 6px;
  box-sizing: border-box;

  cursor: pointer;
`;

export const DrawWriteTitleH3 = styled.h3`
  text-align: left;
  margin: 30px 0 10px 0;

  color: var(--Black, #222122);
  font-size: 18px;
  font-weight: 300;
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
  justify-content: space-between;
  align-items: center;
  width: 110%;
  margin: 0 auto;
  transform: translateX(-18px);
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
  font-size: 20px;
  font-weight: 500;
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
  font-size: 20px;
  font-weight: 500;
`;

export const ColorSettingDiv = styled.div`
  width: 377px;
  height: 59.739px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 21px;
  margin: 20px auto;

  border-radius: 10px;
  border: 1px solid var(--line, #cfc0ff);
  background: rgba(245, 242, 255, 0.5);

  backdrop-filter: blur(15px);
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

/* eslint-disable */
export const ThicknessOption = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background: var(--sub, #8066d1);
  cursor: pointer;
`;
/* eslint-enable */

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
  width: 100%;
  height: 61px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ThicknessBoxDiv = styled.div`
  width: 258px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid var(--line, #cfc0ff);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;

export const FirstPenToggle = styled.div`
  width: 37px;
  height: 37px;

  border-radius: 71px;
  border: 1px solid var(--main, #391d93);
  background: #f5f2ff;

  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: var(--1, #5035a6);
  font-size: 10px;
  font-weight: 300;

  &:active {
    border-radius: 71px;
    background: #5035a6;

    color: white;
    transition: 0.3s;
    transform: scale(1.3);
  }
`;

export const FirstEraserToggle = styled.div`
  width: 37px;
  height: 37px;

  border-radius: 71px;
  border: 1px solid var(--main, #391d93);
  background: #f5f2ff;

  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: var(--1, #5035a6);
  font-size: 10px;
  font-weight: 300;

  background-image: url('/eraser.png');
  background-size: 60%;

  background-position: center;
  background-repeat: no-repeat;

  &:active {
    border-radius: 71px;
    background: #5035a6;

    color: white;
    transition: 0.3s;
    transform: scale(1.3);
  }
`;

export const ColorEraserSettingDiv = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const SecondToggle = styled.div`
  width: 37px;
  height: 37px;

  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;

  border-radius: 71px;
  border: 1px solid var(--main, #391d93);
  background: #f5f2ff;

  color: var(--1, #5035a6);
  font-size: 10px;
  font-weight: 300;

  background-image: url('/thickness.png');
  background-size: 50%;

  background-position: center;
  background-repeat: no-repeat;
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

  &:focus {
    width: 50px;
    height: 50px;
    background-color: #5035a6;
    color: white;

    transition: 0.3s;
  }
`;

export const EraserThicknessDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const DiaryToggleP = styled.div`
  color: var(--1, #5035a6);
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 16px;
`;

export const DiarySpan = styled.span`
  color: var(--Black, #222122);
  font-size: 18px;
  font-weight: 500;
`;
