import React from 'react';
import * as S from './ModalOverlay.styles';

const ModalOverlay: React.FC<IProps> = ({ onOk, onClose }) => {
  return (
    <S.ContainerDiv>
      <S.Div>
        <S.ContainerDiv className='modal'>
          <S.ModalContentDiv>
            <S.TitleBoxDiv>
              <span>글 작성을 취소 하시겠습니까?</span>
            </S.TitleBoxDiv>
            <S.BoxButton>
              <button onClick={onClose}>취소</button>
              <S.StyleButton onClick={onOk}>확인</S.StyleButton>
            </S.BoxButton>
          </S.ModalContentDiv>
        </S.ContainerDiv>
      </S.Div>
    </S.ContainerDiv>
  );
};

export default ModalOverlay;
