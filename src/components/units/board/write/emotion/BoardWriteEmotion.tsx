import React, { useEffect, useState } from 'react';
import * as S from './BoardWriteEmotion.styles';
import { useNavigate } from 'react-router-dom';
import useSetEmotion from 'src/components/commons/hooks/useSetEmotion';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import {
  countAverage,
  happyA,
  isOut,
  sadA,
  sleep,
  weather,
} from 'src/states/counter';
import PostBtn from 'src/components/commons/utills/PostBtn/PostBtn';
import { useRecoilState } from 'recoil';
import PostUpperWrapper from '../PostUpperWrapper';
import ModalOverlay from 'src/components/commons/modals/modalSetting/overlay/alertOverlay/ModalOverlay';

const BoardWriteEmotion = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [out, setOut] = useRecoilState(isOut);
  const [countAverageAtom, setCountAverageAtom] = useRecoilState(countAverage);

  const { happy, onChangeCount: onChangeHappyCount } = useSetEmotion({
    emotionKey: 'happy',
    emotionAtom: happyA,
  });

  const { sad, onChangeCount: onChangeSadCount } = useSetEmotion({
    emotionKey: 'sad',
    emotionAtom: sadA,
  });
  const { todayWeather, onChangeCount: onChangeWeatherCount } = useSetEmotion({
    emotionKey: 'todayWeather',
    emotionAtom: weather,
  });
  const { todaySleep, onChangeCount: onChangeTodaySleep } = useSetEmotion({
    emotionKey: 'todaySleep',
    emotionAtom: sleep,
  });

  useEffect(() => {
    setCountAverageAtom(
      (parseInt(happy as string) + parseInt(sad as string)) / 2
    );
  }, [happy, sad]);

  const onClickMoveToMain = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClickSubmit = () => {
    setOut(false);
    navigate('/main');
  };

  const onClickNextPage = () => navigate('/post3');

  const labels = ['bad', '', 'good'].map((label, index) => (
    <S.Label key={index}>{label}</S.Label>
  ));

  return (
    <Animation2>
      <S.EmotionContainerDiv>
        <PostUpperWrapper
          first={'now'}
          firstWord={'Emotion'}
          second={'yet'}
          secondWord={'Text'}
          third={'yet'}
          thirdWord={'Drawing'}
          progress={'0px'}
        />
        <S.EmotionWrapperDOWNdiv>
          <S.ContainerDiv>
            {isModalOpen && (
              <ModalOverlay
                onClose={onClickMoveToMain} //onClose
                onOk={onClickSubmit} //onOk
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
                      value={parseInt(happy as string) || 1}
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
                      value={parseInt(sad as string) || 1}
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
                      value={parseInt(todaySleep as string) || 1}
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
                      value={parseInt(todayWeather as string) || 1}
                      onChange={onChangeWeatherCount}
                    />
                    <S.LabelsDiv>
                      <S.Labels>{labels}</S.Labels>
                    </S.LabelsDiv>
                  </S.ContentInputBoxDiv>
                </S.ContentsBoxDiv>
              </S.SliderBoxDiv>
            </S.SliderWrapperDiv>
            <PostBtn
              onClickMoveToMain={onClickMoveToMain}
              onClickNextPage={onClickNextPage}
              page={'emotion'}
            />
          </S.ContainerDiv>
        </S.EmotionWrapperDOWNdiv>
      </S.EmotionContainerDiv>
    </Animation2>
  );
};

export default BoardWriteEmotion;
