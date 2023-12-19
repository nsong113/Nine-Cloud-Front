import React, { useState } from 'react';
import { CallGPT } from 'src/apis/gpt';

//더미데이터도 json 파싱
const dummyData =
  JSON.parse(`{ "title": "오늘의 감정", "actionTips": ["1. 열정적인 감정을 유지하기 위해 목표 설정과 자기 동기부여를 강화해보세요.", "2. 버그와 같은 도전적인 상황에 직면했을 때는 자신의 능력을 믿고 문제 해결에 집중해보세요." ] }
`);

const BoardDetailGPT = () => {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);

  const onClickAPIcallHandler = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `
      나는 오늘 코딩을 했다. 근데 버그가 많이 나와서 속상하다. 내일은 안나오겠지?  
      `,
      });
      setData(JSON.parse(message));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <>
      <button onClick={onClickAPIcallHandler}>GPT api call</button>
      {/* <div>data:{JSON.stringify(data)}</div> */}
      <div>title: {data.title}</div>
      <br />
      {/* <div>analysis: {data.analysis}</div>
      <br />
      <div>evaluates: {data.evaluates}</div>
      <br /> */}
      {/* <div>summarize: {data.summarize}</div> */}
      <br />
      <div>actionTips: {data.actionTips}</div>
      <div>isLoading:{isLoading ? 'loading...' : 'finished...'}</div>
    </>
  );
};

export default BoardDetailGPT;
