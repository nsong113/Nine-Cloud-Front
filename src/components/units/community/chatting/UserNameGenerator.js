import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const UserNameGenerator = () => {
  const firstName = [
    '기분 좋은',
    '즐거운',
    '행복한',
    '신난',
    '멋진',
    '예쁜',
    '귀여운',
    '빼어난',
    '설레이는',
    '활기찬',
    '기운찬',
    '편안한',
    '그냥 그런',
    '애매한',
    '화가난',
    '우울한',
    '칙칙한',
    '불편한',
    '머리 아픈',
    '배가 아픈',
    '배고픈',
    '놀고 싶은',
    '울적한',
    '힘이 넘치는',
    '힘이 없는',
    '코딩 좋아하는',
    '코딩하고 싶은',
    '코딩에 희열감 느끼는',
    '코딩하기 싫은',
    '배포에 카타르시스 느끼는',
    '무서운',
    '달달한거 먹고 싶은',
    '맛있는게 먹고싶은',
    '세상을 지배하는',
    '200을 싫어하는',
    '300을 싫어하는',
    '400을 싫어하는',
    '500을 싫어하는',
  ];

  const secondName = [
    '구름',
    '비',
    '햇빛',
    '나뭇잎',
    '강',
    '하늘',
    '불',
    '물',
    '돌',
    '바다',
    '안개',
    '바람',
    '번개',
    '소용돌이',
    '폭포',
    '흙',
    '호수',
    '지우지',
    '덕용덕',
    '철민철',
    '재현재',
    '찬영찬',
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
