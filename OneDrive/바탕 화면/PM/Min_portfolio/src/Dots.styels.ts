import styled from 'styled-components';

export const BoxDiv = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid white;
  background-color: transparent;

  @media (max-width: 1900px) {
    /* 화면이 작아질 때 컬럼 방향으로 변경 */
    display: none;
  }
`;
