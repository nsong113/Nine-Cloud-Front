//다이어리 관련 CRUD

import axios from 'axios';
import { IpostDiaryItem } from './apiesType';

// create (post)
const postDiary = async (postDiaryItem: IpostDiaryItem) => {
  const accessToken = localStorage.getItem('token');
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/posting`,
      postDiaryItem,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
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
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/calandar`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('getDiary error', error);
  }
};

export { getDiary, postDiary };
