import styled from 'styled-components';

export const container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    padding: 0px;
  }

`;

export const Number = styled.span`
  font-size: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Contents = styled.span`
  font-size: 15px;
`;

export const BoxDiv = styled.div`
  margin-bottom: 50px;
`;
