import React, { useState } from 'react';
import * as S from './layoutHeader.styles';
import { Toggle } from '../../utills/Toggle';
import { format, getYear } from 'date-fns';
import useCalendar from '../../hooks/useCalender';
import MyPageModal from '../../modals/myPage/myPageModal';

const Header = () => {
  const { currentDate } = useCalendar();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isActiveModal, setIsActiveModal] = useState(false);
  const formattedMonth = format(currentMonth, 'MMMM');
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  return (
    <S.CalenderHeaderDiv>
      {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
      <S.LogoImg></S.LogoImg>
      <S.HeaderWrapper>
        <S.DateBoxDiv>
          <S.YearTextSpan>{year}</S.YearTextSpan>
          <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
        </S.DateBoxDiv>

        <div style={{ display: 'flex' }}>
          <div>{Toggle()}</div>
          <S.AvatarSizeImg
            onClick={onClickMyProfile}
            src='/avatar.png'
            alt='기본'
          />
        </div>
      </S.HeaderWrapper>
    </S.CalenderHeaderDiv>
  );
};

export default Header;
