import React, { ChangeEvent, useState } from 'react';

const useSetEmotion = () => {
  const [emotion, setEmotion] = useState('3');

  const handler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmotion(event.target.value);
  };

  return { emotion, handler };
};

export default useSetEmotion;
