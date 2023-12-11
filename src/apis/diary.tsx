//다이어리 관련 CRUD

import axios from 'axios';
import { IpostDiaryItem } from './apiesType';

// create (post)
const postDiary = async (postDiaryItem: IpostDiaryItem) => {
  const accessToken = localStorage.getItem('Token');
  console.log(accessToken);
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/posting`,
      postDiaryItem,
      {
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
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
  const accessToken = localStorage.getItem('Token');
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/calandar`,
      {
        headers: {
          'Content-Type': 'application/json',
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
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/feed?page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log('getInfiniteDiaries error', error);
  }
};

export { getDiary, postDiary, getInfiniteDiaries };
