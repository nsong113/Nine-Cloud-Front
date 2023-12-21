import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { sleep } from 'src/states/counter';

const useSleep = () => {
  const [sleepAtom, setSleepAtom] = useRecoilState(sleep);
  const [sleepToday, setSleepToday] = useState<string>('');

  useEffect(() => {
    if (sleepAtom === '1') {
      setSleepToday('매우 나빠요');
    } else if (sleepAtom === '2') {
      setSleepToday('나빠요');
    } else if (sleepAtom === '3') {
      setSleepToday('보통이에요');
    } else if (sleepAtom === '4') {
      setSleepToday('좋아요');
    } else {
      setSleepToday('매우 좋아요');
    }
  }, [sleepAtom]);

  return { sleepToday };
};

export default useSleep;
