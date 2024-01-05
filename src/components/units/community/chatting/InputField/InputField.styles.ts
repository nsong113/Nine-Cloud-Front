import styled from 'styled-components';

export const InputArea = styled.div`
  background-color: #391d93;
  height: 12.5%;
  min-height: 50px;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 63px;
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const Input = styled.input`
  color: black;
  width: 80%;

  border: none;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  min-width: 70px;
  border-radius: 10px;
  background-color: #926fff;
  border: none;
  color: black;
  &:active {
    background-color: #926fff;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.1); /* 버튼 안으로 그림자 효과 추가 */
    transform: translateY(1px); /* 버튼을 아래로 1px 이동시킴 */
  }
  &:hover {
    cursor: pointer;
  }
`;
