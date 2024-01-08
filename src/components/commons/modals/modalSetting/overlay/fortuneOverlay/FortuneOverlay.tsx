import React, { useEffect, useState } from 'react';
import { ICloudModal } from './FortuneOverlay.types';
import * as S from './FortuneOverlay.styles';
import { RandomSaying } from 'src/components/units/board/write/diary/RandomSentences';
import { useRecoilState } from 'recoil';
import { sentence } from 'src/states/counter';

const FortuneOverlay: React.FC<ICloudModal> = ({ goBackFortune }) => {
  const [showNote, setShowNote] = useState(false);
  const [sentenceAtom, setSentence] = useRecoilState(sentence);

  const onClickShowSaying = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setShowNote(true);
  };

  const onClickMakeRandom = () => {
    const countAverage = Number(localStorage.getItem('countAverage'));
    if (countAverage >= 0 && countAverage < 2) {
      const todayRandom =
        RandomSaying.sad[Math.floor(Math.random() * RandomSaying.sad.length)];
      setSentence(todayRandom);
    } else if (countAverage >= 2 && countAverage < 3) {
      const todayRandom =
        RandomSaying.soso[Math.floor(Math.random() * RandomSaying.soso.length)];
      setSentence(todayRandom);
    } else if (countAverage >= 3 && countAverage < 4) {
      const todayRandom =
        RandomSaying.soso[Math.floor(Math.random() * RandomSaying.soso.length)];
      setSentence(todayRandom);
    } else if (countAverage >= 5) {
      const todayRandom =
        RandomSaying.happy[
          Math.floor(Math.random() * RandomSaying.happy.length)
        ];
      setSentence(todayRandom);
    }
  };

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
          src='/fortune_break.png'
          alt='쿠키이미지'
          style={imgStyle}
          onClick={(e) => {
            onClickShowSaying(e);
            onClickMakeRandom();
          }}
        />
        {showNote && (
          <div>
            <S.ShowNoteP>{sentenceAtom}</S.ShowNoteP>
            <img
              src='/fortune_box.png'
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
  left: '30px',
};

const paperStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-170px',
  left: '-40px',
  width: '380px',
  height: '150px',
};
