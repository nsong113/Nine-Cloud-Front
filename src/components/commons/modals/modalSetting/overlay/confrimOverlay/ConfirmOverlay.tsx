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
  sentence,
} from 'src/states/counter';
import useMakeEmotionEmoji from 'src/components/commons/hooks/useMakeEmotionEmoji';
import PostBtn from 'src/components/commons/utills/PostBtn/PostBtn';

const ConfirmOverlay: React.FC<IConfirmMod> = ({
  onClickGotoMain,
  onClickGotoPost2,
  postDiaryItem,
}) => {
  const [countAverageToday, setCountAverageToday] =
    useRecoilState(countAverage);
  const [weatherToday, setWeatherToday] = useRecoilState(weather);
  const [contentsToday, setContentsToday] = useRecoilState(contents);
  const [temperatureAtom, setTemperature] = useRecoilState<string>(happyA);
  const [humidAtom, setHumid] = useRecoilState<string>(sadA);
  const [sleepAtom, setSleep] = useRecoilState<string>(sleep);
  const [isPublicToday, setIsPublicToday] = useRecoilState<boolean>(isPublic);
  const [isChecked, setIsChecked] = useState(true);

  let [postDiaryEveryItem, setPostDiaryEveryItem] =
    useState<IpostDiaryItem | null>(null);

  const { emotionPicture } = useMakeEmotionEmoji();
  const [sentenceAtom, setSentence] = useRecoilState(sentence);

  console.log('modal postDiary', postDiaryItem);

  useEffect(() => {
    if (postDiaryItem) {
      setPostDiaryEveryItem({
        EmotionalStatus: countAverageToday,
        content: contentsToday,
        image: postDiaryItem.image,
        isPublic: isPublicToday,
        sentence: sentenceAtom,
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
        <S.ToggleDiv>
          <S.DiaryToggleTitleDiv>
            <S.CustomToggle
              id='customToggle'
              checked={isChecked}
              icons={{
                unchecked: (
                  <S.ToggleTumbsImg src='/private_person.png' alt='사람들' />
                ),
                checked: <S.PublicImg />,
              }}
              onChange={onChangeIsPublicHandler}
            />
          </S.DiaryToggleTitleDiv>
          {!isChecked && <div style={{ width: '50px' }}></div>}
          {!isChecked ? (
            <S.PublicTextDiv>
              <S.SubTitleSpan>나만 일기를 확인할 수 있어요.</S.SubTitleSpan>
            </S.PublicTextDiv>
          ) : (
            isChecked && (
              <S.PublicTextDiv>
                <S.SubTitleSpan>
                  다른 사람들과 공유할 수 있습니다.
                </S.SubTitleSpan>
              </S.PublicTextDiv>
            )
          )}
        </S.ToggleDiv>
        <S.emojiImgBox>
          <img
            src={emotionPicture}
            alt='최종 감정이모티콘'
            style={emotionStyle}
          />
        </S.emojiImgBox>
        <S.ModalWrapper>
          <S.TitleBoxDiv>
            <S.TextStyleSpan>
              <S.TextStyleSpanH5>
                오늘의 클라우드와 함께 <br />
                감정일기를 등록하시겠어요?
              </S.TextStyleSpanH5>
            </S.TextStyleSpan>
          </S.TitleBoxDiv>
          <S.BoxButton>
            <PostBtn
              page={'confirm'}
              onClickGotoPost2={onClickGotoPost2}
              onClickPostHandler={onClickPostHandler}
            />
          </S.BoxButton>
        </S.ModalWrapper>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default ConfirmOverlay;

const emotionStyle = {
  width: '100%',
  height: '100%',
};
