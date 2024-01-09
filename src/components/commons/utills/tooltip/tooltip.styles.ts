import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const floatingAnimation = keyframes`
  0% {
    transform: translate(-50%,-100%);
  }
  50% {
    transform: translate(-50%, -110%);
  }
  100% {
    transform: translate(-50%,-100%);
  }
`;

export const Content = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 80px;
  background-color: #391d93;
  border-radius: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  animation: ${floatingAnimation} 1.5s ease-in-out infinite; /* 떠다니는 애니메이션 추가 */
  color: white;

  ${Container}:hover &,
  ${Container}:active & {
    display: block;
  }
`;
