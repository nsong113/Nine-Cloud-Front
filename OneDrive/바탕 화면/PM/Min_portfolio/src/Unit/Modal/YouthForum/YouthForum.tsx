import * as S from './YouthForum.styles';
import Portal from '../../Portal/Portal';
import Animation3 from '../../Animation/Animation3';
import { MouseEvent } from 'react';

interface CloseModal {
  onCloseModal: () => void;
}

const YouthForum: React.FC<CloseModal> = ({ onCloseModal }) => {
  const onClickSecondChrome = () => {
    window.open('https://zep.us/play/2mYqBe', '_blank');
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
                    <S.TitleSpan>ICH YOUTH FORUM</S.TitleSpan>
                  </S.TitleAndSub>
                  <S.TitleAndCancel onClick={onCloseModal}>X</S.TitleAndCancel>
                </S.TitleBoxDiv>
                <div>
                  <S.ContentsText>ο 기간</S.ContentsText>
                  <S.Contents> 2022.03 ~ 2022.09</S.Contents>
                  <S.ContentsText>ο 역할</S.ContentsText>
                  <S.Contents>
                    2022 YOUTH FORUM 프로젝트 기획 및 운영
                    <S.SubContents>1. ZEP 맵 기획 및 제작</S.SubContents>
                    <S.SubContents>2. 서포터즈 운영 및 관리</S.SubContents>
                    <S.SubContents>
                      3. 사용자 테스트 통해, 컨텐츠 개선{' '}
                    </S.SubContents>
                  </S.Contents>
                </div>
                <S.ForumBtn onClick={onClickSecondChrome}> ZEP 이동</S.ForumBtn>
              </S.ModalContentDiv>
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default YouthForum;
