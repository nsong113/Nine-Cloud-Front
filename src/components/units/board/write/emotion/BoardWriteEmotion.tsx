import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './BoardWriteEmotion.styles';
import { useNavigate } from 'react-router-dom';
import AlertModal from 'src/components/commons/modals/alert/alertModal';
import useSetEmotion from 'src/components/commons/hooks/useSetEmotion';

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

  const countAverage =
    (Number(happy) + Number(sad) + Number(gloomy) + Number(angry)) / 4;

  const labels = ['MIN', '', 'MAX'].map((label, index) => (
    <S.Label key={index}>{label}</S.Label>
  ));

  localStorage.setItem('countAverage', countAverage.toString());

  return (
    <S.EmotionContainerDiv>
      <S.EmotionWrapperUPDiv>
        <S.HeaderButtonBoxDiv>
          <S.HeaderLine></S.HeaderLine>
          <S.HeaderFlexBox>
            <S.ThreeFilledSpan>Emotion</S.ThreeFilledSpan>
            <S.OneBlackSpan />
            <S.TwoBlankSpan />
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
                <S.ContentBoxDiv>
                  오늘의 <S.ContentBoxSpan>행복도</S.ContentBoxSpan>는
                  어떠신가요?
                </S.ContentBoxDiv>
                <S.ContentInputBoxDiv>
                  <S.ContentInputDescDiv>
                    일과를 돌아보며 <br />
                    전반적인 평가를 내려보세요!
                  </S.ContentInputDescDiv>
                  <S.SliderInput
                    type='range'
                    min={1}
                    max={3}
                    value={parseInt(happy) || 1}
                    onChange={onChangeHappyCount}
                  />
                  <S.LabelsDiv>
                    <S.Labels>{labels}</S.Labels>
                  </S.LabelsDiv>
                </S.ContentInputBoxDiv>
              </S.ContentsBoxDiv>
              <S.CountBoxDiv>
                <S.CountP>
                  {happy === '1' && 'AWFUL'}
                  {happy === '2' && 'GOOD'}
                  {happy === '3' && 'GREAT'}
                </S.CountP>
              </S.CountBoxDiv>
            </S.SliderBoxDiv>
            <S.SliderBoxDiv>
              <S.ContentsBoxDiv>
                <S.ContentBoxDiv>
                  오늘의 <S.ContentBoxSpan>소비 상태</S.ContentBoxSpan>는
                  어땠나요?
                </S.ContentBoxDiv>
                <S.ContentInputBoxDiv>
                  <S.ContentInputDescDiv>
                    괜찮아요 <br />
                    솔찍해져보세요
                  </S.ContentInputDescDiv>
                  <S.SliderInput
                    type='range'
                    min={1}
                    max={3}
                    value={parseInt(sad) || 1}
                    onChange={onChangeSadCount}
                  />
                  <S.LabelsDiv>
                    <S.Labels>{labels}</S.Labels>
                  </S.LabelsDiv>
                </S.ContentInputBoxDiv>
              </S.ContentsBoxDiv>
              <S.CountBoxDiv>
                <S.CountP>
                  {sad === '1' && 'AWFUL'}
                  {sad === '2' && 'GOOD'}
                  {sad === '3' && 'GREAT'}
                </S.CountP>
              </S.CountBoxDiv>
            </S.SliderBoxDiv>
            <S.SliderBoxDiv>
              <S.ContentsBoxDiv>
                <S.ContentBoxDiv>
                  <S.ContentBoxSpan>식사</S.ContentBoxSpan>는 잘 챙기셨나요?
                </S.ContentBoxDiv>
                <S.ContentInputBoxDiv>
                  <S.ContentInputDescDiv>
                    때에 맞춰 건강하게 먹는 것도 <br />
                    아주 중요해요
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
              <S.CountBoxDiv>
                <S.CountP>
                  {angry === '1' && 'ONCE'}
                  {angry === '2' && 'TWICE'}
                  {angry === '3' && 'THREE T.'}
                </S.CountP>
              </S.CountBoxDiv>
            </S.SliderBoxDiv>
            <S.SliderBoxDiv>
              <S.ContentsBoxDiv>
                <S.ContentBoxDiv>
                  <S.ContentBoxSpan>스트레스</S.ContentBoxSpan>
                </S.ContentBoxDiv>
                <S.ContentInputBoxDiv>
                  <S.ContentInputDescDiv>
                    일과를 돌아보며 <br />
                    전반적인 평가를 내려보세요!
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
              <S.CountBoxDiv>
                <S.CountP>
                  {gloomy === '1' && 'AWFUL'}
                  {gloomy === '2' && 'GOOD'}
                  {gloomy === '3' && 'GREAT'}
                </S.CountP>
              </S.CountBoxDiv>
            </S.SliderBoxDiv>
          </S.SliderWrapperDiv>

          <S.ButtonBoxDiv>
            <S.PrevButton onClick={onClickMoveToMain}>이전</S.PrevButton>
            <S.NextButton onClick={onClickNextPage}>다음</S.NextButton>
          </S.ButtonBoxDiv>
        </S.ContainerDiv>
      </S.EmotionWrapperDOWNdiv>
    </S.EmotionContainerDiv>
  );
};

export default BoardWriteEmotion;
