import styled from 'styled-components';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoList } from 'react-icons/io5';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';
import { motion } from 'framer-motion';
import {
  IDateSpanProps,
  ITableCellProps,
} from '../../../units/main/Main.types';
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export const MainContainerDiv = styled.div`
  width: 100%;
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
  width: 100%;
  height: 115px;
  flex-shrink: 0;
  border-radius: 0px 0px 40px 0px;
  background: #391d93;
  box-shadow: 0px 4px 4px 0px rgba(57, 29, 147, 0.2);
`;

export const LogoBoxDiv = styled.div`
  width: 100%;
  display: flex;
  margin: 35px 0px 0px 27px;
  align-items: center;
  justify-content: space-between;
`;

export const BrandTextBoxDiv = styled.div`
  color: #d9cdfc;

  font-family: Spoqa Han Sans Neo;
  font-size: 20.394px;
  font-style: normal;
  font-weight: 500;
  /* line-height: 0%; 0px */
  letter-spacing: -1.224px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 5px;
  margin-top: 5px;
`;

export const LogoText = styled.span`
  margin: 0px;
  line-height: 15px;
  font-size: 20.394px;
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
  margin-top: 50px;
`;

export const Test = styled.div`
  background-color: white;
`;

export const TableHead = styled.thead`
  background-color: transparent;
`;

export const TableBody = styled.tbody`
  width: 401px;
  height: 500px;
  background: rgba(248, 245, 255, 0.5);

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  opacity: 0.8;
  border: 5px solid rgba(80, 53, 166, 0.77);
`;

export const TableRow = styled.tr`
  background-color: transparent; /* 배경색 없애기 */
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const DayRoow = styled.tr`
  height: 100px;
`;

export const TableCell = styled.td<ITableCellProps>`
  width: 56px;
  height: 63px;

  cursor: pointer;
  &:hover {
    background-color: #926fff;
  }
  /* opacity: 0.7; */

  background: rgba(255, 255, 255, 0.5);
  /* border: 1px solid #cfc0ff; */

  box-shadow: 0px 4px 2px 0px rgba(80, 53, 166, 0.2),
    0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2);
  backdrop-filter: blur(15px);
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
  height: 50px;
  background-color: transparent;
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
  width: 100px;
  align-items: start;
  margin-top: 20.48px;
  height: 100px;
`;

export const HeaderLeftWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
`;

export const RightProfile = styled.div`
  margin-left: 130px;
  width: 130px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  align-items: center;
`;

export const MonthNumberSpan = styled.span`
  color: #391d93;

  font-family: Spoqa Han Sans Neo;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const YearTextSpan = styled.span`
  color: #a294cd;

  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 10px;
`;

export const MonthTextSpan = styled.span`
  color: #a294cd;

  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AvatarSizeImg = styled.img`
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 159px;
  border: 1px solid white;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;

  &:hover {
    border: 3px solid white;
  }
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
  width: 200.25px;
  height: 50.516px;
  margin-bottom: 10px;
  cursor: pointer;
`;
////////////////////
////View All
export const LargeContainer = styled.div`
  width: 100%;
  height: 85vh;
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ViewAllWrapperDiv = styled.div`
  width: 90%;
  height: 607px;
  margin: 5px auto;
  overflow: auto;
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

export const Calendar = styled(IoCalendarNumberOutline)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  &:hover {
    color: white;
  }
`;

export const List = styled(IoList)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #391d93;
  &:hover {
    color: white;
  }
`;

export const ButtonWrapperDiv = styled.div`
  margin-left: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevMonth = styled(IoIosArrowBack)`
  cursor: pointer;
  color: #a294cd;
`;

export const NextMonth = styled(MdOutlineArrowForwardIos)`
  cursor: pointer;
  color: #a294cd;
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
export const YearMonthChangeBoxDiv = styled.div`
  display: flex;
  margin-left: 14px;
  align-items: center;
`;

export const PrevNextMonthBoxDiv = styled.div`
  display: flex;
  align-items: start;
  margin-top: 10px;

  flex-direction: column;
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

export const NextMonthBoxDiv = styled.div`
  width: 100px;
`;
