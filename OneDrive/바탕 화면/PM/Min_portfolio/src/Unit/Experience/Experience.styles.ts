import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const floatingAnimation = keyframes`
  0% {
    transform: translate(0%,0%);
  }
  50% {
    transform: translate(0%, 3%);
  }
  100% {
    transform: translate(0%,0%);
  }
`;

const frameInAnimation = keyframes`
  0% {

    transform: translateY(-20%);
  }

  50% {
    transform: translateY(0%);

  }

  100%{

    transform: translateY(-20%);
  }
`;

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 100vw;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid white;
  @media (max-width: 1500px) {
    height: 10%;
  }

  @media (max-height: 860px) {
  }

  @media (max-width: 915px) {
    display: none;
  }
`;

export const FirstLineTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HightLightText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: red;
`;

export const TextStyle = styled.span`
  font-size: 50px;
  font-weight: bolder;
  color: white;

  @media (max-width: 870) {
    animation: none;
  }

  @media (max-width: 1330px) {
    font-size: 35px;
  }
`;

export const FirstText = styled.span`
  font-size: 50px;
  font-weight: bolder;
  color: skyblue;
  margin: 0px 1.5rem;
  animation: ${frameInAnimation} 3s ease-in-out infinite;
  @media (max-width: 870) {
    animation: none;
  }

  @media (max-width: 1330px) {
    font-size: 35px;
  }
`;

export const SecondText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: white;
  @media (max-width: 870) {
    animation: none;
  }

  @media (max-width: 1330px) {
    font-size: 35px;
  }
`;

export const ProjectBox = styled.div`
  width: 100vw;
  flex: 70%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1850px) {
    flex-wrap: wrap; /* 화면이 작아질 때 컬럼 방향으로 변경 */
    align-items: center; /* 중앙 정렬 */
  }
  @media (max-width: 1700px) {
    /* 화면이 작아질 때 컬럼 방향으로 변경 */
    align-items: center;
    justify-content: center; /* 중앙 정렬 */
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
  &:hover {
    color: ${(props) => (props.color ? props.color : 'black')};
  }
`;

export const SubTitleSpan = styled.div`
  font-size: 17px;
  color: black;
  font-weight: bolder;
`;

export const ProjectBoxDiv = styled(motion.div)`
  margin: 3rem; /* 수정된 부분: 여백을 좀 더 줄임 */
  width: 360px; /* 수정된 부분: 너비를 조절 */
  background-color: white;
  border-radius: 40px;

  @media (max-width: 1850px) {
    width: 350px;
    height: 450px;
    margin: 2rem;
  }
  @media (max-width: 1700px) {
    width: 300px;
    margin: 1rem;
  }
  @media (max-width: 1330px) {
    width: 330px;
    height: 350px;
    margin: 0.5rem 4rem;
    align-items: center;
    justify-content: center; /* 중앙 정렬 */
  }
  @media (max-width: 915px) {
    flex-wrap: wrap;
    margin: 0.5rem;
  }

  @media (max-height: 700px) {
    height: 300px;
    width: 300px;
  }
`;

export const TitleAndNumberBox = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const TitleAndNumber = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const YoutubeImg = styled(motion.img)`
  width: 70px;
  height: 50px;
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;
`;

export const ProjectImg = styled(motion.img)`
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;
  width: 100%; /* 수정된 부분: 이미지를 부모 요소의 100%로 설정하여 크기 조절 */
  max-height: 340px; /* 수정된 부분: 최대 높이를 지정하여 세로 크기를 제한 */
  &:hover {
    animation: ${floatingAnimation} 1.3s ease-in-out infinite;
  }
  @media (max-width: 1330px) {
    height: 250px;
  }

  @media (max-height: 806px) {
    height: 250px;
  }

  @media (max-height: 700px) {
    height: 200px;
    width: 300px;
  }
`;
