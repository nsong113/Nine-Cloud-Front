import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지가 로드된 후 5초 뒤에 /main으로 이동
    const timeoutId = setTimeout(() => {
      // /main으로 이동하면서 페이지를 다시로드
      navigate('/main');
      window.location.reload();
    }, 2000);

    // 컴포넌트가 언마운트되면 타이머 클리어
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return <div>Loading</div>;
};

export default Loading;
