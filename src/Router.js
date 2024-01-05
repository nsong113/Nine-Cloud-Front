import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const DetailedPage = React.lazy(() => import('src/pages/boards/detail'));
const NewPostPage = React.lazy(() => import('src/pages/boards/new'));
const SigninPage = React.lazy(() => import('src/pages/login/signin'));
const OnBoardPage = React.lazy(() => import('src/pages/onBoard'));
const SignupPage = React.lazy(() => import('src/pages/signup'));
const Layout = React.lazy(() => import('./components/commons/layout/layout'));
const MainPage = React.lazy(() => import('./pages/boards/main'));
const Community = React.lazy(() => import('./pages/boards/community'));
const BoardWriteDiary = React.lazy(() =>
  import('./components/units/board/write/diary/BoardWriteDiary')
);
const BoardWriteDraw = React.lazy(() =>
  import('./components/units/board/write/draw/BoardWriteDraw')
);
const ViewAll = React.lazy(() => import('./components/units/main/ViewAll'));
const Chatting = React.lazy(() =>
  import('./components/units/community/chatting/Chatting')
);
import LoginKakao from './components/units/login/social/LoginKakao';
import KakaoLoginHandler from './components/units/login/social/auth/KakaoLoginHandler';
import GoogleLoginHandler from './components/units/login/social/auth/GoogleLoginHandler';
import TestPage from './components/units/login/TestPage';
import NaverLoginHandler from './components/units/login/social/auth/NaverLoginHandler';

import Loading from './components/units/loading/Loading';

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<OnBoardPage />} />
            <Route path='/login' element={<SigninPage />} />
            <Route path='/login/kakao' element={<LoginKakao />} />
            <Route
              path='/auth/kakao/callback'
              element={<KakaoLoginHandler />}
            />
            <Route
              path='/auth/google/callback'
              element={<GoogleLoginHandler />}
            />
            <Route
              path='/auth/naver/callback'
              element={<NaverLoginHandler />}
            />
            <Route path='/loading' element={<Loading />} />
            <Route path='/signup' element={<SignupPage />} />
            {/* main 페이지 */}
            <Route path='/main' element={<MainPage />} />
            {/* 추가 페이지 */}
            <Route path='/post' element={<NewPostPage />} />
            <Route path='/post2' element={<BoardWriteDraw />} />
            <Route path='/post3' element={<BoardWriteDiary />} />
            {/* 상세 페이지 */}
            <Route path='/post/:id' element={<DetailedPage />} />
            <Route path='/list' element={<ViewAll />} />
            <Route path='/test' element={<TestPage />} />
            {/* community 페이지 */}
            <Route path='/community' element={<Community />} />
            <Route path='/community/chat' element={<Chatting />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
