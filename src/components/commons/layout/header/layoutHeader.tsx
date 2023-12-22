/* eslint-disable */
import React, { MouseEvent, useState } from 'react';
import * as S from './layoutHeader.styles';
import {
  addMonths,
  format,
  getMonth,
  getYear,
  setMonth,
  subMonths,
} from 'date-fns';
import useCalendar from '../../hooks/useCalender';
import MyPageModal from '../../modals/myPage/myPageModal';
import { Tooltip } from '../../utills/tooltip/tooltip';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMyInfo } from 'src/apis/cheolmin-api/apis';

const Header = () => {
  const navigate = useNavigate();
  const { currentDate, setCurrentDate } = useCalendar();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [animationDirection, setAnimationDirection] = useState('');
  const { data: profile } = useQuery('myInfo', getMyInfo);
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const month = getMonth(newDate) + 1;
  const formattedMonth = format(currentMonth, 'MMMM');
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

  const onClickLogo = () => {
    navigate('/main');
  };

  const profileImg = localStorage.getItem('image');

  return (
    <S.CalendarContainerDiv>
      <S.HeaderContainerDiv>
        {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
        <S.CalenderHeaderDiv>
          <S.LogoBoxDiv>
            <div style={{ display: 'flex' }}>
              <S.LogoImg
                onClick={onClickLogo}
                src='/logo_final.png'
                alt='로고'
              />
            </div>
            <Tooltip message='마이페이지'>
              <S.StyledHoverTapButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClickMyProfile}
              >
                {profile?.data?.profileImg && (
                  <S.AvatarSizeImg src={profile?.data?.profileImg} alt='기본' />
                )}
                {!profile?.data?.profileImg && (
                  <S.AvatarSizeImg src='/avatar.png' alt='기본' />
                )}
              </S.StyledHoverTapButton>
            </Tooltip>
          </S.LogoBoxDiv>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              // alignItems: 'center',
            }}
          ></div>
        </S.CalenderHeaderDiv>
      </S.HeaderContainerDiv>
    </S.CalendarContainerDiv>
  );
};

export default Header;
