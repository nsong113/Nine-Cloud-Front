import React, { useState } from 'react';
import { dayList } from './test';
import * as S from './Main.styles';

const Image = () => {
  const [isHappyImg, setIsHappyImg] = useState(false);
  const [isAngryImg, setIsAngryImg] = useState(false);
  const [isSadImg, setIsSadImg] = useState(false);
  const [isGloomyImg, setIsGloomyImg] = useState(false);
  const emotionImages: { [key: string]: string | undefined } = {
    1: '/blue.png',
    2: '/Pink.png',
    3: '/Purple.png',
    4: '/Lemon.png',
  };

  const onClickHappyImg = () => {
    setIsHappyImg((prev) => !prev);
  };

  const onClickAngryImg = () => {
    setIsAngryImg((prev) => !prev);
  };

  const onClickGloomyImg = () => {
    setIsGloomyImg((prev) => !prev);
  };

  const onClickSadImg = () => {
    setIsSadImg((prev) => !prev);
  };

  const happyCount = dayList.filter(
    (emotion) => emotion?.EmotionStatus === 1
  ).length;
  const angryCount = dayList.filter(
    (emotion) => emotion?.EmotionStatus === 2
  ).length;
  const gloomyCount = dayList.filter(
    (emotion) => emotion?.EmotionStatus === 3
  ).length;
  const sadCount = dayList.filter(
    (emotion) => emotion?.EmotionStatus === 4
  ).length;
  return (
    <S.ImageWrapperDiv>
      <S.ImageBoxDiv>
        <S.ExpressionImage
          onClick={onClickHappyImg}
          src='/blue.png'
          alt='해피'
        />
        <S.CountSpan>{happyCount}</S.CountSpan>
        <S.ExpressionImage
          onClick={onClickAngryImg}
          src='/Pink.png'
          alt='화남'
        />
        <S.CountSpan>{angryCount}</S.CountSpan>
        <S.ExpressionImage
          onClick={onClickGloomyImg}
          src='/Purple.png'
          alt='우울'
        />
        <S.CountSpan>{gloomyCount}</S.CountSpan>
        <S.ExpressionImage
          onClick={onClickSadImg}
          src='/Lemon.png'
          alt='슬픔'
        />
        <S.CountSpan>{sadCount}</S.CountSpan>
      </S.ImageBoxDiv>
    </S.ImageWrapperDiv>
  );
};

export default Image;
