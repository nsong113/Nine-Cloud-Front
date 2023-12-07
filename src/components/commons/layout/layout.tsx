import React from 'react';
import * as S from './layout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/layoutHeader';
import Footer from './footer/layoutFooter';

const Layout = () => {
  const { pathname } = useLocation();

  const isMyPage = pathname === '/main';
  return (
    <div>
      <S.Container>
        <S.Wrapper>
          {isMyPage && <Header />}
          <div>
            <Outlet />
          </div>
          {isMyPage && <Footer />}
        </S.Wrapper>
      </S.Container>
    </div>
  );
};

export default Layout;
