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
  const [out, setOut] = useRecoilState(isOut); //밖으로 나가면 false

  const onChangeCount = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmotionAtom(event.target.value);
  };

  useEffect(() => {
    setEmotion(emotionAtomState);
    // setEmotionAtom((prev) => prev || '3');
  }, [emotionAtomState]);

  // useEffect(() => {
  //   if (out === true) {
  //     setEmotionAtom('3');
  //   }
  // }, []);

  return {
    [emotionKey]: emotion,
    onChangeCount,
  };
};

export default useSetEmotion;
