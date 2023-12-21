import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { happyA } from 'src/states/counter';

interface TemperatureHookResult {
  happyEmotion: string;
}

const useTemperature = (): TemperatureHookResult => {
  const [happyAtom, setHappyAtom] = useRecoilState(happyA);
  const [happyEmotion, setHappyEmotion] = useState<string>('');

  useEffect(() => {
    if (happyAtom === '1') {
      setHappyEmotion('지쳤어요');
    } else if (happyAtom === '2') {
      setHappyEmotion('무료해요');
    } else if (happyAtom === '3') {
      setHappyEmotion('그냥그래요');
    } else if (happyAtom === '4') {
      setHappyEmotion('의기양양해요');
    } else {
      setHappyEmotion('열정넘쳐요');
    }
  }, [happyAtom]);

  //지금 내가 필요한게,, 만약 3점이면 이거 2점이면 이거 하는 리턴값이 필요한것..
  return { happyEmotion };
};

export default useTemperature;
