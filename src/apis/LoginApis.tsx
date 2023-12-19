import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${accessToken}`,
    Refreshtoken: `bearer ${refreshToken}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;

    if (status === 400) {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const { data } = await axios({
          method: 'post',
          url: `${BASE_URL}/token`,
          data: { accessToken, refreshToken },
        });
        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;
        originalRequest.headers = {
          'Content-Type': 'application/json',
          Authorization: `${accessToken}`,
          Refreshtoken: `${refreshToken}`,
        };
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        return await axios(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
