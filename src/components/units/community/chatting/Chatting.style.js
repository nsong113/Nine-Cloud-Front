import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/background.png');
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  height: 115px;
  background: #5035a6;
  border-radius: 0px 0px 50px 50px;
  font-family: 'Arial', sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoBoxDiv = styled.div`
  display: flex;
  margin: 25px 0px 0px 27px;
`;

export const LogoImg = styled.img`
  width: 77.25px;
  height: 45.516px;
`;

export const BrandTextBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #a294cd;
  font-family: Spoqa Han Sans Neo;
  font-size: 16.394px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.984px;
`;

export const DivDiv = styled.div`
  display: flex;
  margin: 20px;
`;

export const ChatTitle = styled.div`
  color: #fff;
  font-family: Spoqa Han Sans Neo;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

