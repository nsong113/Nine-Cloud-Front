import React from 'react';
import * as S from './GPTOverlay.style';

const GPTloading = () => {
  return (
    <S.Background>
      <S.LoadingText>2초에서 4초정도 소요됩니다..</S.LoadingText>
      <img src={'/gpt_spinner.gif'} alt='로딩중' width='10%' />
    </S.Background>
  );
};

export default GPTloading;
