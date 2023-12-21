import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailedPage from 'src/pages/boards/detail';
import NewPostPage from 'src/pages/boards/new';
import SigninPage from 'src/pages/login/signin';
import OnBoardPage from 'src/pages/onBoard';
import SignupPage from 'src/pages/signup';
import Layout from './components/commons/layout/layout';
import MainPage from './pages/boards/main';
import Community from './pages/boards/community';
import BoardWriteDiary from './components/units/board/write/diary/BoardWriteDiary';
import BoardWriteDraw from './components/units/board/write/draw/BoardWriteDraw';
import LoginKakao from './components/units/login/social/LoginKakao';
import KakaoLoginHandler from './components/units/login/social/auth/KakaoLoginHandler';
import ViewAll from './components/units/main/ViewAll';
import GoogleLoginHandler from './components/units/login/social/auth/GoogleLoginHandler';
import { AnimatePresence } from 'framer-motion';
import Loading from './components/units/login/social/auth/Loading';
import TestPage from './components/units/login/TestPage';
import NaverLoginHandler from './components/units/login/social/auth/NaverLoginHandler';
import EditOverlay from './components/commons/modals/modalSetting/overlay/editOverlay/EditOverlay';
import Chatting from './components/units/community/chatting/Chatting';
// import BoardDetailGPT from './components/units/main/gpt/BoardDetailGPT';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<OnBoardPage />} />
          <Route path='/login' element={<SigninPage />} />
          <Route path='/login/kakao' element={<LoginKakao />} />
          <Route path='/auth/kakao/callback' element={<KakaoLoginHandler />} />
          <Route
            path='/auth/google/callback'
            element={<GoogleLoginHandler />}
          />
          <Route path='/auth/naver/callback' element={<NaverLoginHandler />} />
          <Route path='/loadingpage' element={<Loading />} />
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
          {/* gpt */}
          {/* <Route path='/gpt' element={<BoardDetailGPT />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
