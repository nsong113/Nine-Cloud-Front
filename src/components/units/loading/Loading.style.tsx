import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  margin-left: 10px;
  font-size: 20px;
`;

export const ImgGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;

export const ImgStyle = styled.img`
  width: 100px;
  height: 80px;
  animation: ${bounce} 1s infinite;
`;

export const ImgStyle1 = styled(ImgStyle)``;

export const ImgStyle2 = styled(ImgStyle)`
  animation-delay: 0.2s;
`;

export const ImgStyle3 = styled(ImgStyle)`
  animation-delay: 0.4s;
`;
