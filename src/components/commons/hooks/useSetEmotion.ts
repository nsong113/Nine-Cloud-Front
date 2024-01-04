/* eslint-disable*/
import React, { ChangeEvent, useEffect, useState } from 'react';

import { useRecoilState, RecoilState } from 'recoil';
import { happyA, isOut, sadA, sleep, weather } from 'src/states/counter';

interface IuseSetEmotion {
  emotionKey: string;
  emotionAtom: RecoilState<string>;
}

const useSetEmotion = ({ emotionKey, emotionAtom }: IuseSetEmotion) => {
  const [emotion, setEmotion] = useState<string>('3');
  const [emotionAtomState, setEmotionAtom] =
    useRecoilState<string>(emotionAtom);

  const onChangeCount = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmotionAtom(event.target.value);
  };

  useEffect(() => {
    setEmotion(emotionAtomState);
  }, [emotionAtomState]);

  return {
    [emotionKey]: emotion,
    onChangeCount,
  };
};

export default useSetEmotion;
