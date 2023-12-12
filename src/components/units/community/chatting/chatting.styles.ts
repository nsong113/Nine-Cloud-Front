import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MoveToPrevImg = styled(IoIosArrowBack)`
  width: 40px;
  height: 40px;
  color: black;
`;

export const HeaderContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 443px;
  height: 100px;
  background-color: #d9d9d9;
`;

export const HeaderRightDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterDiv = styled.div`
  width: 443px;
  height: 100px;
  border-radius: 15px 15px 0px 0px;
  background: #d9d9d9;
`;

export const CommentInput = styled.input`
  width: 360px;
  height: 43px;
  border: 0px;
  margin-left: 20px;
`;

export const InputBoxDiv = styled.div`
  width: 440px;
  height: 48px;
  border-radius: 59px;
  background: #fff;
  border: 1px solid black;
`;

export const SubmitButton = styled.button`
  width: 54px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #d9d9d9;
`;
