import { useRecoilState } from 'recoil';
import { thicknessA } from 'src/states/draw';

const useThickness = () => {
  const [thicknessAtom, setThicknessAtom] = useRecoilState(thicknessA);

  const EraserBoldHaneler = (): void => {
    setThicknessAtom(50);
  };
  const EraserBoldMediumHandler = (): void => {
    setThicknessAtom(43);
  };
  const EraserMediumHandler = (): void => {
    setThicknessAtom(23);
  };
  const EraserMediumThinHandler = (): void => {
    setThicknessAtom(16);
  };
  const EraserThinHandler = (): void => {
    setThicknessAtom(8);
  };

  return {
    EraserBoldHaneler,
    EraserBoldMediumHandler,
    EraserMediumHandler,
    EraserMediumThinHandler,
    EraserThinHandler,
  };
};

export default useThickness;
