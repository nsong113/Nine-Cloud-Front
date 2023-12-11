import styled from 'styled-components';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoList } from 'react-icons/io5';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';
import { motion } from 'framer-motion';
import { IDateSpanProps, ITableCellProps } from './Main.types';
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

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

export const HeaderContainerDiv = styled.div`
  height: 170px;
  border-radius: 0px 0px 50px 50px;
  background: rgba(239, 170, 173, 0.2);
  /* box-shadow: 0px 20px 10px 0px rgba(80, 53, 166, 0.25); */
`;

export const LogoBoxDiv = styled.div`
  display: flex;
  margin: 25px 0px 0px 27px;
`;

export const BrandTextBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #5035a6;
  font-family: Spoqa Han Sans Neo;
  font-size: 16.394px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.984px;
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
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

export const CalendarTable = styled.table`
  width: 403px;
  height: 400px;
  margin-left: 20px;
`;

export const TableHead = styled.thead`
  background-color: blueviolet;
`;

export const TableBody = styled.tbody`
  width: 403px;
  height: 563px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 0px;
  background: linear-gradient(
    192deg,
    rgba(80, 53, 166, 0.1) 0%,
    rgba(239, 170, 173, 0.1) 83.3%
  );

  box-shadow: 0px 4px 15px 0px rgba(80, 53, 166, 0.25);
  backdrop-filter: blur(2px);
`;

export const TableRow = styled.tr`
  background-color: white;
  margin-top: 19px;
  margin-bottom: 10px;
`;

export const DayRoow = styled.tr`
  height: 100px;
`;

export const TableCell = styled.td<ITableCellProps>`
  width: 56px;
  height: 103px;
  border: ${({ isToday }) =>
    isToday ? '5px solid #4CAF50' : '0.5px solid #ddd'};
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  border-radius: 10px;
`;

export const DayWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThCell = styled.th`
  color: #5035a6;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  margin: 20px 0px 20px 0px;
  height: 40px;
`;

export const ImageWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageBoxDiv = styled.div`
  width: 200px;
  display: flex;
  margin-top: 19px;
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
  color: #000;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  margin-right: 18px;
`;

export const DateBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: start;
  margin-top: 20.48px;
`;

export const HeaderLeftWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightProfile = styled.div`
  margin-left: 130px;
  width: 130px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const YearTextSpan = styled.span`
  color: #5035a6;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 45px;
`;

export const MonthTextSpan = styled.span`
  color: #5035a6;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AvatarSizeImg = styled.img`
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 159px;
  border: 1px solid #fff;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
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

export const LogoImg = styled.img`
  width: 77.25px;
  height: 45.516px;
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
  width: 40px;
  height: 40px;
`;

export const List = styled(IoList)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

export const ButtonWrapperDiv = styled.div`
  margin-top: 32px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevMonth = styled(IoIosArrowBack)`
  cursor: pointer;
  color: #5035a6;
`;

export const NextMonth = styled(MdOutlineArrowForwardIos)`
  cursor: pointer;
  color: #5035a6;
`;

export const YearWrapperDIv = styled.div`
  display: flex;
  align-items: center;
`;

export const DateWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DateSpan = styled.span<IDateSpanProps>`
  color: ${({ isToday }) => (isToday ? 'black' : 'inherit')};
  background-color: ${({ isToday }) => (isToday ? '#ff4bb7' : 'inherit')};
  border-radius: 50px;
  width: 22px;
  height: 22px;
  margin: 10px 0px;
  font-weight: 700;
  line-height: 22px;
`;

export const DateImg = styled.img`
  width: 46px;
  height: 46px;
`;

export const StyledHoverTapButton = styled(motion.button)`
  background: rgba(239, 170, 173, 0);

  border: 0;
`;

export const LeftRightAnimeButton = styled(motion.div)`
  opacity: 0;
  transition: opacity 0.35s ease-out, x 0.35s ease-out;
`;

export const PrevNextMonthBoxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
`;

export const ProfileBoxDiv = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 159px;
  border: 1px solid #fff;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const dayWrapperDiv = styled.div`
  display: flex;
  width: 443px;
`;
