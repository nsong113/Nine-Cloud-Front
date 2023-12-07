import React from 'react';
import * as S from './layoutFooter.styles';
import './layoutFooter.css';
import { FaHouseChimney } from 'react-icons/fa6';
import { FaUserAlt } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';

const Footer = () => {
  return (
    <S.FooterContainer>
      <div className='navbar'>
        <li className='list-item'>
          <FaHouseChimney style={iconStyle} />
          <span className='list-item-name'>Main</span>
        </li>
        <li className='list-item'>
          <FaUserAlt style={iconStyle} />
          <span className='list-item-name'>Post</span>
        </li>
        <li className='list-item'>
          <IoIosSettings style={iconStyle} />
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
