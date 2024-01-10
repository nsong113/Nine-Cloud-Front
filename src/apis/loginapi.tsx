import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const statusCode = error.response.status;
    if (statusCode === 419) {
      try {
        const response = await axios({
          method: 'post',
          url: `${BASE_URL}/token`,
          headers: {
            Refreshtoken: `${localStorage.getItem('refreshToken')}`,
          },
        });
        const newAccessToken = response.headers['authorization'];
        localStorage.setItem('accessToken', newAccessToken);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
