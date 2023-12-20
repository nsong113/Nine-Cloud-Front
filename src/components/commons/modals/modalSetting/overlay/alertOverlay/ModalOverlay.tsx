import React from 'react';
import * as S from './ModalOverlay.styles';

const ModalOverlay: React.FC<IProps> = ({ onOk, onClose }) => {
  return (
    <S.ContainerDiv>
      <S.Div>
        <S.ContainerDiv className='modal'>
          <S.ModalContentDiv>
            <S.TitleBoxDiv>
              <img src='/alert.png' alt='경고' />
              <S.TitleSpan>작성을 중단하고 나가시겠습니까?</S.TitleSpan>
              <S.SubTitleSpan>입력하신 내용이 모두 사라져요!</S.SubTitleSpan>
            </S.TitleBoxDiv>
            <S.BoxButton>
              <S.OkButton onClick={onClose}>머무르기</S.OkButton>
              <S.CancelButton onClick={onOk}>나가기</S.CancelButton>
            </S.BoxButton>
          </S.ModalContentDiv>
        </S.ContainerDiv>
      </S.Div>
    </S.ContainerDiv>
  );
};

export default ModalOverlay;
