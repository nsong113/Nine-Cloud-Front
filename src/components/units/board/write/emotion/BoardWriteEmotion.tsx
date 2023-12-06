import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './BoardWriteEmotion.styles';
import { useNavigate } from 'react-router-dom';
import AlertModal from 'src/components/commons/modals/alert/alertModal';

const BoardWriteEmotion = () => {
  const [happy, setHappy] = useState('5');
  const [sad, setSad] = useState('5');
  const [angry, setAngry] = useState('5');
  const [gloomy, setGloomy] = useState('5');
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

  const countAverage =
    (Number(happy) + Number(sad) + Number(gloomy) + Number(angry)) / 4;

  console.log('카운트에버리지', countAverage);

  const labels = Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
    <S.Label key={number} onClick={() => onClickSlider(number)}>
      {number}
    </S.Label>
  ));

  const onClickNextPage = () => {
    navigate('/post2');
  };

  return (
    <S.ContainerDiv>
      {isModalOpen && (
        <AlertModal
          onClickMoveToMain={onClickMoveToMain}
          onClickSubmit={onClickSubmit}
        />
      )}
      <S.ButtonWrapperDiv>
        <S.OneFilledSpan size={30} />
        <S.TwoBlankSpan size={30} />
        <S.ThreeBlackSpan size={30} />
      </S.ButtonWrapperDiv>
      <S.SliderWrapperDiv>
        <S.SliderBoxDiv>
          <S.ContentsBoxDiv>
            <p>기쁨</p>
            <S.SliderInput
              type='range'
              min={1}
              max={9}
              value={parseInt(happy) || 1}
              onChange={onChangeHappyCount}
            />
            <S.LabelsDiv>
              <S.Labels>{labels}</S.Labels>
            </S.LabelsDiv>
          </S.ContentsBoxDiv>
          <S.CountBoxDiv>
            <S.CountP>{happy}</S.CountP>
          </S.CountBoxDiv>
        </S.SliderBoxDiv>
        <S.SliderBoxDiv>
          <S.ContentsBoxDiv>
            <p>슬픔</p>
            <S.SliderInput
              type='range'
              min={1}
              max={9}
              value={parseInt(sad) || 1}
              onChange={onChangeSadCount}
            />
            <S.LabelsDiv>
              <S.Labels>{labels}</S.Labels>
            </S.LabelsDiv>
          </S.ContentsBoxDiv>
          <S.CountBoxDiv>
            <S.CountP>{sad}</S.CountP>
          </S.CountBoxDiv>
        </S.SliderBoxDiv>
        <S.SliderBoxDiv>
          <S.ContentsBoxDiv>
            <p>피로도</p>
            <S.SliderInput
              type='range'
              min={1}
              max={9}
              value={parseInt(angry) || 1}
              onChange={onChangeAngryCount}
            />
            <S.LabelsDiv>
              <S.Labels>{labels}</S.Labels>
            </S.LabelsDiv>
          </S.ContentsBoxDiv>
          <S.CountBoxDiv>
            <S.CountP>{angry}</S.CountP>
          </S.CountBoxDiv>
        </S.SliderBoxDiv>
        <S.SliderBoxDiv>
          <S.ContentsBoxDiv>
            <p>스트레스</p>
            <S.SliderInput
              type='range'
              min={1}
              max={9}
              value={parseInt(gloomy) || 1}
              onChange={onChangeGloomyCount}
            />
            <S.LabelsDiv>
              <S.Labels>{labels}</S.Labels>
            </S.LabelsDiv>
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
  );
};

export default BoardWriteEmotion;
