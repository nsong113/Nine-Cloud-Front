import React, { useEffect, useState } from 'react';
import { IGPTprops } from '../../../gpt/GPTModal.types';
import * as S from './GPTOverlay.style';
import { CallGPT } from 'src/apis/gpt';
import { useRecoilState } from 'recoil';
import {
  contents,
  countAverage,
  // diaryCheckToday,
  happyA,
  sadA,
  sleep,
  weather,
} from 'src/states/counter';
import useTemperature from 'src/components/commons/hooks/GPT/useTemperature';
import useHumid from 'src/components/commons/hooks/GPT/useHumid';
import useWeather from 'src/components/commons/hooks/GPT/useWeather';
import useSleep from 'src/components/commons/hooks/GPT/useSleep';
import { useNavigate } from 'react-router-dom';

const GPTOverlay: React.FC<IGPTprops> = ({ onOk, onGo, diaryCheck }) => {
  const [data, setData] = useState({
    title: '',
    // evaluates: '',
    actionTips: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [countAverageAtom, setCountAverageAtom] = useRecoilState(countAverage);
  const [contentsAtom, setContentsAtom] = useRecoilState(contents);
  const { happyEmotion } = useTemperature();
  const { humidEmotion } = useHumid();
  const { weatherToday } = useWeather();
  const { sleepToday } = useSleep();

  const onClickAPIcallHandler = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        countAverage: countAverageAtom,
        contents: contentsAtom,
        temperature: happyEmotion,
        humid: humidEmotion,
        weather: weatherToday,
        sleep: sleepToday,
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
    if (diaryCheck !== null) {
      onClickAPIcallHandler();
    }
  }, []);

  const onClickGotoPost = () => {
    navigate('/post');
  };

  const onClickGptReload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (diaryCheck !== null) {
      onClickAPIcallHandler();
    }
  };

  const stopProp = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {diaryCheck === null && (
        <S.ContainerDiv onClick={onOk}>
          <S.ModalContentDivGo onClick={stopProp}>
            <S.GptX></S.GptX>
            <S.GptH3>아직 일기를 작성하지 않았어요!</S.GptH3>
            <S.GptP>
              AI클라우드의 솔루션을 받아보고 싶다면 <br />
              오늘의 마음일기를 작성해주세요
            </S.GptP>
            <S.GPTBtnDivGo onClick={onClickGotoPost}>
              마음 일기 쓰러 가기
            </S.GPTBtnDivGo>
          </S.ModalContentDivGo>
        </S.ContainerDiv>
      )}
      {diaryCheck !== null && (
        <S.ContainerDiv onClick={onOk}>
          <S.ModalContentDiv onClick={stopProp}>
            <S.GPTHeaderDiv>
              AI클라우드가 추천하는 <br />
              <S.GptSpan>감정 솔루션</S.GptSpan>
            </S.GPTHeaderDiv>
            <S.GPTSolutionDiv>
              {data && (
                <>
                  {/* <S.GPTEachSolutionDiv>
                오늘의 감정 분석 : {data.evaluates}
              </S.GPTEachSolutionDiv> */}
                  <br />
                  <S.GPTEachSolutionDiv>
                    <S.GptFlexBox>
                      <S.GptEmoji />
                      <S.GptSolutionP>{data.actionTips[0]}</S.GptSolutionP>
                    </S.GptFlexBox>
                  </S.GPTEachSolutionDiv>
                  <br />
                  <S.GPTEachSolutionDiv>
                    <S.GptFlexBox>
                      <S.GptEmoji />
                      <S.GptSolutionP>{data.actionTips[1]}</S.GptSolutionP>
                    </S.GptFlexBox>
                  </S.GPTEachSolutionDiv>
                </>
              )}
            </S.GPTSolutionDiv>
            <S.GptReloadingBox onClick={onClickGptReload}>
              <S.GptReloadingFlex>
                <S.GptReloadingP>
                  솔루션이 마음에 들지 않는다면?
                </S.GptReloadingP>
                <S.GptReloadingImg />
              </S.GptReloadingFlex>
            </S.GptReloadingBox>
            <S.GPTBtnDiv onClick={onOk}>확인</S.GPTBtnDiv>
            <div>isLoading:{isLoading ? 'loading...' : 'finished...'}</div>
          </S.ModalContentDiv>
        </S.ContainerDiv>
      )}
    </>
  );
};

export default GPTOverlay;
