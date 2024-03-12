import React, { MouseEvent, useState } from 'react';
import * as S from './BUSU.styles';
import Portal from '../../Portal/Portal';
import Animation2 from '../../Animation/Animation2';
import TroubleShooting from './TroubleShooting/TroubleShooting';

interface CloseModal {
  onCloseModal: () => void;
}

const BUSU: React.FC<CloseModal> = ({ onCloseModal }) => {
  const [isTrouble, setIsTrouble] = useState(false);
  const onClickGithub = () => {
    window.open(
      'https://github.com/cheolminJOO/Buying-and-Selling-Used-Stuff',
      '_blank'
    );
  };

  const onClickYoutube = () => {
    window.open('https://www.youtube.com/watch?v=4TAa1qzDcB0', '_blank');
  };

  const onClickBack = () => {
    setIsTrouble(false);
  };

  const onClickTroubleShooting = () => {
    setIsTrouble((prev) => !prev);
  };

  const onClickModalDiv = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
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
                    <S.TitleSpan>BUSU</S.TitleSpan>
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
                    <S.Contents> 2023.08 ~ 진행중</S.Contents>
                    <S.ContentsText>ο Tech Stack</S.ContentsText>
                    <S.Contents>
                      {' '}
                      Next.js, graphQL, React-hook-form,TypeScript, Emotion,
                      Recoil
                    </S.Contents>
                    <S.ContentsText>ο 주요기능</S.ContentsText>
                    <S.Contents>
                      1. 무한스크롤 (react-infinite-scroller)
                      <br />
                      2. 카카오 지도 검색 (kakao map api)
                      <br />
                      3. 게시판 검색 (refetch, search)
                      <br />
                      4. 주소 찾기 기능 (kakao 주소 api)
                    </S.Contents>
                    <S.LogoDiv>
                      <S.GithubImg
                        onClick={onClickGithub}
                        src='/git.png'
                        alt='깃허브'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                      />
                      <S.YoutubeImg
                        onClick={onClickYoutube}
                        src='/youtubeLogo.png'
                        alt='유튜브 로고'
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

export default BUSU;
