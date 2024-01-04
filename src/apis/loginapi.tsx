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
        // const newRefreshToken = response.headers['refreshtoken'];
        localStorage.setItem('accessToken', newAccessToken);
        // localStorage.setItem('refreshToken', newRefreshToken);
        console.log('재발급 성공');
        // navigate('/loading');
        window.location.reload();
      } catch (err) {
        console.log(err);
        // alert(`${error.response.msg}`);
        // navigate('/main');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
