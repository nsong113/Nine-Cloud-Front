import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './BoardWriteEmotion.styles';
import { useNavigate } from 'react-router-dom';
import AlertModal from 'src/components/commons/modals/alert/alertModal';
import useSetEmotion from 'src/components/commons/hooks/useSetEmotion';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import { useRecoilState } from 'recoil';
import { countAverage, happyA, sadA, sleep, weather } from 'src/states/counter';

const BoardWriteEmotion = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { emotion: happy, handler: onChangeHappyCount } = useSetEmotion();
  const { emotion: sad, handler: onChangeSadCount } = useSetEmotion();
  const { emotion: todayWeather, handler: onChangeWeatherCount } =
    useSetEmotion();
  const { emotion: todaySleep, handler: onChangeTodaySleep } = useSetEmotion();

  const onClickMoveToMain = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClickSubmit = () => {
    navigate('/main');
  };

  const onClickNextPage = () => {
    navigate('/post3');
  };
  const [happyAtom, setHappyAtom] = useRecoilState(happyA);
  const [sadAtom, setSadAtom] = useRecoilState(sadA);
  const [countAverageNum, setCountAverage] = useRecoilState(countAverage);
  const [weatherToday, setWeatherToday] = useRecoilState(weather);

  const [sleepToday, setSleepToday] = useRecoilState(sleep);

  useEffect(() => {
    setHappyAtom(happy);
    setSadAtom(sad);
    setWeatherToday(todayWeather);
    setCountAverage((Number(happy) + Number(sad)) / 2);
  }, [happy, sad, todayWeather, setHappyAtom, setSadAtom, setWeatherToday]);

  const labels = ['bad', '', 'good'].map((label, index) => (
    <S.Label key={index}>{label}</S.Label>
  ));

  return (
    <Animation2>
      <S.EmotionContainerDiv>
        <S.EmotionWrapperUPDiv>
          <S.HeaderButtonBoxDiv>
            <S.HeaderLine></S.HeaderLine>
            <S.HeaderFlexBox>
              <S.SelectBox>
                <S.ThreeFilledSpan></S.ThreeFilledSpan>
                <S.SelectP>Emotion</S.SelectP>
              </S.SelectBox>
              <S.SelectBox>
                <S.OneBlackSpan />
                <S.SelectP2>Text</S.SelectP2>
              </S.SelectBox>
              <S.SelectBox>
                <S.OneBlackSpan />
                <S.SelectP3>Drawing</S.SelectP3>
              </S.SelectBox>
            </S.HeaderFlexBox>
          </S.HeaderButtonBoxDiv>
        </S.EmotionWrapperUPDiv>
        <S.EmotionWrapperDOWNdiv>
          <S.ContainerDiv>
            {isModalOpen && (
              <AlertModal
                onClickMoveToMain={onClickMoveToMain} //onClose
                onClickSubmit={onClickSubmit} //onOk
              />
            )}

            <S.SliderWrapperDiv>
              <S.SliderBoxDiv>
                <S.ContentsBoxDiv>
                  <S.ContentFlexDivBox>
                    <S.ContentBoxDiv>
                      오늘의 <S.ContentBoxSpan>마음 온도</S.ContentBoxSpan>는
                      어땠나요?
                    </S.ContentBoxDiv>
                    <S.CountBoxDiv>
                      <S.CountP>
                        {happy === '1' && '지쳤어요'}
                        {happy === '2' && '무료해요'}
                        {happy === '3' && '그냥그래요'}
                        {happy === '4' && '의기양양해요'}
                        {happy === '5' && '열정넘쳐요'}
                      </S.CountP>
                    </S.CountBoxDiv>
                  </S.ContentFlexDivBox>
                  <S.ContentInputBoxDiv>
                    <S.ContentInputDescDiv>
                      하루 동안의
                      <br />
                      <S.ContentSpan>전반적인 상태</S.ContentSpan>를
                      입력해주세요!
                    </S.ContentInputDescDiv>
                    <S.SliderInput
                      type='range'
                      min={1}
                      max={5}
                      value={parseInt(happy) || 1}
                      onChange={onChangeHappyCount}
                    />
                    <S.LabelsDiv>
                      <S.Labels>{labels}</S.Labels>
                    </S.LabelsDiv>
                  </S.ContentInputBoxDiv>
                </S.ContentsBoxDiv>
              </S.SliderBoxDiv>
              <S.SliderBoxDiv>
                <S.ContentsBoxDiv>
                  <S.ContentFlexDivBox>
                    <S.ContentBoxDiv>
                      오늘의 <S.ContentBoxSpan>마음 습도</S.ContentBoxSpan>는
                      어땠나요?
                    </S.ContentBoxDiv>
                    <S.CountBoxDiv>
                      <S.CountP>
                        {sad === '1' && '불쾌해요'}
                        {sad === '2' && '울적해요'}
                        {sad === '3' && '적당해요'}
                        {sad === '4' && '꽤 좋아요'}
                        {sad === '5' && '상쾌해요'}
                      </S.CountP>
                    </S.CountBoxDiv>
                  </S.ContentFlexDivBox>
                  <S.ContentInputBoxDiv>
                    <S.ContentInputDescDiv>
                      하루 동안의 <br />
                      <S.ContentSpan>전반적인 감정</S.ContentSpan>을
                      입력해주세요!
                    </S.ContentInputDescDiv>
                    <S.SliderInput
                      type='range'
                      min={1}
                      max={5}
                      value={parseInt(sad) || 1}
                      onChange={onChangeSadCount}
                    />
                    <S.LabelsDiv>
                      <S.Labels>{labels}</S.Labels>
                    </S.LabelsDiv>
                  </S.ContentInputBoxDiv>
                </S.ContentsBoxDiv>
              </S.SliderBoxDiv>

              <S.SliderBoxDiv>
                <S.ContentsBoxDiv>
                  <S.ContentFlexDivBox>
                    <S.ContentBoxDiv>
                      오늘의
                      <S.ContentBoxSpan>마음 일출</S.ContentBoxSpan>을
                      떠올려볼까요?
                    </S.ContentBoxDiv>
                    <S.CountBoxDiv>
                      <S.CountP>
                        {todaySleep === '1' && '매우 나빠요'}
                        {todaySleep === '2' && '나빠요'}
                        {todaySleep === '3' && '보통이에요'}
                        {todaySleep === '4' && '좋아요'}
                        {todaySleep === '5' && '매우 좋아요'}
                      </S.CountP>
                    </S.CountBoxDiv>
                  </S.ContentFlexDivBox>
                  <S.ContentInputBoxDiv>
                    <S.ContentInputDescDiv>
                      하루를 시작하기 전 단계인 <br />
                      <S.ContentSpan> 수면 상태</S.ContentSpan>는 어땠나요?
                    </S.ContentInputDescDiv>
                    <S.SliderInput
                      type='range'
                      min={1}
                      max={5}
                      value={parseInt(todaySleep) || 1}
                      onChange={onChangeTodaySleep}
                    />
                    <S.LabelsDiv>
                      <S.Labels>{labels}</S.Labels>
                    </S.LabelsDiv>
                  </S.ContentInputBoxDiv>
                </S.ContentsBoxDiv>
              </S.SliderBoxDiv>
              <S.SliderBoxDiv>
                <S.ContentsBoxDiv>
                  <S.ContentFlexDivBox>
                    <S.ContentBoxDiv>
                      오늘의
                      <S.ContentBoxSpan>날씨</S.ContentBoxSpan>는 어땠나요?
                    </S.ContentBoxDiv>
                    <S.CountBoxDiv>
                      <S.CountP>
                        {todayWeather === '1' && '비왔어요'}
                        {todayWeather === '2' && '흐렸어요'}
                        {todayWeather === '3' && '맑았어요'}
                      </S.CountP>
                    </S.CountBoxDiv>
                  </S.ContentFlexDivBox>
                  <S.ContentInputBoxDiv>
                    <S.ContentInputDescDiv>
                      <S.ContentSpan>맑은 날</S.ContentSpan>이었는지
                      <S.ContentSpan> 흐린 날</S.ContentSpan>이었는지
                      <br /> 기록해볼까요
                    </S.ContentInputDescDiv>
                    <S.SliderInput
                      type='range'
                      min={1}
                      max={3}
                      value={parseInt(todayWeather) || 1}
                      onChange={onChangeWeatherCount}
                    />
                    <S.LabelsDiv>
                      <S.Labels>{labels}</S.Labels>
                    </S.LabelsDiv>
                  </S.ContentInputBoxDiv>
                </S.ContentsBoxDiv>
              </S.SliderBoxDiv>
            </S.SliderWrapperDiv>

            <S.ButtonBoxDiv>
              <S.PrevButton onClick={onClickMoveToMain}>이전</S.PrevButton>
              <S.NextButton onClick={onClickNextPage}>다음</S.NextButton>
            </S.ButtonBoxDiv>
          </S.ContainerDiv>
        </S.EmotionWrapperDOWNdiv>
      </S.EmotionContainerDiv>
    </Animation2>
  );
};

export default BoardWriteEmotion;
