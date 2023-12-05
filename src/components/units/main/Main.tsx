import React from 'react';
import styled from 'styled-components';
import useCalendar from 'src/components/commons/hooks/useCalender';
import * as S from './Main.styles';
import ViewAll from './ViewAll';
import Calender from './Calender';

const Main = () => {
  return (
    <>
      <Calender />
      <ViewAll />
    </>
  );
};

export default Main;
