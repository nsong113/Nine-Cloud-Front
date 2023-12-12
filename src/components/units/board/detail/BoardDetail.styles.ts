import styled from 'styled-components';
import { LuPencil } from 'react-icons/lu';
import { BsChatSquareDotsFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ImgBoxDiv = styled.div`
  height: 396px;
  width: 443px;
  background-color: #ebebeb;
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
  color: #000;
  font-family: Pretendard;
  font-size: 28.466px;
  font-style: normal;
  font-weight: 400;
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
  width: 371.835px;
  height: 261.53px;
  flex-shrink: 0;
  border-radius: 9.785px;
  background: #d9d9d9;
`;

export const WriterImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloudImg = styled.img`
  width: 126.186px;
  height: 77.125px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
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
  color: #d9d9d9;
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
  width: 260px;
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
  width: 338.032px;
  color: #000;
  font-family: Inter;
  font-size: 16.012px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 209px;
  margin: 0px 20px;
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

export const PeopleImg = styled.img`
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
  width: 40px;
  height: 43.105px;
  margin-right: 20px;
  /* margin-left: 320px; */
`;

export const PencilBoxDiv = styled.div`
  width: 371px;
  display: flex;
  justify-content: end;
`;

export const ContentSpan = styled.span`
  color: #000;

  font-family: Inter;
  font-size: 16.012px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  color: black;
  width: 24.625px;
  height: 15.916px;
`;

export const CommentImg = styled(BsChatSquareDotsFill)`
  color: black;
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
`;

export const FooterBoxDiv = styled.div`
  display: flex;
`;

export const ToggleOffImg = styled(IoIosArrowUp)`
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
