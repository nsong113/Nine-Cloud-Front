import React, { MouseEvent } from 'react';
import * as S from './Epis.styles';
import Portal from '../../Portal/Portal';
import Animation3 from '../../Animation/Animation3';

interface CloseModal {
  onCloseModal: () => void;
}

const Epis: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  const onClickFirstProjectBtn = () => {
    window.open(
      'https://drive.google.com/file/d/1e2YfFyCbsrjSbXY990FacI7Szg3yszWx/view?usp=sharing',
      '_blank'
    );
  };

  const onClickSecondProjectBtn = () => {
    window.open(
      'https://drive.google.com/file/d/1vhegjsv82kvNpbrEyPG56nBoMA0HOxvL/view?usp=sharing',
      '_blank'
    );
  };

  const onClickYoutubeBtn = () => {
    window.open('https://blog.naver.com/qwe951109/222587647851', '_blank');
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
                    <S.TitleSpan>EPIS</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>ο 기간</S.ContentsText>
                  <S.Contents> - 2021.11.08 ~ 2021.12.03</S.Contents>
                  <S.ContentsText>ο 역할</S.ContentsText>
                  <S.Contents>
                    사회적 기업 조사 및 컨텐츠 기획과 제작
                    <S.SubContents>1. 브이로그 형식의 동영상 </S.SubContents>
                    <S.SubContents>2. 브로셔 </S.SubContents>
                    <S.SubContents>3. PPT (사회적 농업 홍보) </S.SubContents>
                  </S.Contents>
                </div>
                <div>
                  <S.ForumBtn onClick={onClickFirstProjectBtn}>
                    Brochure
                  </S.ForumBtn>
                  <S.ForumBtn onClick={onClickSecondProjectBtn}>
                    Final PPT
                  </S.ForumBtn>
                  <S.ForumBtn onClick={onClickYoutubeBtn}>Blog</S.ForumBtn>
                </div>
              </S.ModalContentDiv>
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Epis;
