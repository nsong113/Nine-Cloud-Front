import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { sadA } from 'src/states/counter';

interface TemperatureHookResult {
  humidEmotion: string;
}

const useHumid = (): TemperatureHookResult => {
  const [sadAtom, setSadAtom] = useRecoilState(sadA);
  const [humidEmotion, setHumidEmotion] = useState<string>('');

  useEffect(() => {
    if (sadAtom === '1') {
      setHumidEmotion('불쾌해요');
    } else if (sadAtom === '2') {
      setHumidEmotion('울적해요');
    } else if (sadAtom === '3') {
      setHumidEmotion('적당해요');
    } else if (sadAtom === '4') {
      setHumidEmotion('꽤 좋아요');
    } else {
      setHumidEmotion('상쾌해요');
    }
  }, [sadAtom]);

  return { humidEmotion };
};

export default useHumid;
