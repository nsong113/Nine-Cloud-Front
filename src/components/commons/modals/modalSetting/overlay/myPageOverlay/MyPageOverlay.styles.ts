import styled, { keyframes } from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

export const MainContainerDiv = styled.div`
  width: 443px;
  height: 100%;
`;

export const slideIn = keyframes`
  from {
    transform: translateY(100%) translate(-50%, -50%);
  }
  to {
    transform: translateY(0) translate(-50%, -50%);
  }
`;

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 923px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: end;
  animation: ${slideIn} 0.5s ease-in-out;
`;

export const ModalContentDiv = styled.div`
  width: 443px;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 50px 50px 0 0;
  justify-content: space-around;
`;

export const ContentsBoxDiv = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
`;
export const TtitleTextSpan = styled.span`
  color: #000;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

export const CatergoryImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxDiv = styled.div`
  width: 20rem;
  height: 2.5rem;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxButton = styled.div`
  width: 20rem;
  height: 5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextStyleSpan = styled.span`
  color: white;
`;

export const StyleButton = styled.button`
  margin-left: 20px;
`;

export const MoveToPageImg = styled(IoIosArrowForward)`
  cursor: pointer;
  margin-left: 150px;
`;
