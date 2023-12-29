import React from 'react';
import * as S from './GPTOverlay.style';

const GPTloading = () => {
  return (
    <S.Background>
      <S.LoadingText>gpt가 열심히 생각하는 중..</S.LoadingText>
      <img src={'/gpt_spinner.gif'} alt='로딩중' width='10%' />
    </S.Background>
  );
};

export default GPTloading;
