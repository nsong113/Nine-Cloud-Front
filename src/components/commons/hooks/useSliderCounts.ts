import React, { useState } from 'react';

const useSliderCounts = (detailedContent: any) => {
  const temperatureHandle = () => {
    switch (true) {
      case detailedContent?.temperature === '1':
        return '지쳤어요';
      case detailedContent?.temperature === '2':
        return '무료해요';
      case detailedContent?.temperature === '3':
        return '그냥그래요';
      case detailedContent?.temperature === '4':
        return '좋아요';
      case detailedContent?.temperature === '5':
        return '열정넘쳐요';
      default:
        console.log('아무것도 아님');
        break;
    }
  };

  const humidHandle = () => {
    switch (true) {
      case detailedContent?.humid === '1':
        return '불쾌해요';
      case detailedContent?.humid === '2':
        return '울적해요';
      case detailedContent?.humid === '3':
        return '적당해요';
      case detailedContent?.humid === '4':
        return '꽤 좋아요';
      case detailedContent?.humid === '5':
        return '상쾌해요';
      default:
        console.log('아무것도 아님');
        break;
    }
  };

  const sleepHandle = () => {
    switch (true) {
      case detailedContent?.sleep === '1':
        return '매우 나빠요';
      case detailedContent?.sleep === '2':
        return '나빠요';
      case detailedContent?.sleep === '3':
        return '보통이에요';
      case detailedContent?.sleep === '4':
        return '좋아요';
      case detailedContent?.sleep === '5':
        return '매우 좋아요';
      default:
        console.log('아무것도 아님');
        break;
    }
  };

  return {
    temperatureHandle: temperatureHandle,
    humidHandle: humidHandle,
    sleepHandle: sleepHandle,
  };
};

export default useSliderCounts;
