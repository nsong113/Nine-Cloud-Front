import React, { MouseEvent } from 'react';
import * as S from './Instagram.styles';
import Portal from '../../Portal/Portal';
import Animation2 from '../../Animation/Animation2';

interface CloseModal {
  onCloseModal: () => void;
}

const Instagram: React.FC<CloseModal> = ({ onCloseModal }) => {

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
                  <S.TitleAndSub>
                    <S.TitleSpan>미정</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>사용하고자 하는 기술</S.ContentsText>
                  <S.Contents>
                    {' '}
                    - Next.js, Vite, Tailwind, Storybook, TypeScript
                  </S.Contents>
                  <S.ContentsText>만들고자 하는 기능</S.ContentsText>
                  <S.Contents>
                    1. 스크롤 반응형
                    <br />
                    2. 간단한 채팅기능
                    <br />
                    3. Canvas를 활용한 기능
                  </S.Contents>
                </div>
                <div>
                  <S.GithubImg
                    src='/git.png'
                    alt='깃허브'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                  />
                  <S.YoutubeImg
                    src='/youtubeLogo.png'
                    alt='유튜브 로고'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                  />
                </div>
              </S.ModalContentDiv>
            </Animation2>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default Instagram;
