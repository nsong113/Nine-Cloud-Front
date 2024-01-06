import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, white 50%, #391d93 50%);
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Header = styled.div`
  height: 10.5%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const ButtonLeftArrow = styled.span`
  color: #391d93;
  font-size: 60px;
  cursor: pointer;
  margin-top: 1.5rem;
`;

export const ButtonRightContent = styled.span`
  color: #929292;
  font-size: 22px;
  margin-left: 10px;
  margin-top: 1.5rem;
`;

export const ImgRandom = styled.img`
  width: 74px;
  height: 74px;
  margin-top: 20px;
  margin-right: 30px;
`;
