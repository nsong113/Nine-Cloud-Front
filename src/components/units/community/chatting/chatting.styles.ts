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
  color: white;
`;

export const HeaderContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 443px;
  height: 100px;
  background-color: #d9d9d9;
  align-items: center;
  border-radius: 20px;
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

export const RommNameSpan = styled.span`
  color: #000;

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
`;

export const HeaderWrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PeopleImg = styled.img`
  width: 49.64px;
  height: 38.525px;
  flex-shrink: 0;
`;

export const ContentsBodyWrapperDiv = styled.div`
  width: 442px;
  height: 820px;
`;

export const CircleImg = styled.img`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
`;

export const WriterWrapperDiv = styled.div`
  display: flex;
`;

export const WriterBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WriterSpan = styled.span`
  color: #f00;

  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
