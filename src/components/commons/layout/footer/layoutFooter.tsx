import React from 'react';
import * as S from './layoutFooter.styles';
import './layoutFooter.css';
import { FaHouseChimney } from 'react-icons/fa6';
import { IoAddCircle } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPosts } from 'src/apis/cheolmin-api/apis';
import useCalendar from '../../hooks/useCalender';
import { format, getYear, getDate } from 'date-fns';

const Footer = () => {
  const {
    currentDate,
    setCurrentDate,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
  } = useCalendar();

  const { data, isLoading, refetch } = useQuery(
    ['posts', currentMonth, currentYear],
    () =>
      getPosts({
        currentYear: getYear(currentDate),
        currentMonth: format(currentMonth, 'M'),
      })
  );

  const today = getDate(currentDate) - 1;
  // console.log('footer', data?.data[today]);

  const diaryCheck = data?.data[today];

  const navigate = useNavigate();

  const goToMainHandler = () => {
    navigate('/main');
  };

  const goToPostHandler = () => {
    if (diaryCheck !== null) {
      alert('오늘은 이미 글을 작성하셨습니다.');
      return;
    }
    navigate('/post');
  };

  const goToCOmmunityHandler = () => {
    navigate('/community');
  };

  return (
    <div className='FooterContainer'>
      {/* <S.FooterContainer> */}
      <div className='navbar'>
        <li className='list-item'>
          <FaHouseChimney style={iconStyle} onClick={goToMainHandler} />
          <span className='list-item-name'>Main</span>
        </li>
        <li className='list-item'>
          <IoAddCircle style={iconStyle} onClick={goToPostHandler} />
          <span className='list-item-name'>Post</span>
        </li>
        <li className='list-item'>
          <MdPeopleAlt style={iconStyle} onClick={goToCOmmunityHandler} />
          <span className='list-item-name'>Community</span>
        </li>
      </div>
      {/* </S.FooterContainer> */}
    </div>
  );
};

export default Footer;

const iconStyle = {
  fontSize: '20px',
  color: 'white',
};
