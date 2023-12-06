import React from 'react';
import * as S from './ConfirmOverlay.styles';

interface IConfirmMod {
  onClose?: () => void;
  onOk?: () => void;
}

const ConfirmOverlay: React.FC<IConfirmMod> = ({ onOk, onClose }) => {
  return (
    <S.ContainerDiv className='modal'>
      <S.ModalContentDiv>
        <S.TitleBoxDiv>
          <S.TextStyleSpan>글을 등록 하시겠습니까?</S.TextStyleSpan>
        </S.TitleBoxDiv>
        <S.BoxButton>
          <button onClick={onClose}>취소</button>
          <S.StyleButton onClick={onOk}>확인</S.StyleButton>
        </S.BoxButton>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default ConfirmOverlay;
