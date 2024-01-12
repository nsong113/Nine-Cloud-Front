import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { countAverage, weather } from 'src/states/counter';

const useMakeEmotionEmoji = () => {
  const [weatherAtom, setWeatherAtom] = useRecoilState(weather);
  const [countAverageAtom, setCountAverageAtom] = useRecoilState(countAverage);

  const [emotionPicture, setEmotionPicture] = useState('');

  switch (true) {
    case weatherAtom === '1' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/rain_sad.webp') {
        setEmotionPicture('/rain_sad.webp');
      }
      break;
    case weatherAtom === '1' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/rain_soso.webp') {
        setEmotionPicture('/rain_soso.webp');
      }
      break;
    case weatherAtom === '1' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/rain_happy.webp') {
        setEmotionPicture('/rain_happy.webp');
      }
      break;
    case weatherAtom === '2' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/cloud_sad.webp') {
        setEmotionPicture('/cloud_sad.webp');
      }
      break;
    case weatherAtom === '2' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/cloud_soso.webp') {
        setEmotionPicture('/cloud_soso.webp');
      }
      break;
    case weatherAtom === '2' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/cloud_happy.webp') {
        setEmotionPicture('/cloud_happy.webp');
      }
      break;
    case weatherAtom === '3' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/sun_sad.webp') {
        setEmotionPicture('/sun_sad.webp');
      }
      break;
    case weatherAtom === '3' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/sun_soso.webp') {
        setEmotionPicture('/sun_soso.webp');
      }
      break;
    case weatherAtom === '3' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/sun_happy.webp') {
        setEmotionPicture('/sun_happy.webp');
      }
      break;
    default:
      // console.log('아무것도 아님');
      break;
  }

  return { emotionPicture };
};

export default useMakeEmotionEmoji;
