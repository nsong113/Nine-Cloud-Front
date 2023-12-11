//이동;

export const moveEffect = {
  initial: {
    x: -100,
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: 100,
    opacity: 0,
  },
};

// //회전
// export const pageEffect = {
//   initial: {
//     rotate: -90,
//     opacity: 0,
//   },
//   in: {
//     rotate: 0,
//     opacity: 1,
//   },
//   out: {
//     rotate: 90,
//     opacity: 0,
//   },
// };

//스케일
export const pageEffect = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  in: {
    scale: 1,
    opacity: 1,
  },
  out: {
    scale: 1.2,
    opacity: 0,
  },
};
