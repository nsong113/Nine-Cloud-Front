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
  width: 100%;
`;

export const CalenContainerDiv = styled.div`
  width: 80%;
  height: 500px;
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
  height: 100%;
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
`;

export const DayRoow = styled.tr`
  height: 100px;
`;

export const TableCell = styled.td<ITableCellProps>`
  width: 56px;
  height: 53px;

  cursor: pointer;
  &:hover {
    background-color: #926fff;
  }

  background: rgba(255, 255, 255, 0.5);

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
  align-items: center;
  height: 60px;
`;

export const HeaderLeftWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
`;

export const HeaderWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const RightProfile = styled.div`
  margin-top: 20px;
  width: 130px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ViewAllRightProfile = styled.div`
  width: 130px;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #391d93;
  margin-right: 35px;
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
  border: 1px solid #fff;
  margin-right: 50px;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;

  &:hover {
    border: 3px solid red;
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
  width: 77.25px;
  height: 45.516px;
`;
////////////////////
////View All
export const LargeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/bg_final_final.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ViewAllWrapperDiv = styled.div`
  width: 90%;
  height: 807px;
  margin: 0 auto;
  overflow: auto;
`;

export const ViewAllEachBoxDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 130px;
  margin-top: 20px;
  border-radius: 10px;

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
  padding: 13px;
  gap: 10px;
`;

export const ViewAllIMGbox = styled.div`
  width: 106px;
  height: 106px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px 2px;
  border: 1px solid #cfc0ff;
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
  text-align: left;
  /* transform: translateY(16px); */
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
  transform: translateY(-15px);
`;

export const Calendar = styled(IoCalendarNumberOutline)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: #391d93;
  &:hover {
    color: purple;
  }
`;

export const List = styled(IoList)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #391d93;
  &:hover {
    color: #8066d1;
  }
  margin-right: 30px;
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevMonth = styled(IoIosArrowBack)`
  cursor: pointer;
  color: #a294cd;
`;

export const ExcludeImg = styled.img`
  margin-bottom: 12px;
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
  color: ${({ isToday }) => (isToday ? '#391D93' : 'var(--Gray2, #929292);')};
  background-color: ${({ isToday }) => (isToday ? '#CFC0FF' : 'inherit')};

  border-radius: 20px;

  font-family: Spoqa Han Sans Neo;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 20px;
  margin-bottom: 20px;
  /* line-height: 22px; */
`;

export const ImgBoxDiv = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  stroke-width: 0.5px;
  stroke: rgba(207, 192, 255, 0.5);
  border: 1px solid #cfc0ff80;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const StyledHoverTapButton = styled(motion.button)`
  background: rgba(239, 170, 173, 0);
  display: flex;

  border: 0;
`;

export const LeftRightAnimeButton = styled(motion.div)`
  opacity: 0;
  transition: opacity 0.35s ease-out, x 0.35s ease-out;
`;
export const YearMonthChangeBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PrevNextMonthBoxDiv = styled.div`
  display: flex;
  align-items: start;
  margin-top: 4px;
  flex-direction: column;
  margin-left: 5px;
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

export const GPTBox = styled.div`
  width: 203px;
  height: 62px;

  margin: 15px auto;

  border-radius: 2px 10px;
  background: #f5f2ff;

  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.5) inset,
    0px 4px 20px 0px rgba(80, 53, 166, 0.2),
    0px -2px 10px 0px rgba(80, 53, 166, 0.25);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GPTFlexBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GPTLogo = styled.div`
  width: 77px;
  height: 43px;
  background-image: url('/gptCloud.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const GPTDiv = styled.div`
  color: var(--Black, #222122);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BlankDiv = styled.div`
  width: 40px;
  height: 50px;
`;

export const HeaderBlankDiv = styled.div``;
