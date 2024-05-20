import styled, { keyframes } from 'styled-components';

const frameInAnimation = keyframes`
  0% {
    transform: translateX(-270px);
  }
  50% {
    transform: translateX(900px);
  }
  100% {
    transform: translateX(-270px);
  }
`;

const rollingAnimation = keyframes`
  0% {
    transform: translateX(-270px) ;
    transform :rotate(0deg);
    transform: scale(1.1);

  }
  10% {
    transform: translateX(-270px) ;
    transform :rotate(30deg);

  }
  25% {
    transform: translateX(-270px) ;
    transform :rotate(60deg);
    transform: scale(1.1);

  }
  50% {
    transform: translateX(900px);
    transform :rotate(90deg);

  }

  60% {
    transform: translateX(900px);
    transform :rotate(120deg);
    transform: scale(1.1);

  }
  75% {
    transform: translateX(900px);
    transform :rotate(150deg);

  }
  100% {
    transform: translateX(1200px);
    transform :rotate(180deg);
    transform: scale(1.1);

  }

  
`;

const floatingAnimation = keyframes`
  0% {

    transform: translateY(0%);
  }

  50% {
    transform: translateY(-10%);

  }

  100%{

    transform: translateY(0%);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LightHouseDiv = styled.div`
  width: 400px;
  height: 410px;
  border: 5px solid white;
  border-radius: 0px 150px 150px 0px;
  display: flex;
  /* animation: ${frameInAnimation} 10s ease-in-out infinite; */
  z-index: 10;
`;

export const ClickText = styled.div`
  font-size: 20px;
  color: blue;
`;

export const ConnectBarDiv = styled.div`
  width: 50px;
  height: 20px;
  border: 2px solid white;
  border-left: none;
  border-right: none;
`;

export const CheolMinImgDiv = styled.div`
  height: 300px;
  width: 350px;
  border: 5px solid white;
  margin-top: 40px;
  border-radius: -50px;
`;

export const CheolMinImg = styled.img`
  width: 350px;
  height: 350px;
`;

export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1900px) {
    width: 100%;
  }
  @media (max-width: 1500px) {
    height: 400px;
    border-radius: 0px;
    width: 100%;
  }
`;

export const ConnectionDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 100px;
  @media (max-width: 1900px) {
    display: none;
  }
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const BoxDiv = styled.div`
  width: 500px;
  height: 400px;
  border: 5px solid white;
  border-radius: 0px 50px 50px 0px;
  margin-left: 70px;
  @media (max-width: 1900px) {
    margin-left: 100px;
  }

  @media (max-width: 1850px) {
    margin-left: 50px;
  }
  @media (max-width: 1600px) {
    width: 400px;
    height: 400px;
    border-radius: 0px;
    border: 2px solid white;
  }
  @media (max-width: 1500px) {
    width: 400px;
    height: 400px;
    border-radius: 0px;
    border: 2px solid white;
    margin-left: 50px;
  }
  @media (max-width: 1350px) {
    width: 400px;
    height: 400px;
    border-radius: 0px;
    border: 2px solid white;
    margin-left: 0px;
  }
  @media (max-width: 1040px) {
    width: 300px;
    margin-left: 0px;
  }

  @media (max-height: 844px) {
  }
`;

export const TestBox = styled.div`
  width: 100%;
  display: flex;
`;

export const TrainContainer = styled.div`
  &:hover {
    animation: ${floatingAnimation} 5s ease-in-out infinite;
  }
`;

export const WheelCircle = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-radius: 50px;
  margin-left: 70px;
  animation: ${rollingAnimation} 3s infinite;
  @media (max-width: 1900px) {
    margin-left: 100px;
  }
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const wheelCircleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TrainHeaderDiv = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1900px) {
    display: none;
  }
`;

export const TrainHeaderWheel = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-radius: 50px;
  animation: ${rollingAnimation} 3s;
  margin-right: 60px;
`;

export const SquareDiv = styled.div`
  width: 100px;
  height: 40px;
  border: 2px solid white;
`;

export const SquareMiniDiv = styled.div`
  width: 50px;
  height: 40px;
  border: 2px solid white;
  border-radius: 30px;
`;

export const TitleSpan = styled.span`
  font-size: 30px;
  color: white;
  font-weight: bolder;
`;

export const RoofConnectionDiv = styled.div`
  height: 30px;
  width: 20px;
  border: 3px solid white;
  border-top: none;
  border-bottom: none;
  @media (max-width: 1500px) {
  }
`;

export const RoofConnectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-left: 100px;
  @media (max-width: 1500px) {
    display: flex;
    margin-left: 50px;
  }

  @media (max-width: 1250px) {
    display: none;
  }
`;

export const Roof = styled.div`
  width: 400px;
  height: 50px;
  margin-left: 50px;
  border: 5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1500px) {
    width: 350px;
    margin-left: 25px;
  }
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const Cloud = styled.img`
  height: 100px;
  width: 100px;
`;

export const Sun = styled.img`
  width: 150px;
  height: 100px;
`;

export const MinCloud = styled.img`
  width: 150px;
  height: 150px;
`;

export const MovingContainer = styled.div`
  height: 20%;
  display: flex;
  width: 90%;
  justify-content: end;
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const MovingDIv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px 30px 30px 50px;
  border: 5px solid skyblue;
`;
