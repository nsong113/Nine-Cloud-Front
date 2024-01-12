import React, { useState } from 'react';

const useSetEmotionIcon = (weather: string, countAverage: number) => {
  const [emotionPicture, setEmotionPicture] = useState('');

  let emotionPath = '';

  if (weather === '1') {
    if (countAverage <= 1.6) {
      emotionPath = '/rain_sad.webp';
    } else if (countAverage <= 3.3) {
      emotionPath = '/rain_soso.webp';
    } else if (countAverage <= 5) {
      emotionPath = '/rain_happy.webp';
    }
  } else if (weather === '2') {
    if (countAverage <= 1.6) {
      emotionPath = '/cloud_sad.webp';
    } else if (countAverage <= 3.3) {
      emotionPath = '/cloud_soso.webp';
    } else if (countAverage <= 5) {
      emotionPath = '/cloud_happy.webp';
    }
  } else if (weather === '3') {
    if (countAverage <= 1.6) {
      emotionPath = '/sun_sad.webp';
    } else if (countAverage <= 3.3) {
      emotionPath = '/sun_soso.webp';
    } else if (countAverage <= 5) {
      emotionPath = '/sun_happy.webp';
    }
  } else {
    emotionPath = '/community_none.png';
  }

  if (emotionPath && emotionPath !== emotionPicture) {
    setEmotionPicture(emotionPath);
  }
  return { emotionPicture };
};

export default useSetEmotionIcon;
