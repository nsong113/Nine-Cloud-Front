import React, { useRef, useState } from 'react';
import * as S from './BoardWriteDraw.styles';
import { useNavigate } from 'react-router-dom';
import BoardDrawPaper from './BoardDrawPaper';
import ConfrimModal from 'src/components/commons/modals/confirm/confirmModal';
import { IoIosCheckmark } from 'react-icons/io';

const BoardWriteDraw = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClickPrevBtn = () => {
    navigate('/post3');
  };
  const onClickSubmitBtn = () => {
    navigate('/main');
  };
  const onClickMoveToCancel = () => {
    setIsModalOpen((prev) => !prev);
  };
  const onClickAddBtn = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      {isModalOpen && (
        <ConfrimModal
          onClickSubmitBtn={onClickSubmitBtn}
          onClickMoveToCancel={onClickMoveToCancel}
        />
      )}
      <S.DrawContainerDiv>
        <S.DrawWrapperUPDiv>
          <S.HeaderButtonBoxDiv>
            <S.HeaderLine></S.HeaderLine>
            <S.HeaderFlexBox>
              <S.DoneCheckBox>
                <IoIosCheckmark style={{ fontSize: '21px' }} />
                <S.OneBlackSpan />
              </S.DoneCheckBox>
              <S.DoneCheckBox>
                <IoIosCheckmark style={{ fontSize: '21px' }} />
                <S.OneBlackSpan />
              </S.DoneCheckBox>
              <S.ThreeFilledSpan>Drawing</S.ThreeFilledSpan>
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
              <S.NextButton onClick={onClickAddBtn}>등록하기</S.NextButton>
            </S.ButtonWrapperDiv>
          </S.ContainerDiv>
        </S.DrawWrapperDOWNdiv>
      </S.DrawContainerDiv>
    </>
  );
};

export default BoardWriteDraw;
