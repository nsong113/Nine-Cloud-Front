import { atom, selector } from 'recoil';

export const countAverage = atom({
  key: 'countAverage',
  default: 5,
});

export const happyA = atom({
  key: 'happyA',
  default: '5',
});

export const sadA = atom({
  key: 'sadA',
  default: '5',
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
