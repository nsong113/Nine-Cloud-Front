import React from 'react';
import * as S from './layout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/layoutHeader';
import Footer from './footer/layoutFooter';

const Layout = () => {
  const { pathname } = useLocation();

  const isMyPage = pathname === '/main';
  const isListPage = pathname === '/list';
  const isCommunity = pathname === '/community';
  return (
    <div>
      <S.Container>
        <S.Wrapper>
          {(isMyPage || isListPage) && <Header />}
          <div>
            <Outlet />
          </div>
          {(isMyPage || isListPage || isCommunity) && <Footer />}
        </S.Wrapper>
      </S.Container>
    </div>
  );
};

export default Layout;
