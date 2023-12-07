import React, { useState } from 'react';
import styled from 'styled-components';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import ViewAll from './ViewAll';
import Calender from './Calender';

const Main = () => {
  const [toggle, setToggle] = useState(true);
  const onClickChangeToggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <S.MainContainerDiv>
      {toggle && <Calender />}
      {!toggle && <ViewAll />}
      <S.FooterBoxDiv></S.FooterBoxDiv>
    </S.MainContainerDiv>
  );
};
export default Main;
