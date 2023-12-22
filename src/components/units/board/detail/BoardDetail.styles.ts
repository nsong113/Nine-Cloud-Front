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
import { IComment } from './BoardDetail.types';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 430px;
  margin-bottom: 30px;
  margin-top: 10px;
  margin-top: 40px;
`;

export const ImgBoxDiv = styled.div`
  height: 396px;
  width: 443px;
  background-color: white;
  border-radius: 0 0 80px 0;
  flex-shrink: 0;
  border-radius: 30px 0px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(57, 29, 147, 0.1),
    0px -2px 10px 0px rgba(57, 29, 147, 0.1);
`;

export const HearderRightBoxDiv = styled.div`
  display: flex;
  align-items: center;
  margin
`;

export const MainImg = styled.img`
  width: 380px;
  height: 380px;
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
  color: var(--main, #391d93);
  text-align: right;
  font-family: Spoqa Han Sans Neo;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
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

export const PencilsBoxDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ContentsBoxDiv = styled.div`
  width: 404px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 20px 2px;
  background: rgba(245, 242, 255, 0.5);

  box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.5) inset,
    0px 2px 5px 0px rgba(80, 53, 166, 0.1);
  backdrop-filter: blur(15px);
`;

export const WriterImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloudImg = styled.img`
  width: 74px;
  height: 101px;
  margin-top: 12px;
  margin-left: 30px;
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
  align-items: center;
  justify-content: space-between;
`;

export const HeartCommentTextSpan = styled.span<IComment>`
  color: ${(props) => (props.public ? 'rgba(80, 53, 166, 1)' : '#BBBBBB')};
  font-family: Pretendard;
  font-size: 16.867px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CommentsWrapperDiv = styled.div`
  height: 300px;
`;

export const CommentBox = styled.div`
  width: 403px;
  height: 167px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(245, 242, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
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

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  border-radius: 100px;
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
  width: 403px;
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
  margin: 0px 18px 30px 18px;
`;

export const heartBoxDiv = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const MindStatusSpan = styled.span`
  width: 77px;
  height: 30px;
  flex-shrink: 0;
  color: var(--main, #391d93);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

export const StatusBoxDiv = styled.div`
  margin-top: 7px;
  border-radius: 10px 2px;
  border: 1px solid var(--line, #cfc0ff);
  box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.5) inset;
  backdrop-filter: blur(15px);
  width: 77px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryText = styled.span`
  color: var(--sub, #8066d1);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  margin-right: 12px;
`;

export const ConentsHeaderRightDiv = styled.div`
  display: flex;
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

export const PencilImg = styled.img`
  width: 25px;
  height: 24px;
  margin-top: 6px;
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
  color: var(--sub, #8066d1);
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 15px;
`;

export const CommentBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  overflow: scroll;
`;

export const HeartBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentHeartImg = styled(AiFillHeart)`
  color: rgba(80, 53, 166, 1);
  width: 35.625px;
  height: 20.916px;
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

export const GrayToggleImg = styled(IoIosArrowDown)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #bbbbbb;
`;

export const ToggleOnImg = styled(IoIosArrowDown)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #bbbbbb;
`;

export const FooterBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleOffImg = styled(IoIosArrowUp)`
  color: rgba(80, 53, 166, 1);
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const GrayToggleOffImg = styled(IoIosArrowUp)`
  color: #bbbbbb;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BackImg = styled(IoIosArrowBack)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  fill: var(--main, #391d93);
  stroke-width: 3px;
  stroke: var(--main, #391d93);
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

export const PurpleChatImg = styled.img`
  width: 22.546px;
  height: 14.684px;
`;

export const PurpleHeart = styled.img`
  width: 18.455px;
  height: 17.301px;
`;

export const GrayChatImg = styled.img`
  width: 22.546px;
  height: 14.684px;
`;

export const GrayChatBoxDiv = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const HeartWrapperDiv = styled.div`
  margin-top: 6px;
`;
