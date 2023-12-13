/* eslint-disable */
import React, { MouseEvent, useState } from 'react';
import * as S from './layoutHeader.styles';
import { addMonths, format, getYear, setMonth, subMonths } from 'date-fns';
import useCalendar from '../../hooks/useCalender';
import MyPageModal from '../../modals/myPage/myPageModal';
import { Tooltip } from '../../utills/tooltip/tooltip';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { currentDate, setCurrentDate } = useCalendar();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [animationDirection, setAnimationDirection] = useState('');

  const formattedMonth = format(currentMonth, 'MMMM');
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const onClickPrevMonth = () => {
    const newDate = subMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setAnimationDirection('rightToLeft');
  };

  const onClickNextMonth = () => {
    const newDate = addMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    setAnimationDirection('leftToRight');
  };

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };
  const onClickListBtn = () => {
    navigate('/list');
  };

  const profileImg = localStorage.getItem('image');

  return (
    <S.CalendarContainerDiv>
      <S.HeaderContainerDiv>
        {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
        <S.CalenderHeaderDiv>
          <S.LogoBoxDiv>
            <S.LogoImg src='/ninecloud.png' alt='로고' />
            <S.BrandTextBoxDiv>
              <span>NINE</span>
              <span>CLOUD</span>
            </S.BrandTextBoxDiv>
          </S.LogoBoxDiv>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <S.HeaderLeftWrapperDiv>
              <S.DateBoxDiv>
                <S.YearTextSpan>{year}</S.YearTextSpan>
                <S.PrevNextMonthBoxDiv>
                  <S.PrevMonth onClick={onClickPrevMonth} size={30} />
                  <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
                  <S.NextMonth onClick={onClickNextMonth} size={30} />
                </S.PrevNextMonthBoxDiv>
              </S.DateBoxDiv>
            </S.HeaderLeftWrapperDiv>
            <S.RightProfile>
              <S.ButtonWrapperDiv>
                <Tooltip message='리스트'>
                  <S.StyledHoverTapButton
                    whileHover={{ scale: 1.1 }} //마우스를 올리면 자연스럽게 scale이 커진다
                    whileTap={{ scale: 0.9 }} // 마우스를 클릭하면 자연스럽게 줄어든다
                    onClick={onClickListBtn}
                  >
                    <S.List />
                  </S.StyledHoverTapButton>
                </Tooltip>
                <Tooltip message='마이페이지'>
                  <S.StyledHoverTapButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClickMyProfile}
                  >
                    {!profileImg && (
                      <S.ProfileBoxDiv>
                        <S.AvatarSizeImg src='/avatar.png' alt='기본' />
                      </S.ProfileBoxDiv>
                    )}
                    {profileImg && (
                      <div>
                        <S.AvatarSizeImg src={profileImg} alt='기본' />
                      </div>
                    )}
                  </S.StyledHoverTapButton>
                </Tooltip>
              </S.ButtonWrapperDiv>
            </S.RightProfile>
          </div>
        </S.CalenderHeaderDiv>
      </S.HeaderContainerDiv>
    </S.CalendarContainerDiv>
  );
};

export default Header;
