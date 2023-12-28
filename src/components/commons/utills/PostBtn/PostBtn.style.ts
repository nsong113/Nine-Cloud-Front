import { styled } from 'styled-components';

export const ButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;

export const PrevButton = styled.button`
  width: 30%;
  height: 60px;
  outline: none;
  cursor: pointer;
  border-radius: 5px 20px;
  border: 1px solid var(--1-1, #ece9f5);
  background: #fff;
  color: var(--1, #5035a6);
  font-size: 20px;
  font-weight: 500;

  &:hover {
    border-radius: 5px 20px;
    border: 2px solid #5035a6;

    background: #fff;
    transition: 0.3s;
  }
`;

export const NextButton = styled.button`
  width: 60%;
  height: 60px;
  outline: none;
  cursor: pointer;

  border-radius: 5px 20px;
  border: 1px solid var(--1-1, #ece9f5);
  background: var(--1-1, #ece9f5);
  color: var(--1, #5035a6);
  font-size: 20px;
  font-weight: 500;

  &:hover {
    border-radius: 5px 20px;
    background: #5035a6;
    color: white;
    transition: 0.3s;
  }
`;
