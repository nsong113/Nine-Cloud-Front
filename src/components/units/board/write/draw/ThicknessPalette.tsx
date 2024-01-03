import React from 'react';
import useThickness from 'src/components/commons/hooks/useThickness';
import * as S from './BoardWriteDraw.styles';

const ThicknessPalette = () => {
  const {
    EraserBoldHaneler,
    EraserBoldMediumHandler,
    EraserMediumHandler,
    EraserMediumThinHandler,
    EraserThinHandler,
  } = useThickness();

  const thicknessOptions = [
    { size: 10, handler: EraserThinHandler },
    { size: 20, handler: EraserMediumThinHandler },
    { size: 28, handler: EraserMediumHandler },
    { size: 35, handler: EraserBoldMediumHandler },
    { size: 43, handler: EraserBoldHaneler },
  ];

  return (
    <S.ThicknessBoxDiv>
      <S.SecondToggle />
      <S.ColorEraserSettingDiv>
        <S.EraserThicknessDiv>
          {thicknessOptions.map((option, index) => (
            <S.ThicknessOption
              key={index}
              size={option.size}
              onClick={option.handler}
            ></S.ThicknessOption>
          ))}
        </S.EraserThicknessDiv>
      </S.ColorEraserSettingDiv>
    </S.ThicknessBoxDiv>
  );
};

export default React.memo(ThicknessPalette);
