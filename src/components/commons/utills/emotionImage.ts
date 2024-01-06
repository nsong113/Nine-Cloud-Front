import React from 'react';

const getEmotion = (emotionStatus: number, weatherStatus: string) => {
  switch (true) {
    case weatherStatus === '1' && emotionStatus <= 1.6:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/rain_sad.webp';
    case weatherStatus === '1' && emotionStatus > 1.6 && emotionStatus <= 3.3:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/rain_soso.webp';

    case weatherStatus === '1' && emotionStatus > 3.3 && emotionStatus <= 5:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/rain_happy.webp';

    case weatherStatus === '2' && emotionStatus <= 1.6:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/cloud_sad.webp';

    case weatherStatus === '2' && emotionStatus > 1.6 && emotionStatus <= 3.3:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/cloud_soso.webp';

    case weatherStatus === '2' && emotionStatus > 3.3 && emotionStatus <= 5:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/cloud_happy.webp';

    case weatherStatus === '3' && emotionStatus <= 1.6:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/sun_sad.webp';

    case weatherStatus === '3' && emotionStatus > 1.6 && emotionStatus <= 3.3:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/sun_soso.webp';

    case weatherStatus === '3' && emotionStatus > 3.3 && emotionStatus <= 5:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/sun_happy.webp';

    default:
      return 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/blank_circle.png';
  }
};

export default getEmotion;
