import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { weather } from 'src/states/counter';

interface TemperatureHookResult {
  weatherToday: string;
}

const useWeather = (): TemperatureHookResult => {
  const [weatherAtom, setWeatherAtom] = useRecoilState(weather);
  const [weatherToday, setWeatherToday] = useState<string>('');

  useEffect(() => {
    if (weatherAtom === '1') {
      setWeatherToday('비 왔어요');
    } else if (weatherAtom === '2') {
      setWeatherToday('흐렸어요');
    } else {
      setWeatherToday('맑았어요');
    }
  }, [weatherAtom]);

  return { weatherToday };
};

export default useWeather;
