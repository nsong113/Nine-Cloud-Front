import React, { MouseEvent } from 'react';
import Portal from '../../Portal/Portal';
import Animation1 from '../../Animation/Animation';
import * as S from './Together.styls';

interface CloseModal {
  onCloseModal: () => void;
}

const Together: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickAward = () => {
    window.open(
      'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/%EC%9D%B8%EA%B8%B0%EC%83%81.png',
      '_blank'
    );
  };

  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation1>
              <S.ModalContentDiv onClick={onClickModalDiv}>
                <S.TitleBoxDiv>
                  <S.TitleAndSub>
                    <S.TitleSpan>Together</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents>2023.10 ~ 2024.01</S.Contents>
                  <S.ContentsText>내용</S.ContentsText>
                  <S.Contents>
                    1. 미니 프로젝트 | 6명 | 리더,발표
                    <br /> 2. 주특기 프로젝트 | 4명 | 발표
                    <br /> 3. 클론 코딩 프로젝트 | 4명 | 발표
                    <br /> 4. 파이널 프로젝트 | 6명 | 리더
                  </S.Contents>
                  <S.ContentsText>기타</S.ContentsText>
                  <S.Contents>
                    - 파이널 프로젝트에서 "최고의 인기 프로젝트상" 수상
                  </S.Contents>
                </div>
                <div>
                  <S.ForumBtn onClick={onClickAward}>AWARD</S.ForumBtn>
                </div>
              </S.ModalContentDiv>
            </Animation1>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Together;
