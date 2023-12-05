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
    <>
      <S.ShowCloudDivRed
        onClick={onClickChangeToggleHandler}
      ></S.ShowCloudDivRed>
      {toggle && <Calender />}
      {!toggle && <ViewAll />}
    </>
  );
};
export default Main;
