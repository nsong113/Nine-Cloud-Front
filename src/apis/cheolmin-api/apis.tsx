import axios from 'axios';
import { IAddComment, IAddPost } from './apis.types';

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

export const addPost = async (target: IAddPost) => {
  try {
    const formData = new FormData();
    formData.append('image', target.image);
    formData.append('content', target.content);
    // formData.append('EmotionStatus', target.EmotionStatus);
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/posting`,
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
  } catch (error) {
    console.log('다시 시도하세요');
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/diary/calendar`,
      {
        withCredentials: true,
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log('다시 시도하세요');
  }
};

export const getOnePostInfo = async (diaryId: string | undefined) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/diary/detail/${diaryId}`,
      {
        withCredentials: true,
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    console.log('게시글 상세조회에 성공하셨습니다.');

    return response.data;
  } catch (error) {
    console.log('테스트');
  }
};

export const getComments = async (diaryId: string | undefined) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/diary/detail/comment/${diaryId}`,
      {
        withCredentials: true,
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log('테스트');
  }
};

export const addComment = async (target: IAddComment) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/diary/detail/comment/${target.diaryId}`,
      target.comment,
      {
        headers: { Authorization: `${localStorage.getItem('accessToken')}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log('테스트');
  }
};
