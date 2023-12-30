import styled from 'styled-components';

export const InputArea = styled.div`
  background-color: #ece9f5;
  min-height: 50px;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Input = styled.input`
  color: blue;
  width: 100%;
  border-radius: 20px;
`;

export const SendButton = styled.button`
  min-width: 70px;
  border-radius: 20px;
  background-color: #66ccff;
  border: none;
  color: black;
  &:active {
    background-color: #66ccff;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.1); /* 버튼 안으로 그림자 효과 추가 */
    transform: translateY(1px); /* 버튼을 아래로 1px 이동시킴 */
  }
  &:hover {
    cursor: pointer;
  }
`;

