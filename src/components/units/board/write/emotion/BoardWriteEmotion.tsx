import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './BoardWriteEmotion.styles';
import { useNavigate } from 'react-router-dom';
import AlertModal from 'src/components/commons/modals/alert/alertModal';

const BoardWriteEmotion = () => {
  const [happy, setHappy] = useState('3');
  const [sad, setSad] = useState('3');
  const [angry, setAngry] = useState('3');
  const [gloomy, setGloomy] = useState('3');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (happy === '') {
      setHappy('1');
    }
  }, [happy, setHappy]);

  const onChangeHappyCount = (event: ChangeEvent<HTMLInputElement>) => {
    setHappy(event.target.value);
  };

  const onChangeSadCount = (event: ChangeEvent<HTMLInputElement>) => {
    setSad(event.target.value);
  };

  const onClickMoveToMain = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onChangeAngryCount = (event: ChangeEvent<HTMLInputElement>) => {
    setAngry(event.target.value);
  };

  const onChangeGloomyCount = (event: ChangeEvent<HTMLInputElement>) => {
    setGloomy(event.target.value);
  };

  const onClickSubmit = () => {
    navigate('/main');
  };

  const onClickSlider = (number: number) => {
    setHappy(number.toString());
  };
  console.log(Number(happy));

  const countAverage =
    (Number(happy) + Number(sad) + Number(gloomy) + Number(angry)) / 4;

  console.log('카운트에버리지', countAverage);

  // const labels = Array.from({ length: 2 }, (_, i) => i + 1).map((number) => (
  //   <S.Label key={number} onClick={() => onClickSlider(number)}>
  //     {number}
  //   </S.Label>
  // ));

  const labels = [
    'MIN',
    ...Array.from({ length: 2 }, (_, i) => i + 1),
    'MAX',
  ].map((label, index) => (
    <S.Label key={index} onClick={() => onClickSlider(index)}>
      {label}
    </S.Label>
  ));

  // const labels = [
  //   'MIN',
  //   ...Array.from({ length: 2 }, (_, i) => i + 1),
  //   'MAX',
  // ].map((label, index) => (
  //   <S.Label key={index} onClick={() => onClickSlider(index)}>
  //     {index === 0 || index === labels.length - 1 ? label : null}
  //   </S.Label>
  // ));

  // const labels = [
  //   'MIN',
  //   ...Array.from({ length: 2 }, (_, i) => i + 1),
  //   'MAX',
  // ];

  // const labelsJSX = labels.map((label, index) => (
  //   <S.Label key={index} onClick={() => onClickSlider(index)}>
  //     {index === 0 || index === labels.length - 1 ? label : null}
  //   </S.Label>
  // ));

  const onClickNextPage = () => {
    navigate('/post2');
  };

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
                    inputNumber={Number(happy)}
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
                <S.CountP>{happy}</S.CountP>
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
                <S.CountP>{sad}</S.CountP>
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
                <S.CountP>{angry}</S.CountP>
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
                <S.CountP>{gloomy}</S.CountP>
              </S.CountBoxDiv>
            </S.SliderBoxDiv>
            <span>{countAverage}</span>
          </S.SliderWrapperDiv>

          <S.ButtonBoxDiv>
            <S.NextButton onClick={onClickMoveToMain}>이전</S.NextButton>
            <S.NextButton onClick={onClickNextPage}>다음</S.NextButton>
          </S.ButtonBoxDiv>
        </S.ContainerDiv>
      </S.EmotionWrapperDOWNdiv>
    </S.EmotionContainerDiv>
  );
};

export default BoardWriteEmotion;
