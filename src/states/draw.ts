import { atom } from 'recoil';

export const colorA = atom({
  key: 'colorA',
  default: 'black',
});

export const thicknessA = atom({
  key: 'thicknessA',
  default: 23,
});

export const penModeA = atom({
  key: 'penModeA',
  default: true,
});

export const eraserModeA = atom({
  key: 'eraserModeA',
  default: false,
});
