import React, { useEffect, useState } from 'react';
import { IGPTprops } from '../../../gpt/GPTModal.types';
import * as S from './GPTOverlay.style';
import { CallGPT } from 'src/apis/gpt';
import { useRecoilState } from 'recoil';
import {
  contents,
  countAverage,
  happyA,
  sadA,
  weather,
} from 'src/states/counter';

//더미데이터도 json 파싱
const dummyData =
  JSON.parse(`{ "title": "오늘의 감정",  "actionTips": ["1. 열정적인 감정을 유지하기 위해 목표 설정과 자기 동기부여를 강화해보세요.", "2. 버그와 같은 도전적인 상황에 직면했을 때는 자신의 능력을 믿고 문제 해결에 집중해보세요." ] }
`);

const GPTOverlay: React.FC<IGPTprops> = ({ onOk, onGo }) => {
  const [data, setData] = useState({ title: '', actionTips: '' });
  const [isLoading, setIsLoading] = useState(false);

  const [countAverageAtom, setCountAverageAtom] = useRecoilState(countAverage);
  const [happyAtom, setHappyAtom] = useRecoilState(happyA);
  const [sadAtom, setSadAtom] = useRecoilState(sadA);
  const [weatherAtom, setWeatherAtom] = useRecoilState(weather);
  const [contentsAtom, setContentsAtom] = useRecoilState(contents);

  const onClickAPIcallHandler = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        contents: `
      나는 오늘 가족들이랑 여행을 갔다 재미있었다.   
      `,
        temperature: `지쳤어요`,
        humid: `상쾌해요`,
        weather: `맑아요`,
      });
      console.log('JSON parse', JSON.parse(message));
      setData(JSON.parse(message));
    } catch (error) {
      console.log('onClickAPIcallHandler error', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onClickAPIcallHandler();
  }, []);

  return (
    <S.ContainerDiv onClick={onOk}>
      <S.ModalContentDiv>
        <S.GPTHeaderDiv>
          AI클라우드가 추천하는 <br />
          <S.GptSpan>감정 솔루션</S.GptSpan>
        </S.GPTHeaderDiv>
        <S.GPTSolutionDiv>
          {data && (
            <>
              <S.GPTEachSolutionDiv>{data.actionTips[0]}</S.GPTEachSolutionDiv>
              <S.GPTEachSolutionDiv>{data.actionTips[1]}</S.GPTEachSolutionDiv>
            </>
          )}
        </S.GPTSolutionDiv>
        <S.GPTBtnDiv onClick={onOk}>확인</S.GPTBtnDiv>
        <div>isLoading:{isLoading ? 'loading...' : 'finished...'}</div>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default GPTOverlay;
