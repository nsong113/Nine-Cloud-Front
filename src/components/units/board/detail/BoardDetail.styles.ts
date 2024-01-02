import styled from 'styled-components';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';


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

export const HeaderLeftBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackImg = styled(IoIosArrowBack)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  fill: var(--main, #391d93);
  stroke-width: 3px;
  stroke: var(--main, #391d93);
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

export const HearderRightBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PublicPrivateImg = styled.img`
  z-index: 100;
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

export const MainImg = styled.img`
  height: 396px;
  width: 443px;
  background-color: white;
  border-radius: 0 0 40px 0;
`;