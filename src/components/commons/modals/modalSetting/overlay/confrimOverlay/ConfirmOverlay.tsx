import React, { useEffect, useState } from 'react';
import * as S from './ConfirmOverlay.styles';
import { IConfirmMod } from './ConfirmOverlay.types';
import { useMutation } from 'react-query';
import { IpostDiaryItem } from 'src/apis/apiesType';
import { postDiary } from 'src/apis/diary';
import { useRecoilState } from 'recoil';
import {
  contents,
  countAverage,
  happyA,
  sadA,
  sleep,
  weather,
  isPublic,
} from 'src/states/counter';
import { IoMdHeart, IoIosHeartHalf } from 'react-icons/io';

const ConfirmOverlay: React.FC<IConfirmMod> = ({
  onClickGotoMain,
  onClickGotoPost2,
  postDiaryItem,
}) => {
  /////////////////
  const [countAverageToday, setCountAverageToday] =
    useRecoilState(countAverage);
  const [weatherToday, setWeatherToday] = useRecoilState(weather);
  const [contentsToday, setContentsToday] = useRecoilState(contents);
  const [temperatureAtom, setTemperature] = useRecoilState<string>(happyA);
  const [humidAtom, setHumid] = useRecoilState<string>(sadA);
  const [sleepAtom, setSleep] = useRecoilState<string>(sleep);
  /////////////////
  const [isPublicToday, setIsPublicToday] = useRecoilState<boolean>(isPublic);
  const [isChecked, setIsChecked] = useState(true); //토글 체크 여부

  const [countAverageAtom, setCountAverageAtom] = useRecoilState(countAverage);
  const [weatherAtom, setWeatherAtom] = useRecoilState(weather);

  const [emotionPicture, setEmotionPicture] = useState('');

  let [postDiaryEveryItem, setPostDiaryEveryItem] =
    useState<IpostDiaryItem | null>(null);

  // if (!postDiaryItem) return;

  useEffect(() => {
    if (postDiaryItem) {
      setPostDiaryEveryItem({
        EmotionalStatus: countAverageToday,
        content: contentsToday,
        image: postDiaryItem.image,
        isPublic: isPublicToday,
        sentence: localStorage.getItem('sentence'),
        weather: weatherToday,
        temperature: temperatureAtom,
        humid: humidAtom,
        sleep: sleepAtom,
      });
    }
  }, [
    countAverageToday,
    contentsToday,
    weatherToday,
    temperatureAtom,
    humidAtom,
    sleepAtom,
    isPublicToday,
  ]);

  const postDiaryMutation = useMutation<void, Error, IpostDiaryItem, unknown>(
    postDiary,
    {
      onSuccess: () => {
        onClickGotoMain();
      },
    }
  );

  const onClickPostHandler = () => {
    if (postDiaryEveryItem) {
      postDiaryMutation.mutate(postDiaryEveryItem);
    }
  };

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

  const onChangeIsPublicHandler = () => {
    setIsPublicToday(!isPublicToday);
    setIsChecked(!isChecked);
  };

  const stopPropogate = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <S.ContainerDiv className='modal' onClick={onClickGotoPost2}>
      <S.ModalContentDiv onClick={stopPropogate}>
        <img
          src={emotionPicture}
          alt='최종 감정이모티콘'
          style={emotionStyle}
        />
        <S.ModalWrapper>
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
          <S.ToggleDiv>
            <S.ToggleFlexDiv>
              {/* <S.ToggleP>
                오늘의 일기를 전체공개로 등록해 <br />
                사람들과 공유해보세요!
              </S.ToggleP> */}
              <S.DiaryToggleTitleDiv>
                <S.CustomToggle
                  id='customToggle'
                  checked={isChecked}
                  icons={{
                    unchecked: (
                      <S.ToggleTumbsImg
                        src='/private_person.png'
                        alt='사람들'
                      />
                    ),
                    checked: <S.PublicImg />,
                  }}
                  onChange={onChangeIsPublicHandler}
                />
              </S.DiaryToggleTitleDiv>

              {!isChecked && <div style={{ width: '50px' }}></div>}
              {!isChecked ? (
                <S.PrivateTextDiv>
                  <S.SubTitleSpan>
                    나만 일기를 <br />
                    확인할 수 있어요.
                  </S.SubTitleSpan>
                </S.PrivateTextDiv>
              ) : (
                isChecked && (
                  <S.PublicTextDiv>
                    <S.SubTitleSpan>
                      다른 사람들과 <br />
                      공유할 수 있습니다.
                    </S.SubTitleSpan>
                  </S.PublicTextDiv>
                )
              )}
            </S.ToggleFlexDiv>
          </S.ToggleDiv>
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
        </S.ModalWrapper>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default ConfirmOverlay;

const emotionStyle = {
  height: '600px',
  transform: 'scale(0.3)',
};
