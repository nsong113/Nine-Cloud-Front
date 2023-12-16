import React from 'react';
import * as S from './DeleteOverlay.styles';

import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import { IDelete } from '../../../delete/DeleteModal.types';

const DeleteOverlay: React.FC<IDelete> = ({ onOk, onClose }) => {
  const onClickCancel = () => {
    onClose();
  };
  const onClickModalDiv = (e: any) => {
    e.stopPropagation();
  };

  const onClickOk = () => {
    onOk();
  };
  return (
    <S.ContainerDiv className='modal' onClick={onClose}>
      <Animation3>
        <S.ModalContentDiv onClick={onClickModalDiv}>
          <div>
            <h2>정말로 삭제 하실겁니까?</h2>
          </div>
          <div>
            <button onClick={onClickCancel}>취소</button>
            <button onClick={onClickOk}>확인</button>
          </div>
        </S.ModalContentDiv>
      </Animation3>
    </S.ContainerDiv>
  );
};

export default DeleteOverlay;
