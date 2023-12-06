import React, { useRef } from 'react';
import * as S from './BoardWriteDraw.styles';
import { useNavigate } from 'react-router-dom';
import BoardDrawPaper from './BoardDrawPaper';

const BoardWriteDraw = () => {
  const navigate = useNavigate();
  const onClickNextBtn = () => {
    navigate('/post3');
  };

  const onClickPrevBtn = () => {
    navigate('/post');
  };

  //캔버스 useRef로 선택하기
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <S.DrawContainerDiv>
      <S.DrawWrapperUPDiv>
        <S.HeaderButtonBoxDiv>
          <S.HeaderLine></S.HeaderLine>
          <S.HeaderFlexBox>
            <S.OneBlackSpan />
            <S.ThreeFilledSpan>Drawing</S.ThreeFilledSpan>
            <S.TwoBlankSpan />
          </S.HeaderFlexBox>
        </S.HeaderButtonBoxDiv>
      </S.DrawWrapperUPDiv>
      <S.DrawWrapperDOWNdiv>
        <S.ContainerDiv>
          <S.DrawTitleBox>
            <S.DrawWriteTitleH3>
              오늘의 이슈를 그림으로 기록해보세요!
            </S.DrawWriteTitleH3>
          </S.DrawTitleBox>
          <BoardDrawPaper width={400} height={380} />
          <S.ButtonWrapperDiv>
            <S.PrevButton onClick={onClickPrevBtn}>이전</S.PrevButton>
            <S.NextButton onClick={onClickNextBtn}>다음</S.NextButton>
          </S.ButtonWrapperDiv>
        </S.ContainerDiv>
      </S.DrawWrapperDOWNdiv>
    </S.DrawContainerDiv>
  );
};

export default BoardWriteDraw;
