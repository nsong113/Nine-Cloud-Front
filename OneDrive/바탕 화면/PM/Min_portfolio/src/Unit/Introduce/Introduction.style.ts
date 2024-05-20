import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* @media (min-width: 1500px) {
    width: 80vw;
  } */
`;

export const TextBox = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ProfileImg = styled.img`
  width: 690px;
  height: 700px;
  margin-right: 20rem;
  @media (max-width: 1550px) {
    width: 500px;
    height: 500px;
    margin-right: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const FirstLineTextBox = styled.div`
  display: flex;
`;

export const BlankDiv = styled.div`
  height: 75px;
`;

export const HightLightText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: aqua;
  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    font-size: 40x;
  }
`;

export const FirstText = styled.span`
  font-size: 50px;
  font-weight: bolder;
`;

export const SecondText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    font-size: 30px;
  }
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    font-size: 30px;
  }
`;
