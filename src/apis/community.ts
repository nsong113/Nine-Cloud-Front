import axios from 'axios';
import axiosInstance from './loginapi';

//get- 무한스크롤  `${apiUrl}?page=${pageNumber}
const getInfiniteCommunity = async (pageParam: number) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const res = await axiosInstance.get(
      `/feeds?page=${pageParam}`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Refreshtoken: `${refreshToken}`,
          Authorization: `${accessToken}`,
        },
      }
    );
    return {
      result: res.data,
      nextPage: pageParam + 1,
      isLast: !res.data.next,
    };
  } catch (error) {
    console.log('getInfiniteCommunity error', error);
  }
};

export { getInfiniteCommunity };
