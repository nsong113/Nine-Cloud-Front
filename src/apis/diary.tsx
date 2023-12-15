//다이어리 관련 CRUD

import axios from 'axios';
import { IpostDiaryItem } from './apiesType';

// create (post)
const postDiary = async (postDiaryItem: IpostDiaryItem) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  console.log('POSTpostDiaryItem', postDiaryItem);
  try {
    const formData = new FormData();

    formData.append(
      'EmotionStatus',
      postDiaryItem.EmotionalStatus?.toString() || ''
    );
    formData.append('content', postDiaryItem.content || '');
    formData.append('isPublic', postDiaryItem.isPublic ? 'true' : 'false');
    formData.append('image', postDiaryItem.image || '');
    formData.append('sentence', postDiaryItem.sentence || '');
    formData.append('weather', postDiaryItem.weather || '');

    console.log(typeof postDiaryItem.image);
    console.log('formData', formData);

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/posting`,
      formData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    alert('오늘 일기 포스팅에 성공하셨습니다.');
    localStorage.removeItem('sentence');
    localStorage.removeItem('weather');
    localStorage.removeItem('countAverage');
    localStorage.removeItem('image');
    localStorage.removeItem('content');
    localStorage.removeItem('isPublic');
    return res.data;
  } catch (error) {
    console.log('postDiary error', error);
  }
};

//read
const getDiary = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/calandar`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'multipart/form-data',
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('getDiary error', error);
  }
};

//get- 무한스크롤  `${apiUrl}?page=${pageNumber}
const getInfiniteDiaries = async (pageParam: number) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/feeds?page=${pageParam}`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log('getInfiniteDiaries error', error);
  }
};

export { getDiary, postDiary, getInfiniteDiaries };
