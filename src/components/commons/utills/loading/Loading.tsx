import React from 'react';
import * as S from './Loading.styles';

const Loading = () => {
  return (
    <S.Background>
      <S.LoadingText>Loading ...</S.LoadingText>;
      <img src='/spinner.gif' alt='로딩중' />
    </S.Background>
  );
};

export default Loading;
