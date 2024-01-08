import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
`;

export const Div = styled.div``;

export const MainTitleFlex = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainTodayEmoji = styled.div`
  width: 100px;
  height: 100px;
`;

export const ChatTitleSpan = styled.div`
  color: var(--Gray1, #3d3d3d);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-block;
`;

export const MainChatTitle = styled.div`
  width: 190px;
  height: 60px;
  color: var(--Gray1, #3d3d3d);
  font-size: 15px;
  font-weight: 400;
  transform: translateY(10px);
`;

export const MainHeader = styled.div`
  width: 100%;
  height: 120px;
`;

export const MainFlexBoxDiv = styled.div`
  width: 410px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const MainProfileFlexDiv = styled.div``;

export const MainSectionContainer = styled.div`
  width: 100%;
  height: 840px;
  border-radius: 50px 0 0 0;
  transform: translateY(-40px);
`;

export const MainSectionHeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  position: absolute;
  transform: translateY(40px);
  padding: 20px;
`;

export const MainLine = styled.div`
  width: 401px;
  height: 1px;
  margin: 0 auto;
  background: #391d93;
  z-index: 1000;
  transform: translateY(160px);
  margin-bottom: 10px;
`;

export const MainFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainHeaderOn = styled.div`
  width: 90%;
  height: 61px;
  border-radius: 20px 3px;
  background: var(--contents-box, #f5f2ff);
  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 2px 5px 0px rgba(80, 53, 166, 0.2),
    0px -2px 5px 0px rgba(80, 53, 166, 0.15);
  backdrop-filter: blur(15px);
  cursor: pointer;
`;

export const MainChattingRoomFlex = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainChattingContent = styled.div`
  color: var(--main, #391d93);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MainProfileDiv = styled.div`
  width: 30%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainSlideBox = styled.div`
  width: 100%;
  height: 765px;
  border-radius: 50px 0 0 0;
  transform: translateY(150px);
  overflow: hidden;
`;

export const MainSlideFlex = styled.div`
  width: 1000px;
  height: 50px;
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainEachSlideBox = styled.div`
  width: 90px;
  height: 30px;
  border-radius: 22px;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MainMapContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 5px auto;
  overflow: auto;
`;

export const ViewAllEachBoxDiv = styled(motion.div)`
  width: 95%;
  margin: 0 auto;
  height: 130px;
  margin-top: 20px;
  border-radius: 10px 2px;
  background: rgba(245, 242, 255, 0.3);
  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(25px);

  cursor: pointer;

  &:hover {
    transition: 0.2s;
    box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
      0px 4px 20px 0px rgba(80, 53, 166, 0.3);
  }
`;

export const ViewAllEachFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
`;

export const ViewAllIMGbox = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 10px 2px;
  border: 1px solid #cfc0ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewAllRightContentDiv = styled.div`
  width: 250px;
  height: 105px;
`;

export const ViewAllRightFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ViewAllDateDiv = styled.div`
  font-weight: 700;
`;

export const ViewAllPublicIMGDiv = styled.div``;

export const ViewAllEmojiIMGDiv = styled.div`
  text-align: left;
`;

export const ViewAllContentP = styled.p`
  margin-top: 10px;
  color: #9a9a9a;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 13px;
  transform: translateY(-20px);
`;
