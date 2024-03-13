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

  const onClickRunning = () => {
    window.open(
      'https://drive.google.com/file/d/1XzfuUC5u85oDp0rg6qYFrCMl0ikMm3ID/view',
      '_blank'
    );
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
                <S.TitleSpan>TIL, RUNNING</S.TitleSpan>
              </S.TitleAndSub>
              <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
            </S.TitleBoxDiv>

            <div>
              <S.ContentsTexts>1. TIL</S.ContentsTexts>
              <S.Contents> - 2023.07.24 ~ ing</S.Contents>
              <S.Contents> - 138개 ( 평균 주 5회 이상 작성)</S.Contents>
              <S.ContentsTexts>2. RUNNING</S.ContentsTexts>
              <S.Contents> - 2023년 한 해, 93번의 런닝</S.Contents>
              <S.Contents> - 자기관리를 꾸준히 하려고 노력</S.Contents>
            </div>
            <div style={{ display: 'flex' }}>
              <S.ForumBtn onClick={onClickVelog}> VELOG </S.ForumBtn>
              <S.ForumBtn onClick={onClickRunning}> RUNNING </S.ForumBtn>
            </div>
          </S.ModalContentDiv>
        </Animation1>
      </S.ContainerDiv>
    </Portal>
  );
};
export default Velog;
