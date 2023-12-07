import React, { useState } from 'react';
import styled from 'styled-components';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import ViewAll from './ViewAll';
import Calender from './Calender';
import { Toggle } from 'src/components/commons/utills/Toggle/Toggle';

const Main = () => {
  const [toggle, setToggle] = useState(true);

  const onClickChangeToggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <S.MainContainerDiv>
      <Toggle checked={toggle} onChange={onClickChangeToggleHandler} />
      {toggle && <Calender />}
      {!toggle && <ViewAll />}
    </S.MainContainerDiv>
  );
};

export default Main;
