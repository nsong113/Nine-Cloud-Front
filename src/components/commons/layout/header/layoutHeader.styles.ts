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

export const PrevMonth = styled(IoIosArrowBack)`
  cursor: pointer;
  color: #a294cd;
`;

export const List = styled(IoList)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  color: #a294cd;
`;

export const CalendarContainerDiv = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

export const HeaderContainerDiv = styled.div`
  height: 170px;
  border-radius: 0px 0px 50px 50px;
  background: #5035a6;
  /* box-shadow: 0px 20px 10px 0px rgba(80, 53, 166, 0.25); */
`;

export const CalenderHeaderDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoBoxDiv = styled.div`
  display: flex;
  margin: 25px 0px 0px 27px;
`;

export const LogoImg = styled.img`
  width: 77.25px;
  height: 45.516px;
  color: #a294cd;
`;

export const BrandTextBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #a294cd;
  font-family: Spoqa Han Sans Neo;
  font-size: 16.394px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.984px;
`;

export const HeaderLeftWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DateBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: start;
  margin-top: 20.48px;
`;

export const YearTextSpan = styled.span`
  color: #a294cd;
  font-family: Spoqa Han Sans Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 45px;
`;
export const PrevNextMonthBoxDiv = styled.div`
  display: flex;
  margin-left: 14px;
  align-items: start;
`;

export const MonthTextSpan = styled.span`
  color: #fff;
  font-family: Spoqa Han Sans Neo;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

export const NextMonth = styled(MdOutlineArrowForwardIos)`
  cursor: pointer;
  color: #a294cd;
`;

export const RightProfile = styled.div`
  margin-left: 130px;
  width: 130px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const ButtonWrapperDiv = styled.div`
  margin-top: 32px;
  margin-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHoverTapButton = styled(motion.button)`
  background: rgba(239, 170, 173, 0);

  border: 0;
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

export const AvatarSizeImg = styled.img`
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 159px;
  border: 1px solid #fff;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
