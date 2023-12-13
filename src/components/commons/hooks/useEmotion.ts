import React from 'react'
import { dayList } from 'src/components/units/main/test';

const useEmotion = () => {

  const filteredDayList = dayList.filter((el) => el !== null);

  const emotionImages: { [key: string]: string | undefined } = {
    1: '/blue.png',
    2: '/Pink.png',
    3: '/Purple.png',
    4: '/Lemon.png',
  };

  const getEmotion = (emotionStatus: any) => {
    return emotionImages[emotionStatus] || '/blank.png';
  };

  const getEmotionStatusForDate = (date: string) => {
    const matchingDay = filteredDayList.find(
      (el: any) =>
        //day 일치여부 조회 로직
        el?.date && parseInt(el.date.split('.')[2]).toString() === date
    );

    return matchingDay ? matchingDay.EmotionStatus : 0;
  };



  return {
    getEmotion,
    getEmotionStatusForDate
  }
  
}

export default useEmotion