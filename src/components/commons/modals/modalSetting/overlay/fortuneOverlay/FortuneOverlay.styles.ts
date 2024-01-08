import { styled } from 'styled-components';

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.3s ease-in-out;
`;

export const ModalContentDiv = styled.div`
  width: 20rem;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
`;

export const ShowNoteP = styled.p`
  z-index: 1000;
  width: 300px;
  text-align: center;
  position: absolute;
  top: -95%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
