import styled from 'styled-components';
import { IStyled } from './ConfirmOverlay.types';

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 960px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.3s ease-in-out;
`;

export const ModalContentDiv = styled.div`
  width: 400px;
  height: 360px;
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  background: #fff;

  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxDiv = styled.div`
  width: 20rem;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextStyleSpanH5 = styled.h5`
  font-size: 16px;
  color: black;
`;

export const TextStyleSpanP = styled.p`
  font-size: 10px;
  color: black;
  margin-bottom: 20px;
`;

export const CancelButton = styled.div`
  width: 130px;
  height: 65px;
  border: 2px solid #5035a6;
  color: #5035a6;
  border-radius: 0 55px 0 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxButton = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextStyleSpan = styled.span`
  color: white;
`;

export const StyleButton = styled.div`
  width: 230px;
  height: 65px;
  background-color: #5035a6;
  color: white;
  border-radius: 55px 0 55px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
