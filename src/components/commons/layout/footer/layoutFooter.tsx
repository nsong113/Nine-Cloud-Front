import React from 'react';
import * as S from './layoutFooter.styles';
import './layoutFooter.css';
import { FaHouseChimney } from 'react-icons/fa6';
import { FaUserAlt } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { IoAddCircle } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const goToMainHandler = () => {
    navigate('/main');
  };

  const goToPostHandler = () => {
    navigate('/post');
  };

  return (
    <S.FooterContainer>
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
          <MdPeopleAlt style={iconStyle} />
          <span className='list-item-name'>Community</span>
        </li>
      </div>
    </S.FooterContainer>
  );
};

export default Footer;

const iconStyle = {
  fontSize: '20px',
};
