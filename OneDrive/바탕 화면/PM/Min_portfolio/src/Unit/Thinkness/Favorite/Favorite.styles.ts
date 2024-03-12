import styled from 'styled-components';

export const container = styled.div`
  padding: 10px 15px 10px 50px;
  @media (max-width: 1100px) {
    padding: 0px;
  }
`;

export const Number = styled.span`
  font-size: 20px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
`;

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 31px;
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ThirdDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Contents = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChangeBtn = styled.button`
  background-color: white;
  color: black;
`;

export const DurationDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1210px) {
    display: none;
  }
`;
