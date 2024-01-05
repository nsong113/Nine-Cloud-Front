import { IpostDiaryItem } from './apiesType';
import axiosInstance from './loginapi';

const postDiary = async (postDiaryItem: IpostDiaryItem) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    const formData = new FormData();

    formData.append(
      'EmotionStatus',
      postDiaryItem.EmotionalStatus?.toString() || ''
    );
    formData.append('content', postDiaryItem.content || '');
    formData.append('isPublic', postDiaryItem.isPublic ? 'true' : '');
    formData.append('image', postDiaryItem.image || '');
    formData.append('sentence', postDiaryItem.sentence || '');
    formData.append('weather', postDiaryItem.weather || '');
    formData.append('temperature', postDiaryItem.temperature || '');
    formData.append('humid', postDiaryItem.humid || '');
    formData.append('sleep', postDiaryItem.sleep || '');

    let values: any = formData.values();
    for (const pair of values) {
      // console.log('pair', pair)
    }

    const res = await axiosInstance.post(`/diary/posting`, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
        Refreshtoken: `${refreshToken}`,
        Authorization: `${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log('postDiary error', error);
  }
};

const getDiary = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const res = await axiosInstance.post(`/diary/calandar`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Refreshtoken: `${refreshToken}`,
        Authorization: `${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log('getDiary error', error);
  }
};

const getInfiniteDiaries = async (
  pageParam: number,
  formattedTodayDate: string
) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const res = await axiosInstance.get(
      `/feeds/mydiaries?page=${pageParam}&date=${formattedTodayDate}
    `,
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
    console.log('getInfiniteDiaries error', error);
  }
};

export { getDiary, postDiary, getInfiniteDiaries };
