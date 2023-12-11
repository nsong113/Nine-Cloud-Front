import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const KakaoLoginHandler = () => {
  const navigate = useNavigate();
  // try {
  //   const response = await axios.get(
  //     `http://43.201.51.203:3000/auth/kakao/callback?code=${code}`,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );
  //   console.log(response);
  //   console.log(response.data);
  //   console.log('나와봐');
  //   // localStorage.setItem('Token', token);
  //   alert('로그인에 성공하였습니다.');
  //   navigate('/main');
  // } catch (error) {
  //   console.error('로그인 실패', error);
  //   alert('로그인 실패');
  // }
  // console.log('안녕');
  return <div>로그인 중입니다.</div>;
};

export default KakaoLoginHandler;
