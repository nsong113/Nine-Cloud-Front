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
    <S.ContainerDiv>
      <S.ProgressWrapperDiv>
        <S.OneBlankSpan size={30} />
        <S.TwoFilledSpan size={30} />
        <S.ThreeBlankSpan size={30} />
      </S.ProgressWrapperDiv>
      <div>
        <h3>오늘의 이슈를 그림으로 기록해보세요!</h3>
      </div>
      <BoardDrawPaper width={417} height={467} />
      <S.ButtonWrapperDiv>
        <S.PrevButton onClick={onClickPrevBtn}>이전</S.PrevButton>
        <S.NextButton onClick={onClickNextBtn}>다음</S.NextButton>
      </S.ButtonWrapperDiv>
    </S.ContainerDiv>
  );
};

export default BoardWriteDraw;
