import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailedPage from 'src/pages/boards/detail';
import NewPostPage from 'src/pages/boards/new';
import SigninPage from 'src/pages/login/signin';
import OnBoardPage from 'src/pages/onBoard';
import SignupPage from 'src/pages/signup';
import Layout from './components/commons/layout/layout';
import MainPage from './pages/boards/main';
import BoardWriteDiary from './components/units/board/write/diary/BoardWriteDiary';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<OnBoardPage />} />
          <Route path='/login' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          {/* main 페이지 */}
          <Route path='/main' element={<MainPage />} />
          {/* 추가 페이지 */}
          <Route path='/post' element={<NewPostPage />} />
          {/* 상세 페이지 */}
          <Route path='/post/:id' element={<DetailedPage />} />
          <Route path='/post2' element={<BoardWriteDiary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
