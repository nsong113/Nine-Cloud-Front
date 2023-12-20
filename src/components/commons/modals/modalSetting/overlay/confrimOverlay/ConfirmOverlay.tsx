import React, { useState } from 'react';
import * as S from './ConfirmOverlay.styles';
import { IConfirmMod } from './ConfirmOverlay.types';
import { useMutation } from 'react-query';
import { IpostDiaryItem } from 'src/apis/apiesType';
import { postDiary } from 'src/apis/diary';
import { useRecoilState } from 'recoil';
import { countAverage, weather } from 'src/states/counter';

const ConfirmOverlay: React.FC<IConfirmMod> = ({
  onClickGotoMain,
  onClickGotoPost2,
  postDiaryItem,
}) => {
  const postDiaryMutation = useMutation<void, Error, IpostDiaryItem, unknown>(
    postDiary,
    {
      onSuccess: () => {
        onClickGotoMain();
      },
    }
  );

  const onClickPostHandler = () => {
    if (postDiaryItem) {
      postDiaryMutation.mutate(postDiaryItem);
    }
  };

  const [countAverageAtom, setCountAverageAtom] = useRecoilState(countAverage);
  const [weatherAtom, setWeatherAtom] = useRecoilState(weather);

  const [emotionPicture, setEmotionPicture] = useState('');

  //감정 이모티콘 생성
  switch (true) {
    case weatherAtom === '1' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/rain_sad.png') {
        setEmotionPicture('/rain_sad.png');
      }
      break;
    case weatherAtom === '1' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/rain_soso.png') {
        setEmotionPicture('/rain_soso.png');
      }
      break;
    case weatherAtom === '1' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/rain_happy.png') {
        setEmotionPicture('/rain_happy.png');
      }
      break;
    case weatherAtom === '2' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/cloud_sad.png') {
        setEmotionPicture('/cloud_sad.png');
      }
      break;
    case weatherAtom === '2' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/cloud_soso.png') {
        setEmotionPicture('/cloud_soso.png');
      }
      break;
    case weatherAtom === '2' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/cloud_happy.png') {
        setEmotionPicture('/cloud_happy.png');
      }
      break;
    case weatherAtom === '3' && countAverageAtom <= 1.6:
      if (emotionPicture !== '/sun_sad.png') {
        setEmotionPicture('/sun_sad.png');
      }
      break;
    case weatherAtom === '3' &&
      countAverageAtom > 1.6 &&
      countAverageAtom <= 3.3:
      if (emotionPicture !== '/sun_soso.png') {
        setEmotionPicture('/sun_soso.png');
      }
      break;
    case weatherAtom === '3' && countAverageAtom > 3.3 && countAverageAtom <= 5:
      if (emotionPicture !== '/sun_happy.png') {
        setEmotionPicture('/sun_happy.png');
      }
      break;
    default:
      console.log('아무것도 아님');
      break;
  }

  return (
    <S.ContainerDiv className='modal' onClick={onClickGotoPost2}>
      <S.ModalContentDiv>
        <img
          src={emotionPicture}
          alt='최종 감정이모티콘'
          style={emotionStyle}
        />
        <S.TitleBoxDiv>
          <S.TextStyleSpan>
            <S.TextStyleSpanH5>
              오늘의 클라우드와 함께 <br />
              감정일기를 등록하시겠어요?
            </S.TextStyleSpanH5>
            <S.TextStyleSpanP>
              등록 후에도 수정할 수 있으니 <br /> 자유롭게 등록해보세요!
            </S.TextStyleSpanP>
          </S.TextStyleSpan>
        </S.TitleBoxDiv>
        <S.BoxButton>
          <S.CancelButton onClick={onClickGotoPost2}>돌아가기</S.CancelButton>
          <S.StyleButton
            onClick={() => {
              onClickPostHandler();
            }}
          >
            등록하기
          </S.StyleButton>
        </S.BoxButton>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default ConfirmOverlay;

const emotionStyle = {
  transform: 'scale(0.5)',
};
