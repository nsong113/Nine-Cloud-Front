import styled from 'styled-components';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { IComment } from '../BoardDetail.types';
import { BsHeartFill } from '@react-icons/all-files/bs/BsHeartFill';
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';

export const CategoryBoxDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const GrayToggleImg = styled(IoIosArrowDown)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #bbbbbb;
`;

export const GrayToggleOffImg = styled(IoIosArrowUp)`
  color: #bbbbbb;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const CommentsBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ChatBoxDiv = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const PurpleChatImg = styled.img`
  width: 22.546px;
  height: 14.684px;
`;

export const HeartCommentTextSpan = styled.span<IComment>`
  color: ${(props) => (props.public ? 'rgba(80, 53, 166, 1)' : '#BBBBBB')};
  font-family: Pretendard;
  font-size: 16.677px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const ToggleOnImg = styled(IoIosArrowDown)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: rgba(80, 53, 166, 1);
`;

export const ToggleOffImg = styled(IoIosArrowUp)`
  color: rgba(80, 53, 166, 1);
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const GrayChatImg = styled.img`
  width: 22.546px;
  height: 14.684px;
`;

export const HeartBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const HeartWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CommentHeartImg = styled(BsHeartFill)`
  color: rgba(80, 53, 166, 1);
  width: 18.625px;
  height: 15.916px;
  cursor: pointer;
`;

export const BlankHeartImg = styled(AiOutlineHeart)`
  color: rgba(80, 53, 166, 1);
  width: 18.625px;
  height: 18.916px;
  cursor: pointer;
`;

export const PurpleHeartCountSpan = styled.span`
  color: var(--sub, #8066d1);
  font-family: Spoqa Han Sans Neo;
  font-size: 16.867px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const GrayHeartCountSpan = styled.span`
  color: #bbbbbb;
  font-family: Spoqa Han Sans Neo;
  font-size: 16.867px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;