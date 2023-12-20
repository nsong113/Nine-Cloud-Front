import { atom, selector } from 'recoil';

export const countAverage = atom({
  key: 'countAverage',
  default: 5,
});

export const happyA = atom({
  key: 'happy',
  default: '5',
});
export const sadA = atom({
  key: 'happy',
  default: '5',
});

export const weather = atom({
  key: 'weather',
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

// export const counterLabelSelector = selector({
//   key: 'counterLabelSelector',
//   get: ({ get }) => {
//     const counter = get(counterState);
//     return `현재 카운터는 ${counter} 입니다.`;
//   },
// });
