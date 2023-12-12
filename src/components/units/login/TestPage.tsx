import axios from 'axios';
import React, { useState } from 'react';

const TestPage: React.FC = () => {
  const [utcTimestamp, setUtcTimestamp] = useState<string>('');
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  const convertTimestamp = () => {
    const timestampNumber = parseInt(utcTimestamp);

    if (!isNaN(timestampNumber)) {
      const timestampInMilliseconds = timestampNumber * 1000;
      const date = new Date(timestampInMilliseconds);
      const formattedDate = date.toLocaleString();

      setFormattedDate(`Formatted Date: ${formattedDate}`);
    } else {
      setFormattedDate('Invalid UTC Timestamp');
    }
  };

  const code = '안녕';
  const asd = async () => {
    try {
      const response = await axios.post(
        `https://astraiosissda.shop/kakao/code`,
        {
          code: code,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(code);
      const accessToken = response.headers['authorization'];
      const refreshToken = response.headers['refreshtoken'];
      const expiredTime = response.headers['expiredtime'];
      console.log(response);
      console.log('at: ', accessToken);
      console.log('rt: ', refreshToken);
      console.log('et: ', expiredTime);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('expiredTime', expiredTime);
      // navigate('/loadingpage');
    } catch (error) {
      console.error('로그인 실패');
    }
  };
  return (
    <div>
      <h1>UTC Timestamp Converter</h1>
      <label htmlFor='utcTimestamp'>Enter UTC Timestamp:</label>
      <input
        type='text'
        id='utcTimestamp'
        placeholder='Enter UTC Timestamp'
        value={utcTimestamp}
        onChange={(e) => setUtcTimestamp(e.target.value)}
      />
      <button onClick={convertTimestamp}>Convert</button>
      <p>{formattedDate}</p>
      <button onClick={asd}>미치겠다</button>
    </div>
  );
};

export default TestPage;
