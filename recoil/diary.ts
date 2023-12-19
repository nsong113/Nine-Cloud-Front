import { atom } from 'recoil';

export const sentence = atom<string>({
  key: 'sentence',
  default: '',
});
