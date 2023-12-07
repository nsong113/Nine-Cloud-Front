import React from 'react';
import * as S from './layout.styles';
import { Outlet } from 'react-router-dom';
import Header from './header/layoutHeader';
import Footer from './footer/layoutFooter';

const Layout = () => {
  return (
    <div>
      <S.Container>
        <S.Wrapper>
          {/* <Header /> */}
          <Outlet />
        </S.Wrapper>
      </S.Container>
    </div>
  );
};

export default Layout;
