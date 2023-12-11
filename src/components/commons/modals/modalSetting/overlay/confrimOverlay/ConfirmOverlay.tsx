import React, { useState } from 'react';
import * as S from './ConfirmOverlay.styles';
import { IConfirmMod } from './ConfirmOverlay.types';
import { useMutation } from 'react-query';
import { IpostDiaryItem } from 'src/apis/apiesType';
import { postDiary } from 'src/apis/diary';

const ConfirmOverlay: React.FC<IConfirmMod> = ({
  onOk,
  onClose,
  postDiaryItem,
}) => {
  const postDiaryMutation = useMutation<void, Error, IpostDiaryItem, unknown>(
    postDiary
  );

  const onClickPostHandler = () => {
    if (postDiaryItem) {
      postDiaryMutation.mutate(postDiaryItem);
    }
  };

  return (
    <S.ContainerDiv
      className='modal'
      onClick={onClose}
      // $isModalOpen={isModalOpen}
    >
      <S.ModalContentDiv>
        <S.TitleBoxDiv>
          <S.TextStyleSpan>글을 등록 하시겠습니까?</S.TextStyleSpan>
        </S.TitleBoxDiv>
        <S.BoxButton>
          <button onClick={onClose}>취소</button>
          <S.StyleButton
            onClick={() => {
              // onOk?.();
              onClickPostHandler();
            }}
          >
            확인
          </S.StyleButton>
        </S.BoxButton>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default ConfirmOverlay;
