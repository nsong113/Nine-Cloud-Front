import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
// const accessToken = localStorage.getItem('accessToken');
// const refreshToken = localStorage.getItem('refreshToken');
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `${localStorage.getItem('accessToken')}`,
  //   Refreshtoken: `${localStorage.getItem('refreshToken')}`,
  // },
});

// axiosInstance.interceptors.request.use(

// )

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const statusCode = error.response?.status;
    console.log(statusCode);
    if (statusCode === 401) {
      // const accessToken = localStorage.getItem('accessToken');
      // const refreshToken = localStorage.getItem('refreshToken');
      try {
        const response = await axios({
          method: 'post',
          url: `${BASE_URL}/token`,
          headers: {
            Authorization: `${localStorage.getItem('accessToken')}`,
            Refreshtoken: `${localStorage.getItem('refreshToken')}`,
          },
        });
        const newAccessToken = response.headers['authorization'];
        const newRefreshToken = response.headers['refreshtoken'];
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        console.log('재발급 성공');
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
