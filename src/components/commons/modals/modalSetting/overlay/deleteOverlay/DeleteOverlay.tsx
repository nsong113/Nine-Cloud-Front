import React, { MouseEvent } from 'react';
import * as S from './DeleteOverlay.styles';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import { IDelete } from './DeleteOverlay.types';
import Portal from 'src/components/commons/utills/Portal/Portal';

const DeleteOverlay: React.FC<IDelete> = ({ onOk, onClose }) => {
  const onClickCancel = () => {
    onClose();
  };
  const onClickModalDiv = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onClickOk = () => {
    onOk();
  };
  return (
    <Portal>
      <S.ContainerDiv className='modal' onClick={onClose}>
        <Animation3>
          <S.ModalContentDiv onClick={onClickModalDiv}>
            <img src='/cloud.png.png' alt='구름' />
            <S.ContentsDiv>
              <S.TitleSpan>나인 클라우드를 정말 떠나시겠어요?</S.TitleSpan>
              <S.SubTitleSpan>
                떠나시면 작성하신 마음 일기는 모두 사라져요!
              </S.SubTitleSpan>
            </S.ContentsDiv>
            <S.ButtonWrapperDiv>
              <S.CancleButton onClick={onClickCancel}>
                다시 생각해볼게요
              </S.CancleButton>
              <S.OkButton onClick={onClickOk}>네 떠날래요</S.OkButton>
            </S.ButtonWrapperDiv>
          </S.ModalContentDiv>
        </Animation3>
      </S.ContainerDiv>
    </Portal>
  );
};

export default DeleteOverlay;
