import React, { MouseEvent } from 'react';
import Portal from '../../Portal/Portal';
import * as S from './Kistep.styles';
import Animation3 from '../../Animation/Animation3';

interface CloseModal {
  onCloseModal: () => void;
}

const Kistep: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickNtisBtn = () => {
    window.open('https://www.ntis.go.kr/scisoplatform/', '_blank');
  };

  const onClickBlogBtn = () => {
    window.open('https://blog.naver.com/scisoplatform', '_blank');
  };

  const onClickYoutubeBtn = () => {
    window.open('https://www.youtube.com/@scisoplatform/shorts', '_blank');
  };

  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation3>
              <S.ModalContentDiv onClick={onClickModalDiv}>
                <S.TitleBoxDiv>
                  <S.TitleAndSub>
                    <S.TitleSpan>KISTEP</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>기간</S.ContentsText>
                  <S.Contents> - 2023.04 ~ 2023.07</S.Contents>
                  <S.ContentsText>내용</S.ContentsText>
                  <S.Contents>
                    {' '}
                    1. 홍보 컨텐츠 기획 및 제작 (동영상, 팸플릿 등)
                    <br /> 2. 사회문제해결플랫폼(NTIS) 운영 및 관리 <br /> 3.
                    자료조사 및 문서화
                  </S.Contents>
                </div>
                <div>
                  <S.ForumBtn onClick={onClickNtisBtn}>NTIS</S.ForumBtn>
                  <S.ForumBtn onClick={onClickBlogBtn}>BLOG</S.ForumBtn>
                  <S.ForumBtn onClick={onClickYoutubeBtn}>Youtube</S.ForumBtn>
                </div>
              </S.ModalContentDiv>
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Kistep;
