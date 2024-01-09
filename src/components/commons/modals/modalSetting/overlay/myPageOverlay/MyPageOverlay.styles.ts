import styled, { css, keyframes } from 'styled-components';
import { ActiveModal } from './MyPageOverlay.types';
import { motion } from 'framer-motion';

export const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
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

export const ModalContentDiv = styled.div<ActiveModal>`
  width: 443px;
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0px 50px 0 0;
  animation: ${(props) =>
    props.isActiveModal
      ? css`
          ${slideIn} 0.5s ease-in-out
        `
      : css`
          ${slideOut} 0.5s ease-in-out
        `};
`;

export const CancelImgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  position: fixed;
`;

export const CancelImg = styled.img`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  margin: 20px;
  cursor: pointer;
`;

export const StyledHoverTapButton = styled(motion.button)`
  background: rgba(239, 170, 173, 0);
  display: flex;

  border: 0;
`;

export const ContentsBoxDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const ContentsWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageBoxDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  justify-content: center;
`;

export const PicutureImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 159px;
  border: 1px solid black;
  margin-top: 50px;
`;

export const ContentsBoxDIv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameBoxDiv = styled.div``;

export const MyinfoBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const NicknameSpan = styled.span`
  color: var(--main, #391d93);
  font-size: 30px;
  font-weight: 700;
`;

export const EmailSpan = styled.span`
  color: var(--Gray2, #929292);
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditButton = styled.button`
  line-height: 30px;
  width: 105px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px 2px;
  border: 2px solid var(--sub, #8066d1);
  color: var(--sub, #8066d1);
  font-size: 18px;
  font-weight: 700;
  line-height: 29px;
  margin-left: 10px;
  margin-top: 20px;
  background-color: white;
  cursor: pointer;
  &:active {
    background-color: #391d93;
    color: #fff;
  }
`;

export const SignButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignText = styled.div`
  width: 56px;
  height: 22px;
  flex-shrink: 0;
  color: var(--Gray3, #bbb);
  font-size: 15px;
  font-weight: 400;
  line-height: 29px;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 10px;
  &:hover {
    color: var(--Gray2, #929292);
    font-size: 15px;
    font-weight: 400;
    line-height: 29px;
    border-bottom: 1px solid gray;
  }
`;
