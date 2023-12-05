import React, { MouseEvent } from 'react';
import * as S from './alertModal.styles';

const alertModal = () => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.classList.contains('modal')) {
    }
  };
  return (
    <>
      <S.ContainerDiv className='modal' onClick={handleOverlayClick}>
        <S.ModalContentDiv></S.ModalContentDiv>
      </S.ContainerDiv>
    </>
  );
};

export default alertModal;
