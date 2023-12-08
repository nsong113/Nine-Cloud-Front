import React, { useRef, useState } from 'react';
import * as S from './BoardWriteDraw.styles';
import { useNavigate } from 'react-router-dom';
import BoardDrawPaper from './BoardDrawPaper';
import ConfrimModal from 'src/components/commons/modals/confirm/confirmModal';

const BoardWriteDraw = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const onClickNextBtn = () => {
    navigate('/post3');
    //이때 이미지 저장해야 해야 함
  };

  const onClickPrevBtn = () => {
    navigate('/post');
  };

  //캔버스 useRef로 선택하기
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // //이미지 저장하기
  //https://velog.io/@nala723/%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%9C%BC%EB%A1%9C-%EA%B7%B8%EB%A6%B0-%EA%B7%B8%EB%A6%BC-%EC%84%9C%EB%B2%84%EC%99%80-%EC%86%8C%ED%86%B5-postget

  // formData.append('title',title)

  //ref props로 전달하기
  const onClickMoveToMain = () => {
    navigate('/main');
  };
  const onClickSubmitBtn = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      {isModalOpen && (
        <ConfrimModal
          onClickMoveToMain={onClickMoveToMain}
          onClickSubmitBtn={onClickSubmitBtn}
        />
      )}
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
              <S.NextButton onClick={onClickSubmitBtn}>등록하기</S.NextButton>
            </S.ButtonWrapperDiv>
          </S.ContainerDiv>
        </S.DrawWrapperDOWNdiv>
      </S.DrawContainerDiv>
    </>
  );
};

export default BoardWriteDraw;
