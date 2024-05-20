import React, { MouseEvent, useState } from 'react';
import * as S from './Portfoilo.styles';
import Portal from '../../Portal/Portal';
import Animation2 from '../../Animation/Animation2';
import TroubleShooting from './TroubleShooting/TroubleShooting';

interface CloseModal {
  onCloseModal: () => void;
}

const Portfolio: React.FC<CloseModal> = ({ onCloseModal }) => {
  const [isTrouble, setIsTrouble] = useState(false);
  const onClickGithub = () => {
    window.open('https://github.com/cheolminJOO/Min_portfolio', '_blank');
  };

  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const onClickBack = () => {
    setIsTrouble(false);
  };

  const onClickTroubleShooting = () => {
    setIsTrouble((prev) => !prev);
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onCloseModal}>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation2>
              <S.ModalContentDiv onClick={onClickModalDiv}>
                <S.TitleBoxDiv>
                  <S.TitleAndSub isTrouble={isTrouble}>
                    {isTrouble && (
                      <S.BackImgDiv onClick={onClickBack}>
                        <S.BackImg src='/backback.png' alt='뒤로가기' />
                      </S.BackImgDiv>
                    )}
                    <S.TitleSpan>Portfolio</S.TitleSpan>
                  </S.TitleAndSub>
                </S.TitleBoxDiv>
                {!isTrouble && (
                  <S.ProjectContainer>
                    <S.HeaderDiv>
                      <S.ProjectTitle>프로젝트 개요</S.ProjectTitle>
                      <S.TroubleBtn onClick={onClickTroubleShooting}>
                        트러블슈팅
                      </S.TroubleBtn>
                    </S.HeaderDiv>
                    <S.ContentsText>ο 기간</S.ContentsText>
                    <S.Contents> - 2024.01 ~ 진행중</S.Contents>
                    <S.ContentsText>ο Tech Stack</S.ContentsText>
                    <S.Contents>
                      - React, Vite, TypeScript, Styled-Components
                    </S.Contents>
                    <S.ContentsText>ο 주요기능</S.ContentsText>
                    <S.Contents>
                      1. Full-page 기능 구현 (Custom)
                      <br />
                      2. 스크롤 이벤트 (IntersectionObserver) <br />
                      3. 반응형
                    </S.Contents>
                    <S.LogoDiv>
                      <S.GithubImg
                        onClick={onClickGithub}
                        src='/git.png'
                        alt='깃허브'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                      />
                    </S.LogoDiv>
                  </S.ProjectContainer>
                )}
                {isTrouble && <TroubleShooting />}
              </S.ModalContentDiv>
            </Animation2>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Portfolio;
