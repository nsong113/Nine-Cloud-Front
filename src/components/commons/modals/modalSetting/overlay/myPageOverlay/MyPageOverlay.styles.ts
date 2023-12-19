import styled, { keyframes } from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

export const MainContainerDiv = styled.div`
  width: 443px;
  height: 100%;
`;

export const ImageBoxDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const PicutureImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImageButton = styled.button``;

export const ImagePlustButtonBox = styled.div``;

export const ImgBoxDiv = styled.div`
  height: 400px;
  background-color: gray;
  border-radius: 0 0 80px 0;
  position: fixed;
`;

export const slideIn = keyframes`
  from {
    transform: translateY(100%)
  }
  to {
    transform: translateY(0) 
  }
`;

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: end;
`;

export const ModalContentDiv = styled.div`
  width: 443px;
  height: 40%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 50px 50px 0 0;
  animation: ${slideIn} 0.5s ease-in-out;
`;

export const ContentsBoxDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
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
  width: 100px;
  height: 100px;
  margin-right: 40px;
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

export const ContentsWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapperDiv = styled.div`
  margin-top: 100px;
`;

export const ContentsBoxDIv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NicknameInput = styled.input`
  border: 1px solid black;
`;

export const NameBoxDiv = styled.div`
  margin-top: 20px;
`;

export const MyinfoBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
