import React from 'react';
import { ICloudModal } from '../../../fortuneCloud/FortuneCloudModal.types';
import * as S from './FortuneOverlay.styles';

const FortuneOverlay: React.FC<ICloudModal> = ({ goBackFortune }) => {
  const onClickShowSaying = () => {};

  return (
    <S.ContainerDiv
      className='modal'
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (!target.matches('img')) {
          goBackFortune();
        }
      }}
    >
      <S.ModalContentDiv>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src='/cookie.png'
          alt='쿠키이미지'
          style={imgStyle}
          onClick={onClickShowSaying}
        ></img>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default FortuneOverlay;

const imgStyle = {
  width: '80%',
};
