import styled, { keyframes } from 'styled-components';


export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContentDiv = styled.div`
  width: 443px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 50px;
`;

export const ContentsWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBoxDiv = styled.h2`
  text-align: center;
  /* line-height:  ; */
`;

export const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
`;

export const ContentTextArea = styled.textarea`
  border: 1px solid black;
  width: 400px;
  height: 200px;
`;

