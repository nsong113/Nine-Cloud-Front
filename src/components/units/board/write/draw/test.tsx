import { useState } from 'react';

export default function JestUnitTestPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const onClickAdd = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>철수는 13살입니다. </div>
      취미 입력하기 <input type='text'></input>
      <div role='count'>{count}</div>
      <button onClick={onClickAdd} role='count-button'>
        {' '}
        철수랑 놀러가자{' '}
      </button>
    </>
  );
}
