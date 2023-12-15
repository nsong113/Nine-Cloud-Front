import React, { useState } from 'react';
import { ICloudModal } from '../../../fortuneCloud/FortuneCloudModal.types';
import * as S from './FortuneOverlay.styles';
import { RandomSaying } from 'src/components/units/board/write/diary/RandomSentences';

const FortuneOverlay: React.FC<ICloudModal> = ({
  goBackFortune,
  todayRandomSaying,
  setTodayRandomSaying,
}) => {
  const [showNote, setShowNote] = useState(false);

  const onClickShowSaying = () => {
    setShowNote(true);
  };
  const onClickMakeRandom = () => {
    const existedSentence = localStorage.getItem('sentence');
    if (existedSentence) {
      return alert('오늘의 명언을 이미 뽑으셨습니다. 내일 다시 뽑아보세요!');
    }

    const countAverage = Number(localStorage.getItem('countAverage'));
    if (countAverage >= 0 && countAverage < 2) {
      const todayRandom =
        RandomSaying.sad[Math.floor(Math.random() * RandomSaying.sad.length)];
      setTodayRandomSaying(todayRandom);
    } else if (countAverage >= 2 && countAverage < 3) {
      const todayRandom =
        RandomSaying.soso[Math.floor(Math.random() * RandomSaying.soso.length)];
      setTodayRandomSaying(todayRandom);
    } else if (countAverage >= 3 && countAverage < 4) {
      const todayRandom =
        RandomSaying.soso[Math.floor(Math.random() * RandomSaying.soso.length)];
      setTodayRandomSaying(todayRandom);
    } else if (countAverage >= 5) {
      const todayRandom =
        RandomSaying.happy[
          Math.floor(Math.random() * RandomSaying.happy.length)
        ];
      setTodayRandomSaying(todayRandom);
    }
  };

  localStorage.setItem('sentence', todayRandomSaying);

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
          onClick={() => {
            onClickShowSaying();
            onClickMakeRandom();
          }}
        />
        {showNote && (
          <div>
            <S.ShowNoteP>{todayRandomSaying}</S.ShowNoteP>
            <img
              src='/EllipseFortune.png'
              alt='포춘쿠키 종이'
              style={paperStyle}
            />
          </div>
        )}
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default FortuneOverlay;

const imgStyle: React.CSSProperties = {
  width: '80%',
  position: 'absolute',
  top: '-40px',
  left: '40px',
};

const paperStyle: React.CSSProperties = {
  position: 'absolute',
};
