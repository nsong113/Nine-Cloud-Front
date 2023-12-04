import React from 'react';
import * as S from './layout.styles';
import { Outlet } from 'react-router-dom';
import Header from './header/layoutHeader';
import Footer from './footer/layoutFooter';

const Layout = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
