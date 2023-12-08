/* eslint-disable */
import React, { MouseEvent, useState } from 'react';
import * as S from './layoutHeader.styles';
import { Toggle } from '../../utills/Toggle/Toggle';
import { format, getYear } from 'date-fns';
import useCalendar from '../../hooks/useCalender';
import MyPageModal from '../../modals/myPage/myPageModal';
import Calender from 'src/components/units/main/Calender';
import ViewAll from 'src/components/units/main/ViewAll';
import Main from 'src/components/units/main/Main';

const Header = () => {
  const { currentDate } = useCalendar();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [toggle, setToggle] = useState(true);

  const onClickChangeToggleHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setToggle(!toggle);
  };

  const formattedMonth = format(currentMonth, 'MMMM');
  const newDate = new Date(currentDate);
  const year = getYear(newDate);

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  return (
    <S.CalendarContainerDiv>
      <S.LogoImg></S.LogoImg>
      {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
      <S.CalenderHeaderDiv>
        <S.DateBoxDiv>
          <S.YearTextSpan>{year}</S.YearTextSpan>
          <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
        </S.DateBoxDiv>
        <S.RightProfile>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <S.AvatarSizeImg
              onClick={onClickMyProfile}
              src='/avatar.png'
              alt='기본'
            />
          </div>
        </S.RightProfile>
      </S.CalenderHeaderDiv>
    </S.CalendarContainerDiv>
  );
};

export default Header;
