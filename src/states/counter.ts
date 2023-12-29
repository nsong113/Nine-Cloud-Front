import { atom } from 'recoil';

export const countAverage = atom({
  key: 'countAverage',
  default: 53,
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
