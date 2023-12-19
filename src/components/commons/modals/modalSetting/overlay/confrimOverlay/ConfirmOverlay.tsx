import React, { useState } from 'react';
import * as S from './ConfirmOverlay.styles';
import { IConfirmMod } from './ConfirmOverlay.types';
import { useMutation } from 'react-query';
import { IpostDiaryItem } from 'src/apis/apiesType';
import { postDiary } from 'src/apis/diary';

const ConfirmOverlay: React.FC<IConfirmMod> = ({
  onClickGotoMain,
  onClickGotoPost2,
  postDiaryItem,
}) => {
  const postDiaryMutation = useMutation<void, Error, IpostDiaryItem, unknown>(
    postDiary,
    {
      onSuccess: () => {
        onClickGotoMain();
      },
    }
  );

  const onClickPostHandler = () => {
    if (postDiaryItem) {
      postDiaryMutation.mutate(postDiaryItem);
      console.log(postDiaryItem);
    }
  };

  return (
    <S.ContainerDiv className='modal' onClick={onClickGotoPost2}>
      <S.ModalContentDiv>
        <img src='/angry.png' alt='최종 감정이모티콘' />
        <S.TitleBoxDiv>
          <S.TextStyleSpan>
            <S.TextStyleSpanH5>
              오늘의 감정일기를 등록하시겠어요?
            </S.TextStyleSpanH5>
            <S.TextStyleSpanP>
              등록 후에도 수정할 수 있으니 <br /> 자유롭게 등록해보세요!
            </S.TextStyleSpanP>
          </S.TextStyleSpan>
        </S.TitleBoxDiv>
        <S.BoxButton>
          <S.CancelButton onClick={onClickGotoPost2}>돌아가기</S.CancelButton>
          <S.StyleButton
            onClick={() => {
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
