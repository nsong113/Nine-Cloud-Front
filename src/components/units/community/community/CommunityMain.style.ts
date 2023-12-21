import { styled, css } from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/bg_community.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 1px solid transparent;
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
  /* background-color: #e8e8e8; */
  transform: translateY(-40px);
`;

export const MainSectionHeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  padding: 20px;
`;

export const MainFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainHeaderOn = styled.div`
  width: 110px;
  height: 50px;
  border-radius: 15px;
  background-color: #f6f6f6;
`;

export const MainProfileDiv = styled.div`
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainHeaderContent = styled.div`
  font-size: 13px;
  text-align: right;
  cursor: pointer;
`;

export const MainSlideBox = styled.div`
  width: 100%;
  height: 765px;
  border-radius: 50px 0 0 0;
  /* background-color: white; */
  transform: translateY(75px);
  padding: 10px;
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

export const ViewAllEachBoxDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 130px;
  margin-top: 20px;

  border-radius: 10px 2px;
  background: rgba(245, 242, 255, 0.3);

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(25px);
`;

export const ViewAllEachFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  gap: 10px;
`;

export const ViewAllIMGbox = styled.div`
  width: 106px;
  height: 106px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 13px;
`;
