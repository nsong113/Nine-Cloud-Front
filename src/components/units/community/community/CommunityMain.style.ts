import { styled, css } from 'styled-components';

interface MainSlideFlexProps {
  $offset?: number;
  $isDragging?: boolean;
  $currentIndex: number;
  $transX: number;
}

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
  /* align-items: center; */
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
export const MainSlideFlex = styled.div<MainSlideFlexProps>`
  width: 1000px;
  height: 50px;
  background-color: aqua;
  display: flex;

  overflow-x: scroll;
  transform: translateX(
    -${(props) => props.$currentIndex}*1000+${(props) => props.$transX}px
  );

  //${(props) => props.$buttonSty.height};
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
