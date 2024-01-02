import React from 'react';
import { PostBtnPropsI } from './PostBtn.types';
import * as S from './PostBtn.style';

const PostBtn = (props: PostBtnPropsI) => {
  return (
    <S.ButtonBoxDiv>
      {props.page === 'emotion' && (
        <>
          <S.PrevButton onClick={props.onClickMoveToMain}>이전</S.PrevButton>
          <S.NextButton onClick={props.onClickNextPage}>다음</S.NextButton>
        </>
      )}
      {props.page === 'write' && (
        <>
          <S.PrevButton onClick={props.onClickPrevPage}>이전</S.PrevButton>
          <S.NextButton onClick={props.onClickNextPageBtn}>다음</S.NextButton>
        </>
      )}
      {props.page === 'draw' && (
        <>
          <S.PrevButton onClick={props.onClickPrevBtn}>이전</S.PrevButton>
          {props.onClickAddBtn && (
            <S.NextButton
              onClick={() => {
                props.onClickAddBtn && props.onClickAddBtn();
              }}
            >
              다음
            </S.NextButton>
          )}
        </>
      )}
      {props.page === 'alert' && (
        <>
          <S.PrevButton onClick={props.onClose}>머무르기</S.PrevButton>
          <S.NextButton onClick={props.onOk}>나가기</S.NextButton>
        </>
      )}
      {props.page === 'confirm' && (
        <>
          <S.PrevButton onClick={props.onClickGotoPost2}>돌아가기</S.PrevButton>
          <S.NextButton onClick={props.onClickPostHandler}>
            등록하기
          </S.NextButton>
        </>
      )}
    </S.ButtonBoxDiv>
  );
};

export default React.memo(PostBtn);
