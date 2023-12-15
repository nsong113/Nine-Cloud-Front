import { styled, css } from 'styled-components';

// interface MainSlideFlexProps {
//   $offset?: number;
//   $isDragging?: boolean;
//   $currentIndex: number;
//   $transX: number;
// }

export const MainContainer = styled.div`
  width: 100%;
  height: 960px;
`;

export const MainHeader = styled.div`
  width: 100%;
  height: 160px;
  background-color: white;
`;

export const MainSectionContainer = styled.div`
  width: 100%;
  height: 840px;
  border-radius: 50px 0 0 0;
  background-color: #e8e8e8;
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
  background-color: white;
  transform: translateY(75px);
  padding: 10px;
  overflow: hidden;
`;
// export const MainSlideFlex = styled.div<MainSlideFlexProps>`
export const MainSlideFlex = styled.div`
  width: 1000px;
  height: 50px;
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
`;
/* transform: translateX(
    -${(props) => props.$currentIndex}*1000+${(props) => props.$transX}px
  ); */

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
  width: 100%;
  height: 80%;
  background-color: beige;
`;

export const ViewAllEachBoxDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 130px;
  margin-top: 20px;
  border-radius: 10px;
  /* border: 2px solid var(--glassmorphism-line, rgba(80, 53, 166, 0.77)); */

  /* background: linear-gradient(
    209deg,
    rgba(236, 233, 245, 0.3) 0%,
    rgba(232, 245, 243, 0.3) 48.96%,
    rgba(252, 245, 245, 0.3) 100%
  ); */

  background: radial-gradient(
        circle at 100% 100%,
        #ffffff 0,
        #ffffff 3px,
        transparent 3px
      )
      0% 0%/8px 8px no-repeat,
    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px)
      100% 0%/8px 8px no-repeat,
    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px)
      0% 100%/8px 8px no-repeat,
    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100%
      100%/8px 8px no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 10px)
      calc(100% - 16px) no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 16px)
      calc(100% - 10px) no-repeat,
    conic-gradient(
      rgba(255, 255, 255, 0.5) 3%,
      rgba(80, 53, 166, 0.77) 40%,
      rgba(80, 53, 166, 0.2) 60%,
      rgba(80, 53, 166, 0.2) 65%,
      rgba(80, 53, 166, 0.77) 84%,
      rgba(255, 255, 255, 0.5) 100%
    );
  border-radius: 8px;
  padding: 9px;
  box-sizing: border-box;

  box-shadow: 0px 4px 2px 0px rgba(80, 53, 166, 0.2),
    0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(15px);
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
  width: 250;
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
  /* white-space: nowrap; */
  text-align: left;
  font-size: 13px;
`;
