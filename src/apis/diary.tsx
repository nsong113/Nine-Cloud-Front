//다이어리 관련 CRUD

import axios from 'axios';
import { IpostDiaryItem } from './apiesType';

// create (post)
const postDiary = async (postDiaryItem: IpostDiaryItem) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  console.log('POSTpostDiaryItem', postDiaryItem);
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/posting`,
      {
        EmotionalStatus: postDiaryItem.EmotionalStatus,
        content: postDiaryItem.content,
        image: postDiaryItem.image,
        isPublic: postDiaryItem.isPublic,
      },
      {
        withCredentials: true,
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );

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
const getInfiniteDiaries = async ({ pageParam = 1 }) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/feeds?page=${pageParam}`,
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
    return res.data;
  } catch (error) {
    console.log('getInfiniteDiaries error', error);
  }
};

export { getDiary, postDiary, getInfiniteDiaries };
