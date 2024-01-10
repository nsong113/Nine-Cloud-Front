import axios from 'axios';
import {
  IAddComment,
  IAddPost,
  IDeleteComment,
  IEditComment,
  IEditMyInfo,
  IGetPosts,
  IUpdatePost,
} from './apis.types';
import axiosInstance from '../loginapi';
import Swal from 'sweetalert2';
// axios
const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

export const deletePost = async (id: string | undefined) => {
  try {
    const response = await axiosInstance.delete(`/diary/delete/${id}`, {
      headers: {
        Refreshtoken: `${refreshToken}`,
        Authorization: `${accessToken}`,
      },
    });
    Swal.fire({
      icon: 'success',
      width: '400px',
      title: '일기 삭제가 완료됐습니다',
      confirmButtonText: '확인',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      width: '400px',
      title: '삭제 권한이 없습니다',
      confirmButtonText: '확인',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
};

export const getPosts = async (target: IGetPosts) => {
  try {
    const response = await axiosInstance.get(
      `/diary/calendar/${target.currentYear}/${target.currentMonth}`,
      {
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const getOnePostInfo = async (diaryId: string | undefined) => {
  try {
    const response = await axiosInstance.get(`/diary/detail/${diaryId}`, {
      headers: {
        Refreshtoken: `${refreshToken}`,
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const getComments = async (diaryId: string | undefined) => {
  try {
    const response = await axiosInstance.get(
      `/diary/detail/comment/${diaryId}`,
      {
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const addComment = async (target: IAddComment) => {
  try {
    const response = await axiosInstance.post(
      `/diary/detail/comment/${target.diaryId}`,
      {
        content: target.content,
      },
      {
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const editComment = async (target: IEditComment) => {
  try {
    const response = await axiosInstance.patch(
      `/diary/detail/comment/${target.commentId}`,
      {
        content: target.message,
      },
      {
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const deleteComment = async (commentId: IDeleteComment) => {
  try {
    const response = await axiosInstance.delete(
      `/diary/detail/comment/${commentId}`,
      {
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
  } catch (error) {
    Swal.fire({
      icon: 'error',
      width: '400px',
      title: '삭제 권한이 없습니다.',
      confirmButtonText: '확인',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
};

export const getMyInfo = async () => {
  try {
    const response = await axiosInstance.get(`/myInfo`, {
      headers: {
        Authorization: `${accessToken}`,
        Refreshtoken: `${refreshToken}`,
      },
    });
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const editMyInfo = async (target: IEditMyInfo) => {
  try {
    const formData = new FormData();
    formData.append('username', target?.username || '');
    formData.append('image', target?.selectedImage || '');
    const response = await axiosInstance.patch(`/myInfo/editmyInfo`, formData, {
      headers: {
        Refreshtoken: `${refreshToken}`,
        Authorization: `${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    Swal.fire({
      icon: 'success',
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight : bolder;">정상적으로 수정 됐습니다.</span>',
      confirmButtonText: '확인',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    });
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const getPrevMonthPosts = async () => {
  try {
    const response = await axiosInstance.get(`/diary/calendar/previousMonth`, {
      headers: {
        Refreshtoken: `${refreshToken}`,
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const getNextMonthPosts = async () => {
  try {
    const response = await axiosInstance.get(`/diary/calendar/nextMonth`, {
      headers: {
        Refreshtoken: `${refreshToken}`,
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const updatePost = async (target: IUpdatePost) => {
  try {
    const response = await axiosInstance.patch(
      `/diary/edit/${target.diaryId}`,
      {
        content: target.myPost?.contents,
        isPublic: target.myPost.isPublic,
      },
      {
        headers: {
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    Swal.fire({
      icon: 'success',
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight : bolder;">일기 수정이 완료됐습니다</span>',
      confirmButtonText: '확인',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    });
    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};

export const getHearts = async (diaryId: string | undefined) => {
  const data = null;
  try {
    const response = await axiosInstance.post(`/feeds/${diaryId}/like`, data, {
      headers: {
        Refreshtoken: `${refreshToken}`,
        Authorization: `${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    alert("잘못된 요청입니다.")
  }
};
