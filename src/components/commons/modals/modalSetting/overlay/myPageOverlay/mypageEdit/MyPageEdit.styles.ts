import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CheckEdit } from './MyPageEdit.types';

export const ProfileTitleSpan = styled.span`
  color: var(--main, #391d93);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;

export const HeaderWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const ContentsBoxDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

export const ProfileImg = styled.img`
  width: 162px;
  height: 162px;
  border-radius: 159px;
  border: 1px solid black;

`;



export const ImagePlustButtonBox = styled.div``;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHoverTapButton = styled(motion.button)`
  background: rgba(239, 170, 173, 0);
  display: flex;

  border: 0;
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
  width: 144px;
  height: 35px;
  background-color: white;
`;

export const ContentsBoxDIv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameBoxDiv = styled.div``;

export const NewNameWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UsernameSpan = styled.span`
  color: var(--main, #391d93);
  font-family: Spoqa Han Sans Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export const NameInput = styled.input`
  width: 403px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 2px 10px;
  background: var(--contents-box, #f5f2ff);
  border: 0px;
  padding-left: 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: var(--main, #391d93);
`;

export const ButtonWrapperDiv = styled.div``;

export const ButtonDiv = styled.div`
  margin-top: 15px;
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
    border: 2px solid #5035a6;
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
  border-radius: 20px 5px;
  border: 1px solid #ece9f5;
  background: #ece9f5;
  margin-left: 20px;
  &:hover {
    background-color: #391d93;
    color: #fff;
  }
`;
