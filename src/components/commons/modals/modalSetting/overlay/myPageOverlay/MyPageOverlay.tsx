import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IMyPage } from './MyPageOverlay.types';
import * as S from './MyPageOverlay.styles';

const MyPageOverlay: React.FC<IMyPage> = ({ onOk }) => {
  return (
    <S.ContainerDiv onClick={onOk} className='modal'>
      <S.ModalContentDiv>
        <S.ContentsBoxDiv>
          <S.CatergoryImg src='/avatar.png' alt='엑박' />
          <S.TtitleTextSpan>회원정보 수정</S.TtitleTextSpan>
          <S.MoveToPageImg size={30} />
        </S.ContentsBoxDiv>
        <S.ContentsBoxDiv>
          <S.CatergoryImg src='/avatar.png' alt='엑박' />
          <S.TtitleTextSpan>회원정보 수정</S.TtitleTextSpan>
          <S.MoveToPageImg size={30} />
        </S.ContentsBoxDiv>
        <S.ContentsBoxDiv>
          <S.CatergoryImg src='/avatar.png' alt='엑박' />
          <S.TtitleTextSpan>회원정보 수정</S.TtitleTextSpan>
          <S.MoveToPageImg size={30} />
        </S.ContentsBoxDiv>
        <S.ContentsBoxDiv>
          <S.CatergoryImg src='/avatar.png' alt='엑박' />
          <S.TtitleTextSpan>회원정보 수정</S.TtitleTextSpan>
          <S.MoveToPageImg size={30} />
        </S.ContentsBoxDiv>
        <S.ContentsBoxDiv>
          <S.CatergoryImg src='/avatar.png' alt='엑박' />
          <S.TtitleTextSpan>회원정보 수정</S.TtitleTextSpan>
          <S.MoveToPageImg size={30} />
        </S.ContentsBoxDiv>
        <S.ContentsBoxDiv>
          <S.CatergoryImg src='/avatar.png' alt='엑박' />
          <S.TtitleTextSpan>회원정보 수정</S.TtitleTextSpan>
          <S.MoveToPageImg size={30} />
        </S.ContentsBoxDiv>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default MyPageOverlay;
