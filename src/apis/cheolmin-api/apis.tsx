import axios from 'axios';
import {
  IAddComment,
  IAddPost,
  IDeleteComment,
  IEditComment,
} from './apis.types';
// axios
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
        withCredentials: true,
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('다시 시도하세요');
  }
};

export const deletePost = async (id: any) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/diary/detail/${id}`,
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

export const getPosts = async () => {
  try {
    console.log(accessToken);
    console.log(refreshToken);
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

export const getComments = async (diaryId: string | undefined | number) => {
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
      {
        content: target.content,
      },
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

export const editComment = async (target: IEditComment) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/diary/detail/comment/${target.commentId}`,
      target.editComment,
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
    console.log('잘못된 접근입니다.');
  }
};

export const deleteComment = async (commentId: IDeleteComment) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/diary/detail/comment/${commentId}`,
      {
        withCredentials: true,
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.log('이상한 접근입니다.');
  }
};

export const getMyInfo = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/myInfo`,
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
    console.log('error');
  }
};

// export const getPrevMonthPosts = async (target: any) => {
//   try {
//     const response = await axios.get(
//       `${process.env.REACT_APP_SERVER_URL}/diary/calendar/previousMonth/${target.year}/${target.month}/${target.data}`,
//       {
//         withCredentials: true,
//         headers: {
//           Refreshtoken: `${refreshToken}`,
//           Authorization: `${accessToken}`,
//         },
//       }
//     );
//   } catch (error) {
//     console.log('error');
//   }
// };
