export const moveEffect = {
  initial: {
    y: -300,
    opacity: 1,
  },
  in: {
    y: 0,
    opacity: 1,
  },
  out: {
    y: 100,
    opacity: 1,
  },
};

export const windEffect = {
  initial: {
    x: 0,
    y: -50,
    opacity: 1,
  },
  in: {
    x: -1800,
    y: -50,
    opacity: 1,
  },
  out: {
    x: 200,
    y: -50,
    opacity: 1,
  },
};

export const pageEffect = {
  initial: {
    rotate: 180,
    opacity: 1,
    x: 300,
  },
  in: {
    rotate: -10,
    opacity: 1,
    x: -150,
  },
  out: {
    rotate: -90,
    opacity: 1,
    x: 0,
  },
};

export const rollEffect = {
  initial: {
    x: -300,
    opacity: 1,
    rotate: -180, // 초기 회전 각도 설정
  },
  in: {
    x: 150,
    opacity: 1,
    rotate: 10, // 회전 각도를 0으로 설정하여 굴러오는 상태
  },
  out: {
    x: 0,
    opacity: 1,
    rotate: 90, // 회전 각도를 180으로 설정하여 사라지는 상태
  },
};

export const rollingSquere = {
  initial: {
    x: -1200,
    y: 0,
    opacity: 1,
    Infinity,
  },
  in: {
    x: 0,
    y: 100,
    opacity: 1,
  },
  out: {
    x: 0,
    opacity: 1,
  },
};

export const fancyEffect = {
  initial: {
    scale: 0.8,
    opacity: 0,
    rotate: -180,
    backgroundColor: '#ffcc00', // 초기 배경색
  },
  in: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    backgroundColor: '#4caf50', // 애니메이션 중 배경색
  },
  out: {
    scale: 1.2,
    opacity: 0,
    rotate: 180,
    backgroundColor: '#ff0000', // 사라질 때 배경색
  },
};
