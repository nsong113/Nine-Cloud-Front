import axios from 'axios';
import { IAddPost } from './apis.types';

export const addPost = async (target: IAddPost) => {
  try {
    const formData = new FormData();
    formData.append('image', target.image);
    formData.append('content', target.content);
    // formData.append('EmotionStatus', target.EmotionStatus);
    const response = await axios.post(
      `${process.env.REACT_APP_SURVER_URL}/diary/posting`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {}
};

export const getPost = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SURVER_URL}/diary/calandar`
    );
    return response.data;
  } catch (error) {}
};

export const getOnePostInfo = async (diaryId: number) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL_2}/diary/detail/${diaryId}`
    );

    return response.data;
  } catch (error) {}
};
