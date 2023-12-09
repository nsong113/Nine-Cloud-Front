/* eslint-disable */
import React, { MouseEvent, useState } from 'react';
import * as S from './layoutHeader.styles';
import { addMonths, format, getYear, setMonth, subMonths } from 'date-fns';
import useCalendar from '../../hooks/useCalender';
import MyPageModal from '../../modals/myPage/myPageModal';

const Header = () => {
  const [month, setMonth] = useState(12);
  const { currentDate, setCurrentDate } = useCalendar();
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
  const handlePrevMonth = () => {
    const newDate = subMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setMonth((prev) => prev - 1);
  };
  const handleNextMonth = () => {
    const newDate = addMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setMonth((prev) => prev + 1);
  };

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const profileImg = localStorage.getItem('image');

  return (
    <S.CalendarContainerDiv>
      <S.LogoImg></S.LogoImg>
      {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
      <S.CalenderHeaderDiv>
        <S.DateBoxDiv>
          <S.YearTextSpan>{year}</S.YearTextSpan>
          <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
          <S.CalenderPrevBtnDiv onClick={handlePrevMonth}>
            {'<'}
          </S.CalenderPrevBtnDiv>
          <S.CalenderPrevBtnDiv onClick={handleNextMonth}>
            {'>'}
          </S.CalenderPrevBtnDiv>
        </S.DateBoxDiv>
        <S.RightProfile>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!profileImg && (
              <S.AvatarSizeImg
                onClick={onClickMyProfile}
                src='/avatar.png'
                alt='기본'
              />
            )}
            {profileImg && (
              <S.AvatarSizeImg
                onClick={onClickMyProfile}
                src={profileImg}
                alt='기본'
              />
            )}
          </div>
        </S.RightProfile>
      </S.CalenderHeaderDiv>
    </S.CalendarContainerDiv>
  );
};

export default Header;
