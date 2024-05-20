import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid white;
  border-left: none;
  @media (max-width: 1300px) {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const FirstLineTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  @media (max-width: 1300px) {
    width: 300px;
    height: 300px;
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  width: 1000px;
  height: 50%;
  font-weight: bolder;
  color: white;
  flex-direction: column;
  justify-content: space-between;
`;

export const HightLightText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: red;
`;

export const FirstText = styled.a`
  font-size: 50px;
  font-weight: bolder;
  color: white;
  @media (max-width: 1500px) {
    flex-wrap: wrap;
    margin: 0.5rem;
    font-size: 30px;
  }

  @media (max-width: 1330px) {
    font-size: 35px;
  }
`;

export const RelativeDiv = styled.div`
  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.span`
  font-size: 50px;
  font-weight: bolder;
  color: white;
  @media (max-width: 1500px) {
    font-size: 40px;
  }
`;

export const SecondText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: black;
`;

export const ProjectBox = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 915px) {
    width: 70%;
  }
`;

export const NineCloudGif = styled.img`
  height: 400px;
`;

export const Numbering = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bolder;
`;

export const TitleSpan = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bolder;
`;

export const SubTitleSpan = styled.div`
  font-size: 17px;
  color: black;
  font-weight: bolder;
`;

export const ProjectBoxDiv = styled(motion.div)`
  margin: 3rem;
  width: 360px;
  background-color: white;
  border-radius: 40px;
`;
