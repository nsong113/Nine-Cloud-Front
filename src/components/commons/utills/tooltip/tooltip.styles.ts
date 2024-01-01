import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const tooltip = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1; }
`;

export const Content = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 80px;
  background-color: orange;
  border-radius: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  animation: ${tooltip} 0.3s ease-in-out;

  ${Container}:hover &,
  ${Container}:active & {
    display: block;
  }
`;
