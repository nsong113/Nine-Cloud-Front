import React, { useState } from 'react';
import { CallGPT } from 'src/apis/gpt';

//더미데이터도 json 파싱
const dummyData =
  JSON.parse(`{ "title": "오늘의 감정", "thumbnail": "열정과 우울함", "summarize": "오늘은 열정적이고 우울한 날이었으며, 식사는 2번을 했습니다. 코딩 중에 버그가 많이 나와서 속상했습니다.", "evaluates": "오늘의 감정은 열정과 우울함이 혼재하고 있습니다. 날씨의 흐림과 식사의 양은 감정에 영향을 주었을 것입니다. 코딩 중 발생한 버그로 인해 불안과 속상한 감정을 느꼈을 것입니다.", "analysis": "열정적인 감정은 목표에 대한 동기부여와 긍정적인 에너지를 나타낼 수 있습니다. 하지만 우울한 감정은 현재 상황에 대한 불만이나 불안을 나타낼 수 있습니다. 버그로 인한 속상함은 자신의 능력에 대한 불안과 실망을 나타낼 수 있습니다. 이러한 감정들은 일상적인 활동에 영향을 주고 내일에 대한 불확실성을 느끼게 할 수 있습니다.", "actionTips": ["1. 열정적인 감정을 유지하기 위해 목표 설정과 자기 동기부여를 강화해보세요.", "2. 버그와 같은 도전적인 상황에 직면했을 때는 자신의 능력을 믿고 문제 해결에 집중해보세요." ] }
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
      <div>analysis: {data.analysis}</div>
      <br />
      <div>evaluates: {data.evaluates}</div>
      <br />
      {/* <div>summarize: {data.summarize}</div> */}
      <br />
      <div>actionTips: {data.actionTips}</div>
      {/* <div>isLoading:{isLoading ? 'loading...' : 'finished...'}</div> */}
    </>
  );
};

export default BoardDetailGPT;
