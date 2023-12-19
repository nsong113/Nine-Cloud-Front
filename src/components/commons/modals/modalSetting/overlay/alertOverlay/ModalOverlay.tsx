import React from 'react';
import * as S from './ModalOverlay.styles';

const ModalOverlay: React.FC<IProps> = ({ onOk, onClose }) => {
  return (
    <>
      <S.ContainerDiv className='modal' onClick={onClose}>
        <S.ModalContentDiv>
          <img src='/warning.png' alt='최종 감정이모티콘' />
          <S.TitleBoxDiv>
            <S.TextStyleSpan>
              <S.TextStyleSpanH5>
                작성을 중단하고 나가시겠습니까?
              </S.TextStyleSpanH5>
              <S.TextStyleSpanP>
                입력하신 내용이 모두 사라져요!
              </S.TextStyleSpanP>
            </S.TextStyleSpan>
          </S.TitleBoxDiv>
          <S.BoxButton>
            <S.CancelButton onClick={onOk}>나가기</S.CancelButton>
            <S.StyleButton onClick={onClose}>머무르기</S.StyleButton>
          </S.BoxButton>
        </S.ModalContentDiv>
      </S.ContainerDiv>
    </>
  );
};

export default ModalOverlay;
