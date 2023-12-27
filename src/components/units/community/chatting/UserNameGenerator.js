import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const UserNameGenerator = () => {
  const firstName = [
    '화가난',
    '기분 좋은',
    '그냥 그런',
    '우울한',
    '칙칙한',
    '행복한',
    '귀여운',
    '멋진',
    '예쁜',
    '빼어난',
    '머리 아픈',
    '배가 아픈',
    '배고픈',
    '놀고 싶은',
    '정신 나간',
    '미친',
    '화가나면서 우울하고 칙칙하지만 행복하고 귀엽고 기분 좋으면서 그냥 그렇지만 머리와 배와 정신이 아픈',
  ];
  const secondName = [
    '구름',
    '비',
    '햇빛',
    '나뭇잎',
    '강',
    '하늘',
    '물',
    '돌',
    '바다',
    '안개',
    '바람',
    '번개',
    '불',
    '소용돌이',
    '폭포',
  ];

  const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const userNameCreate = `${getRandomElement(firstName)} ${getRandomElement(
    secondName
  )}. ${uuidv4()}`;

  return userNameCreate;
};

export default UserNameGenerator;
