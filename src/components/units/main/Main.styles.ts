import styled from 'styled-components';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoList } from 'react-icons/io5';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';

export const MainContainerDiv = styled.div`
  width: 443px;
  height: 100%;
`;

export const CalenContainerDiv = styled.div`
  width: 80%;
  height: 300px;
  margin: 60px auto;
`;

export const ShowCloudDivRed = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
`;

export const ShowCloudDivGreen = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
`;

export const ShowCloudDivBlue = styled.div`
  width: 20px;
  height: 20px;
  background-color: blue;
`;

export const ShowCloudDivBlack = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
`;

export const CalenderBackDiv = styled.div``;

export const CalendarContainerDiv = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 20px;
`;

export const CalenderPrevBtnDiv = styled.div`
  width: 20px;
  height: 20px;
  display: center;
  align-items: center;
  justify-content: center;
`;

export const CalenderHeaderDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

export const CalendarTable = styled.table`
  width: 100%;
  height: 400px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: blueviolet;
`;

export const TableBody = styled.tbody`
  height: 100px;
  border-radius: 20px;
  border: 1px black;
`;

export const TableRow = styled.tr`
  background-color: white;
`;

export const DayRoow = styled.tr`
  height: 100px;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;

  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

export const ThCell = styled.th`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: white;
`;

export const ImageWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageBoxDiv = styled.div`
  width: 200px;
  display: flex;
`;

export const ExpressionImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const CountBoxDiv = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
`;
export const CountSpan = styled.span`
  font-size: 20px;
  line-height: 70px;
  margin-right: 20px;
`;

export const DateBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: start;
  margin: 0px;
`;

export const HeaderLeftWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightProfile = styled.div`
  width: 130px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const YearTextSpan = styled.span`
  color: gray;
  font-weight: bolder;
`;

export const MonthTextSpan = styled.span`
  font-weight: bolder;
  font-size: 30px;
`;

export const AvatarSizeImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const ProfileToggleBoxDiv = styled.div`
  width: 200px;
  display: flex;
`;

export const FooterBoxDiv = styled.div`
  width: 100%;
  height: 98px;
  border-radius: 30px 30px 0 0;
  background-color: #d9d9d9;
  margin-top: 60px;
`;

export const LogoImg = styled.div`
  width: 177px;
  height: 60px;
  background-color: gray;
`;
////////////////////
////View All
export const ViewAllWrapperDiv = styled.div`
  width: 90%;
  height: 607px;
  margin: 5px auto;
  overflow: auto;
  background-color: aliceblue;
`;

export const ViewAllEachBoxDiv = styled.div`
  width: 100%;
  height: 130px;
  margin-top: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.4);
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

export const Calendar = styled(IoCalendarNumberOutline)`
  cursor: pointer;
`;

export const List = styled(IoList)`
  cursor: pointer;
`;

export const ButtonWrapperDiv = styled.div`
  margin-left: 50px;
`;

export const PrevMonth = styled(IoIosArrowDropleft)`
  cursor: pointer;
`;

export const NextMonth = styled(IoIosArrowDropright)`
  cursor: pointer;
`;

export const YearWrapperDIv = styled.div`
  display: flex;
  align-items: center;
`;
