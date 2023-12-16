import styled from 'styled-components';

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
