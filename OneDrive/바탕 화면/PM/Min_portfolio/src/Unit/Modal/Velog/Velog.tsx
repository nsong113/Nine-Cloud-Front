import React, { MouseEvent } from 'react';
import * as S from './Velog.styles';
import Animation1 from '../../Animation/Animation';
import Portal from '../../Portal/Portal';

interface CloseModal {
  onCloseModal: () => void;
}

const Velog: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickVelog = () => {
    window.open('https://velog.io/@uiop3996/posts', '_blank');
  };

  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal} className='modal'>
        <Animation1>
          <S.ModalContentDiv onClick={onClickModalDiv}>
            <S.TitleBoxDiv>
              <S.TitleAndSub>
                <S.TitleSpan>Engineering Blog</S.TitleSpan>
              </S.TitleAndSub>
              <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
            </S.TitleBoxDiv>

            <div>
              <S.ContentsTexts>기간</S.ContentsTexts>
              <S.Contents> - 2023.07.24 ~ ing</S.Contents>
              <S.ContentsTexts>총 게시글 수</S.ContentsTexts>
              <S.Contents> - 138개 ( 평균 주 5회 이상 작성)</S.Contents>
              <S.ContentsTexts>기타</S.ContentsTexts>
              <S.Contents> - 2024년 1월 23일 기준</S.Contents>
            </div>
            <S.ForumBtn onClick={onClickVelog}> VELOG </S.ForumBtn>
          </S.ModalContentDiv>
        </Animation1>
      </S.ContainerDiv>
    </Portal>
  );
};
export default Velog;
