import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import * as S from './BoardWriteDraw.styles';
import useSetColor from 'src/components/commons/hooks/useSetColor';
import { useRecoilState } from 'recoil';
import { colorA, eraserModeA, penModeA } from 'src/states/draw';

const ColorPalette = () => {
  const [colorAtom, setColorAtom] = useRecoilState<string>(colorA);
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const [penMode, setPenMode] = useRecoilState(penModeA);
  const [eraserMode, setEraserMode] = useRecoilState(eraserModeA);

  const {
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
  } = useSetColor();

  useEffect(() => {
    if (penMode && !eraserMode) {
      setColorAtom(color);
    }
  }, [
    colorHandlerBlack,
    colorHandlerRed,
    colorHandlerOrange,
    colorHandlerYellow,
    colorHandlerGreen,
    colorHandlerBlue,
    colorHandlerPurple,
    colorHandlerPink,
  ]);

  const colors = [
    { color: 'black', handler: colorHandlerBlack },
    { color: '#FF2323', handler: colorHandlerRed },
    { color: '#FFC225', handler: colorHandlerOrange },
    { color: '#EDFF22', handler: colorHandlerYellow },
    { color: '#16FF4A', handler: colorHandlerGreen },
    { color: '#4BA9FF', handler: colorHandlerBlue },
    { color: '#4E12F6', handler: colorHandlerPurple },
    { color: '#DB00FF', handler: colorHandlerPink },
  ];

  const onChangePickColorHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const colorPicker = colorPickerRef.current;
    if (colorPicker) {
      setColor(event.target.value);
      setColorAtom(event.target.value);
    }
  };

  return (
    <S.ColorSettingDiv>
      <S.ColorPaletteFlexDiv>
        {colors.map((palette, index) => (
          <S.Palette
            key={index}
            color={palette.color}
            onClick={palette.handler}
          ></S.Palette>
        ))}
        <input
          type='color'
          id='color'
          ref={colorPickerRef}
          onChange={onChangePickColorHandler}
          value={colorAtom}
        ></input>
      </S.ColorPaletteFlexDiv>
    </S.ColorSettingDiv>
  );
};

export default React.memo(ColorPalette);
