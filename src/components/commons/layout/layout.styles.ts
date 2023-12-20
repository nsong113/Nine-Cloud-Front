import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  width: 443px;
  height: 99.8%;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  border: 1px solid gray;
`;
