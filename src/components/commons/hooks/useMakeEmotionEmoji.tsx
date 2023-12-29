import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { countAverage, weather } from 'src/states/counter';

const useMakeEmotionEmoji = () => {
  const [weatherAtom, setWeatherAtom] = useRecoilState(weather);
  const [countAverageAtom, setCountAverageAtom] = useRecoilState(countAverage);
  const [emotionPicture, setEmotionPicture] = useState('');

  console.log(countAverageAtom);

  switch (true) {
    case weatherAtom === '1' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/rain_sad.png') {
        setEmotionPicture('/rain_sad.png');
      }
      break;
    case weatherAtom === '1' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/rain_soso.png') {
        setEmotionPicture('/rain_soso.png');
      }
      break;
    case weatherAtom === '1' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/rain_happy.png') {
        setEmotionPicture('/rain_happy.png');
      }
      break;
    case weatherAtom === '2' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/cloud_sad.png') {
        setEmotionPicture('/cloud_sad.png');
      }
      break;
    case weatherAtom === '2' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/cloud_soso.png') {
        setEmotionPicture('/cloud_soso.png');
      }
      break;
    case weatherAtom === '2' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/cloud_happy.png') {
        setEmotionPicture('/cloud_happy.png');
      }
      break;
    case weatherAtom === '3' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/sun_sad.png') {
        setEmotionPicture('/sun_sad.png');
      }
      break;
    case weatherAtom === '3' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/sun_soso.png') {
        setEmotionPicture('/sun_soso.png');
      }
      break;
    case weatherAtom === '3' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/sun_happy.png') {
        setEmotionPicture('/sun_happy.png');
      }
      break;
    default:
      console.log('아무것도 아님');
      break;
  }

  return { emotionPicture };
};

export default useMakeEmotionEmoji;
