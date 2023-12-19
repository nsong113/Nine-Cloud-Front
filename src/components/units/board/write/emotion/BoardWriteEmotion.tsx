import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './BoardWriteEmotion.styles';
import { useNavigate } from 'react-router-dom';
import AlertModal from 'src/components/commons/modals/alert/alertModal';
import useSetEmotion from 'src/components/commons/hooks/useSetEmotion';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';

const BoardWriteEmotion = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { emotion: happy, handler: onChangeHappyCount } = useSetEmotion();
  const { emotion: sad, handler: onChangeSadCount } = useSetEmotion();
  const { emotion: angry, handler: onChangeAngryCount } = useSetEmotion();
  const { emotion: gloomy, handler: onChangeGloomyCount } = useSetEmotion();

  const onClickMoveToMain = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onClickSubmit = () => {
    navigate('/main');
  };

  const onClickNextPage = () => {
    navigate('/post3');
  };

  // const countAverage =
  //   (Number(happy) + Number(sad) + Number(gloomy) + Number(angry)) / 4;

  const countAverage = (Number(happy) + Number(sad)) / 2;

  const labels = ['bad', '', 'good'].map((label, index) => (
    <S.Label key={index}>{label}</S.Label>
  ));

  localStorage.setItem('countAverage', countAverage.toString());
  localStorage.setItem('weather', angry.toString());

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
                onClickMoveToMain={onClickMoveToMain}
                onClickSubmit={onClickSubmit}
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
                      <S.ContentBoxSpan>날씨</S.ContentBoxSpan>는 어땠나요?
                    </S.ContentBoxDiv>
                    <S.CountBoxDiv>
                      <S.CountP>
                        {angry === '1' && '비왔어요'}
                        {angry === '2' && '흐렸어요'}
                        {angry === '3' && '맑았어요'}
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
                      value={parseInt(angry) || 1}
                      onChange={onChangeAngryCount}
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
                        {gloomy === '1' && 'AWFUL'}
                        {gloomy === '2' && 'GOOD'}
                        {gloomy === '3' && 'GREAT'}
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
                      value={parseInt(gloomy) || 1}
                      onChange={onChangeGloomyCount}
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
