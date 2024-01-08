import styled, { css, keyframes } from 'styled-components';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import {
  ActiveModal,
  CheckEdit,
  ValidationMessageProps,
} from './MyPageOverlay.types';
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

export const StyledHoverTapButton = styled(motion.button)`
  background: rgba(239, 170, 173, 0);
  display: flex;

  border: 0;
`;

export const ModalContentDiv = styled.div<ActiveModal>`
  width: 443px;
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0 50px 0 0;
  animation: ${(props) =>
    props.isActiveModal
      ? css`
          ${slideIn} 0.5s ease-in-out
        `
      : css`
          ${slideOut} 0.5s ease-in-out
        `};
`;

export const MainContainerDiv = styled.div`
  width: 443px;
  height: 100%;
`;

export const ImageBoxDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  justify-content: center;
`;

export const PicutureImg = styled.img<CheckEdit>`
  width: ${(props) => (props.isEdit ? '170px' : '200px')};
  height: ${(props) => (props.isEdit ? '170px' : '200px')};
  border-radius: 100px;
  border: 1px solid black;
  margin-top: ${(props) => (props.isEdit ? '0px' : '30px')};
`;
export const HiddenInput = styled.input`
  display: none;
`;

export const ImageButton = styled.button`
  color: var(--sub, #8066d1);
  font-size: 18px;
  font-weight: 700;
  line-height: 29px;
  border-radius: 2px 10px;
  border: 2px solid var(--sub, #8066d1);
  cursor: pointer;
  margin-top: 10px;
`;

export const ImagePlustButtonBox = styled.div``;

export const ImgBoxDiv = styled.div`
  height: 400px;
  background-color: gray;
  border-radius: 0 0 80px 0;
  position: fixed;
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
  align-items: center;
`;

export const ButtonWrapperDiv = styled.div``;

export const ContentsBoxDIv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NicknameInput = styled.input`
  border: 1px solid black;
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

export const EditButton = styled.button`
  width: 105px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px 2px;
  border: 2px solid var(--sub, #8066d1);
  color: var(--sub, #8066d1);
  font-size: 18px;
  font-weight: 700;
  line-height: 29px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #391d93;
    color: #fff;
    scale: 110%;
  }
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
  margin-left: 10px;
  margin-top: 10px;
  &:hover {
    color: var(--Gray2, #929292);
    font-size: 15px;
    font-weight: 400;
    line-height: 29px;
    border-bottom: 1px solid gray;
  }
`;

export const ButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CancelImg = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin: 20px;
  cursor: pointer;
`;

export const CancelImgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  position: fixed;
`;

export const UploadBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PictureDeleteSpan = styled.span`
  color: var(--Gray3, #bbb);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  cursor: pointer;
`;

export const UsernameSpan = styled.span`
  color: var(--main, #391d93);
  font-family: Spoqa Han Sans Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export const NewNameWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameInput = styled.input`
  width: 403px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 2px 10px;
  background: var(--contents-box, #f5f2ff);
  border: 0px;
  padding-left: 20px;
`;

export const ChangePasswordSpan = styled.span`
  color: var(--Gray3, #bbb);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 29px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  width: 146px;
  height: 60px;
  flex-shrink: 0;
  color: #5035a6;
  background-color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  border-radius: 5px 20px;
  border: 1px solid #ece9f5;
  cursor: pointer;
  background: #fff;
  &:hover {
    background-color: #391d93;
    color: #fff;
    scale: 110%;
  }
`;

export const SubmitButton = styled.button`
  width: 242px;
  height: 60px;
  flex-shrink: 0;
  color: #5035a6;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px 20px;
  border: 1px solid #ece9f5;
  background: #ece9f5;
  margin-left: 20px;
  &:hover {
    background-color: #391d93;
    color: #fff;
  }
`;

export const PasswordTitleSpan = styled.span`
  color: var(--main, #391d93);
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
`;

export const PasswordWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PasswordSpan = styled.span`
  color: var(--main, #391d93);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin-top: 10px;
`;

export const PasswordInput = styled.input`
  width: 403px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 2px 10px;
  background: var(--contents-box, #f5f2ff);
`;

export const PasswordContainerDiv = styled.div`
  width: 100%;
  top: 70%;
`;

export const PasswordConfirmDiv = styled.div`
  margin-top: 30px;
`;

export const ValidationMessage = styled.div<ValidationMessageProps>`
  font-size: 14px;
  height: 14px;
  margin-top: 5px;
  color: ${(props) => (props.isError ? 'red' : 'blue')};
`;

export const ProfileTitleSpan = styled.span`
  color: var(--main, #391d93);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;

export const ButtonDiv = styled.div`
  margin-top: 15px;
`;
