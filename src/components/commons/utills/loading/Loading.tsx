import React from 'react';
import * as S from './Loading.styles';
import { useQuery } from 'react-query';
import { getPosts } from 'src/apis/cheolmin-api/apis';

const Loading = () => {
  // const {data} = useQuery('post', getPosts)
  return (
    <S.Background>
      <S.LoadingText>Loading ...</S.LoadingText>;
      <img src='/spinner.gif' alt='로딩중' />
    </S.Background>
  );
};

export default Loading;
