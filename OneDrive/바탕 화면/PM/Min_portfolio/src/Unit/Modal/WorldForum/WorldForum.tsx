import React, { MouseEvent } from 'react';
import * as S from './WorldForum.styles';
import Portal from '../../Portal/Portal';
import Animation3 from '../../Animation/Animation3';

interface CloseModal {
  onCloseModal: () => void;
}

const WorldForum: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickChrome = () => {
    window.open(
      'https://ichworldforum.org/2022-world-forum-for-intangible-cultural-heritage-2',
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
            <Animation3>
              <S.ModalContentDiv onClick={onClickModalDiv}>
                <S.TitleBoxDiv>
                  <S.TitleAndSub>
                    <S.TitleSpan>ICH WORLD FORUM</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>ο 기간</S.ContentsText>
                  <S.Contents> 2022.03 ~ 2022.09</S.Contents>
                  <S.ContentsText>ο 역할</S.ContentsText>
                  <S.Contents>
                    2022 세계무형문화유산포럼 기획 및 운영
                  </S.Contents>
                  <S.SubContents>
                    1. 포럼 홈페이지 제작 업무 <br /> 2. 전문가 초청 특별강연
                    홍보 컨텐츠 기획 및 제작 <br /> 3. 온라인 서포터즈 운영
                    <br /> 4. 포럼 프로그램 기획 및 운영 (ZEP) <br />
                  </S.SubContents>
                </div>
                <S.ForumBtn onClick={onClickChrome}>
                  포럼 홈페이지 이동
                </S.ForumBtn>
              </S.ModalContentDiv>
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default WorldForum;
