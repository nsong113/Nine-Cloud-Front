import React from 'react';
import * as S from './layout.styles';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
