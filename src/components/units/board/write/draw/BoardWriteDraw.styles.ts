import { TbSquareRoundedNumber1 } from 'react-icons/tb';
import { TbSquareRoundedNumber2Filled } from 'react-icons/tb';
import { TbSquareRoundedNumber3 } from 'react-icons/tb';
import styled from 'styled-components';

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
