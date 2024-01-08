import React, { useEffect, useState } from 'react';
import { IGPTprops } from './GPTOverlay.types';
import * as S from './GPTOverlay.style';
import { CallGPT } from 'src/apis/gpt';
import { useRecoilState } from 'recoil';
import { contents, countAverage } from 'src/states/counter';
import useTemperature from 'src/components/commons/hooks/GPT/useTemperature';
import useHumid from 'src/components/commons/hooks/GPT/useHumid';
import useWeather from 'src/components/commons/hooks/GPT/useWeather';
import useSleep from 'src/components/commons/hooks/GPT/useSleep';
import { useNavigate } from 'react-router-dom';
import GPTloading from './GPTloading';

const GPTOverlay: React.FC<IGPTprops> = ({ onOk, onGo, diaryCheck }) => {
  const [data, setData] = useState({
    title: '',
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

  console.log('happyEmotion');

  // const fetchData = async () => {
  //   try {
  //     // 여기에 데이터를 다시 받아오는 로직을 추가
  //     const newHappyEmotion = 0;
  //     const newHumidEmotion = 0;
  //     const newWeatherToday = 0;
  //     const newSleepToday = 0;

  //     const message = await CallGPT({
  //       countAverage: countAverageAtom,
  //       contents: contentsAtom,
  //       temperature: newHappyEmotion,
  //       humid: newHumidEmotion,
  //       weather: newWeatherToday,
  //       sleep: newSleepToday,
  //     });

  //     setData(JSON.parse(message));
  //   } catch (error) {
  //     console.log('Error while fetching new data:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const onClickAPIcallHandler = async () => {
    try {
      setIsLoading(true);
      if (happyEmotion && humidEmotion && weatherToday && sleepToday) {
        const message = await CallGPT({
          countAverage: countAverageAtom,
          contents: contentsAtom,
          temperature: happyEmotion,
          humid: humidEmotion,
          weather: weatherToday,
          sleep: sleepToday,
        });
        setData(JSON.parse(message));
      }
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
            <S.GptX onClick={onOk}></S.GptX>
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
          {isLoading && <GPTloading />}
          <S.ModalContentDiv onClick={stopProp}>
            <S.GptX onClick={onOk}></S.GptX>
            <S.GPTHeaderDiv>
              AI클라우드가 추천하는 <br />
              <S.GptSpan>감정 솔루션</S.GptSpan>
            </S.GPTHeaderDiv>
            <S.GPTSolutionDiv>
              {data && (
                <>
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
          </S.ModalContentDiv>
        </S.ContainerDiv>
      )}
    </>
  );
};

export default GPTOverlay;
