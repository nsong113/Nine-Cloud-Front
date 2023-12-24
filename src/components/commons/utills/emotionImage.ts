import React from 'react';

const getEmotion = (emotionStatus: any, weatherStatus: any): any => {
    switch (true) {
      case weatherStatus === '1' && emotionStatus <= 1.6:
        return '/rain_sad.png';
      case weatherStatus === '1' && emotionStatus > 1.6 && emotionStatus <= 3.3:
        return '/rain_soso.png';

      case weatherStatus === '1' && emotionStatus > 3.3 && emotionStatus <= 5:
        return '/rain_happy.png';

      case weatherStatus === '2' && emotionStatus <= 1.6:
        return '/cloud_sad.png';

      case weatherStatus === '2' && emotionStatus > 1.6 && emotionStatus <= 3.3:
        return '/cloud_soso.png';

      case weatherStatus === '2' && emotionStatus > 3.3 && emotionStatus <= 5:
        return '/cloud_happy.png';

      case weatherStatus === '3' && emotionStatus <= 1.6:
        return '/sun_sad.png';

      case weatherStatus === '3' && emotionStatus > 1.6 && emotionStatus <= 3.3:
        return '/sun_soso.png';

      case weatherStatus === '3' && emotionStatus > 3.3 && emotionStatus <= 5:
        return '/sun_happy.png';

      default:
        return '/blank_circle.png';
    }
  };

export default getEmotion;
