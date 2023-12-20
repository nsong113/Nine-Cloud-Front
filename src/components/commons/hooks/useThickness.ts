import React, { useState } from 'react';

const useThickness = () => {
  const [thickness, setThickness] = useState<number>(5);

  const EraserBoldHaneler = (): void => {
    setThickness(50);
  };
  const EraserBoldMediumHandler = (): void => {
    setThickness(40);
  };
  const EraserMediumHandler = (): void => {
    setThickness(30);
  };
  const EraserMediumThinHandler = (): void => {
    setThickness(20);
  };
  const EraserThinHandler = (): void => {
    setThickness(10);
  };
  
  return {
    thickness,
    EraserBoldHaneler,
    EraserBoldMediumHandler,
    EraserMediumHandler,
    EraserMediumThinHandler,
    EraserThinHandler,
  };
};

export default useThickness;
