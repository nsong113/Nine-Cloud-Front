import React, { useState } from 'react';

const useSetColor = () => {
  const [color, setColor] = useState<string>('black');
  const colorHandlerBlack = (): void => {
    setColor('#000000');
  };
  const colorHandlerRed = (): void => {
    setColor('#FF2323');
  };
  const colorHandlerBlue = (): void => {
    setColor('#4BA9FF');
  };
  const colorHandlerGreen = (): void => {
    setColor('#16FF4A');
  };
  const colorHandlerOrange = (): void => {
    setColor('#FFC225');
  };
  const colorHandlerYellow = (): void => {
    setColor('#EDFF22');
  };
  const colorHandlerPurple = (): void => {
    setColor('#4E12F6');
  };
  const colorHandlerPink = (): void => {
    setColor('#DB00FF');
  };
  const colorHandlerWhite = (): void => {
    setColor('white');
  };

  return {
    color,
    setColor,
    colorHandlerBlack,
    colorHandlerRed,
    colorHandlerBlue,
    colorHandlerGreen,
    colorHandlerOrange,
    colorHandlerYellow,
    colorHandlerPurple,
    colorHandlerPink,
    colorHandlerWhite,
  };
};

export default useSetColor;
