import { atom } from 'recoil';

export const countAverage = atom({
  key: 'countAverage',
  default: 3,
});

export const happyA = atom({
  key: 'happyA',
  default: '3',
});

export const sadA = atom({
  key: 'sadA',
  default: '3',
});

export const weather = atom({
  key: 'weather',
  default: '2',
});

export const sleep = atom({
  key: 'sleep',
  default: '2',
});

export const contents = atom({
  key: 'contents',
  default: '',
});

export const isPublic = atom({
  key: 'isPublic',
  default: true,
});

export const isOut = atom({
  key: 'isOut',
  default: true,
});

export const sentence = atom({
  key: 'sentence',
  default: '',
});

export const image = atom({
  key: 'image',
  default: '',
});

export const cloudValidate = atom({
  key: 'cloudValidate',
  default: true,
});
