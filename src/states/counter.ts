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

// export const diaryCheckToday = atom({
//   key: 'diaryCheckToday',
//   default: null,

// effects_UNSTABLE: [
//   ({ onSet }) => {
//     // 필요에 따라 객체로 변경하는 로직
//     onSet(newValue => {
//       if (newValue === null) {
//         // 일부 조건에 따라 객체로 변경
//         // 예를 들면 특정 조건을 만족할 때 객체로 설정
//         if (/* 특정 조건 */) {
//           const exampleObject = {
//             EmotionStatus: 3,
//             UserId: 27,
//             content: "",
//             createdAt: "",
//             deletedAt: null,
//             diaryId: 257,
//             image: "",
//             isPublic: true,
//             likeCount: 0,
//             sentence: "",
//             updatedAt: "",
//             viewCount: 0,
//             weather: "3",
//           };
//           onSet(exampleObject);
//         }
//       }
//     });
//   },
// ],
// });

// export const counterLabelSelector = selector({
//   key: 'counterLabelSelector',
//   get: ({ get }) => {
//     const counter = get(counterState);
//     return `현재 카운터는 ${counter} 입니다.`;
//   },
// });
