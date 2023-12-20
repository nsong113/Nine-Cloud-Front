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
  top: 10%; /* 수정된 부분: 부모 요소의 50% 위에 위치 */
  left: 50%; /* 가운데 정렬을 위해 50%로 설정 */
  transform: translate(
    -50%,
    -100%
  ); /* 수정된 부분: 세로 방향으로 위로 100% 이동 */
  width: 80px;
  background-color: orange;
  border-radius: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  animation: ${tooltip} 0.3s ease-in-out;

  /* 수정된 부분: display를 제어하는 스타일 추가 */
  ${Container}:hover &,
  ${Container}:active & {
    display: block;
  }
`;
