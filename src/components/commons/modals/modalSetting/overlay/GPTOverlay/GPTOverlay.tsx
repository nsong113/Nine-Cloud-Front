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
// 
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
        contents: contentsAtom,
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
