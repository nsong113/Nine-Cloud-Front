import styled from 'styled-components';

export const InputArea = styled.div`
  background-color: #8066d1;
  height: 10%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  height: 63px;
  background-color: white;
  border-radius: 5px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const Input = styled.input`
  color: black;
  width: 80%;
  border: none;
  border-radius: 5px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  margin-right: 10px;
  min-width: 70px;
  width: 80px;
  height: 50px;
  border-radius: 12px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #8066d1;
  border: none;
  font-size: 17px;
  font-weight: 600;
  color: white;
  &:active {
    background-color: #926fff;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.1); /* 버튼 안으로 그림자 효과 추가 */
    transform: translateY(1px); /* 버튼을 아래로 1px 이동시킴 */
  }
  &:hover {
    cursor: pointer;
  }
`;
