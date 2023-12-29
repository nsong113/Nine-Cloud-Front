/* eslint-disable*/

import React, { ChangeEvent, useEffect, useState } from 'react';

import { useRecoilState, RecoilState } from 'recoil';
import { happyA, sadA, sleep, weather } from 'src/states/counter';

interface IuseSetEmotion {
  emotionKey: string;
  emotionAtom: RecoilState<string>;
}

const useSetEmotion = ({ emotionKey, emotionAtom }: IuseSetEmotion) => {
  // const [happy, setHappy] = useState('3');
  // const [sad, setSad] = useState('3');
  // const [todayWeather, setTodayWeather] = useState('3');
  // const [todaySleep, setSleep] = useState('3');

  // const [happyAtom, setHappyAtom] = useRecoilState(happyA);
  // const [sadAtom, setSadAtom] = useRecoilState(sadA);
  // const [weatherToday, setWeatherToday] = useRecoilState(weather);
  // const [sleepToday, setSleepToday] = useRecoilState(sleep);

  const [emotion, setEmotion] = useState<string>('3');
  const [emotionAtomState, setEmotionAtom] =
    useRecoilState<string>(emotionAtom);

  const onChangeCount = (event: ChangeEvent<HTMLInputElement>): void => {
    // const numericValue = parseInt(event.target.value);
    // setEmotionAtom(isNaN(numericValue) ? '' : numericValue.toString());
    console.log('도착했슈');
    const value = event.target.value as string;
    setEmotionAtom(value);
    // setEmotionAtom(event.target.value.toString());
    console.log(event.target.value);
  };

  useEffect(() => {
    // if (!emotionAtomState) return;
    // setEmotion(emotionAtomState);
    setEmotionAtom((prev) => prev || '3');
  }, [emotionAtomState]);

  ///////////////

  // const onChangeHappyCount = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setHappyAtom(event.target.value);
  // };

  // const onChangeSadCount = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setSadAtom(event.target.value);
  // };
  // const onChangeWeatherCount = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setWeatherToday(event.target.value);
  // };
  // const onChangeTodaySleep = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setSleepToday(event.target.value);
  // };

  // useEffect(() => {
  //   setHappy(happyAtom);
  //   setSad(sadAtom);
  //   setTodayWeather(weatherToday);
  //   setSleep(sleepToday);
  // }, [happyAtom, sadAtom, weatherToday, sleepToday]);

  return {
    // happy,
    // sad,
    // todayWeather,
    // todaySleep,
    // onChangeHappyCount,
    // onChangeSadCount,
    // onChangeWeatherCount,
    // onChangeTodaySleep,

    [emotionKey]: emotionAtomState,
    onChangeCount,
  };
};

export default useSetEmotion;
