import React from 'react';
import * as S from './BoardWriteDraw.styles';
import { useNavigate } from 'react-router-dom';

const BoardWriteDraw = () => {
  const navigate = useNavigate();
  const onClickNextBtn = () => {
    navigate('/post3');
  };

  const onClickPrevBtn = () => {
    navigate('/post');
  };

  return (
    <S.ContainerDiv>
      <S.ProgressWrapperDiv>
        <S.OneBlankSpan size={30} />
        <S.TwoFilledSpan size={30} />
        <S.ThreeBlankSpan size={30} />
      </S.ProgressWrapperDiv>
      <div>
        <h3>그림그리기</h3>
      </div>
      <S.ContentsDiv></S.ContentsDiv>
      <S.ButtonWrapperDiv>
        <S.PrevButton onClick={onClickPrevBtn}>이전</S.PrevButton>
        <S.NextButton onClick={onClickNextBtn}>다음</S.NextButton>
      </S.ButtonWrapperDiv>
    </S.ContainerDiv>
  );
};

export default BoardWriteDraw;
