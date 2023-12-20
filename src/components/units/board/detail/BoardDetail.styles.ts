import styled from 'styled-components';
import { LuPencil } from 'react-icons/lu';
import { BsChatSquareDotsFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
//
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    192deg,
    #ece9f5 -0.99%,
    #e8f5f3 51.07%,
    #fcf5f5 99.97%
  );
`;

export const ImgBoxDiv = styled.div`
  height: 396px;
  width: 443px;
  background-color: white;
  border-radius: 0 0 80px 0;
`;

export const MainImg = styled.img`
  width: 443px;
  height: 396px;
  border-radius: 0 0 80px 0;
`;

export const ContentsWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`;

export const ContentsHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleTextSpan = styled.span`
  color: #5035a6;

  font-family: Spoqa Han Sans Neo;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ContentBoxHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WriterSpan = styled.span`
  color: #000;

  font-family: Pretendard;
  font-size: 21.349px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContentsBoxDiv = styled.div`
  width: 380px;
  height: 281.582px;
  border-radius: 10px;
  border: 1px solid rgba(239, 170, 173, 0.7);

  background: rgba(255, 255, 255, 0.7);

  box-shadow: 0px 4px 2px 0px rgba(80, 53, 166, 0.2),
    0px 4px 20px 0px rgba(80, 53, 166, 0.1) inset;
  backdrop-filter: blur(15px);
`;

export const WriterImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloudImg = styled.img`
  width: 83.863px;
  height: 51.161px;
  flex-shrink: 0;
  margin-top: 10px;
`;
export const DrawingImg = styled.img`
  height: 4dvh;
`;

export const ContentsSpan = styled.span`
  color: #a4a4a4;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 40px 0 20px;
`;

export const ContentsFooterDiv = styled.div`
  width: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;

  border-bottom: 2px solid #5035a6;
`;

export const CategoryBoxDiv = styled.div`
  height: 50px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

export const HeartCommentTextSpan = styled.span`
  color: rgba(80, 53, 166, 1);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 10px;
`;

export const CommentsWrapperDiv = styled.div`
  height: 300px;
`;

export const CommentBox = styled.div`
  height: 250px;
  border-radius: 4px;
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CircleImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const CommentHeaderDiv = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
`;

export const CommentsBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DeepCircleImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
`;

export const CommentWriterSpan = styled.span`
  color: #f00;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentContent = styled.span`
  color: #505050;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const InputBoxDiv = styled.input`
  background-color: white;
  width: 350px;
  height: 47px;
  border-radius: 28px;
  margin-left: 10px;
`;

export const CommentFooterWrapDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  color: #fff;
  border-radius: 9px;
  background: #858585;
  width: 61px;
  height: 47px;
  flex-shrink: 0;
  margin-left: 20px;
  border: 0;
`;

export const WeatherImg = styled.img`
  width: 39.141px;
  height: 39.141px;
  flex-shrink: 0;
`;

export const ContentBoxDiv = styled.div`
  margin: 20px 20px;
`;

export const heartBoxDiv = styled.div`
  width: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ConentsHeaderRightDiv = styled.div`
  display: flex;
  justify-content: end;
`;

export const HeartCountSpan = styled.span`
  color: #d9d9d9;
  font-family: Pretendard;
  font-size: 30.245px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PeopleImg = styled(MdPeopleOutline)`
  width: 44.157px;
  height: 34.268px;
  flex-shrink: 0;
`;

export const HeartImg = styled.img`
  width: 35.582px;
  height: 31.135px;
  flex-shrink: 0;
  margin-left: 10px;
`;

export const PencilImg = styled(LuPencil)`
  width: 30px;
  height: 33.105px;
  margin-right: 10px;
  cursor: pointer;
  /* margin-left: 320px; */
`;

export const PencilBoxDiv = styled.div`
  width: 371px;
  display: flex;
  justify-content: end;
`;

export const ContentSpan = styled.span`
  color: rgba(43, 23, 107, 1);
  font-family: Spoqa Han Sans Neo;
  font-size: 18.012px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SentenceSpan = styled.span`
  color: var(--1, #5035a6);
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 15px;
`;

export const CommentBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const HeartBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentHeartImg = styled(AiFillHeart)`
  color: rgba(80, 53, 166, 1);
  width: 24.625px;
  height: 15.916px;
  cursor: pointer;
`;

export const CommentImg = styled(BsChatSquareDotsFill)`
  color: rgba(80, 53, 166, 1);
  width: 24.625px;
  height: 15.916px;
`;

export const DeletePostSpan = styled.span`
  color: #a4a4a4;

  font-family: Pretendard;
  font-size: 12.902px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 70px;
`;

export const ToggleOnImg = styled(IoIosArrowDown)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: rgba(80, 53, 166, 1);
`;

export const FooterBoxDiv = styled.div`
  display: flex;
`;

export const ToggleOffImg = styled(IoIosArrowUp)`
  color: rgba(80, 53, 166, 1);
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BackImg = styled(IoIosArrowBack)`
  width: 40px;
  height: 40px;
  margin: 30px;
  position: fixed;
  cursor: pointer;
`;

export const BlankCommentSpan = styled.span`
  color: #d4d4d4;
`;

export const BlankCommentBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonImg = styled(IoPersonOutline)`
  width: 44.157px;
  height: 34.268px;
  flex-shrink: 0;
`;

export const TrashCanImg = styled(FaRegTrashAlt)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BlankHeartImg = styled(AiOutlineHeart)`
  color: rgba(80, 53, 166, 1);
  width: 24.625px;
  height: 15.916px;
  cursor: pointer;
`;

export const WeatherImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const CommentWriterBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentWrapperDiv = styled.div``;
