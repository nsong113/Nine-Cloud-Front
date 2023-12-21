import React, { useState } from 'react';
import * as S from './Main.styles';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import * as DOMPurify from 'dompurify';
import ConfirmOverlay from 'src/components/commons/modals/modalSetting/overlay/confrimOverlay/ConfirmOverlay';

const ViewAllInfinite = (props: any) => {
  const formattedDate = format(new Date(props.item.createdAt), 'yyyy. MM. dd');
  const navigate = useNavigate();

  const onClickGotoDetailPage = (id: any) => {
    navigate(`/post/${id}`);
  };

  const weather = props.item.weather; //string
  const countAverage = props.item.EmotionStatus; //number
  const isPublic = props.item.isPublic;
  console.log('isPublic', isPublic);
  const [emotionPicture, setEmotionPicture] = useState('');
  const [isPublicPicture, setIsPublicPicture] = useState('');

  switch (true) {
    case isPublic === true:
      if (isPublicPicture !== '/Public.png') {
        setIsPublicPicture('/Public.png');
      }
      break;
    case isPublic === false:
      if (isPublicPicture !== '/Private.png') {
        setIsPublicPicture('/Private.png');
      }
      break;
    default:
      console.log('아무것도 아님');
      break;
  }

  switch (true) {
    case weather === '1' && countAverage <= 1.6:
      if (emotionPicture !== '/rain_sad.png') {
        setEmotionPicture('/rain_sad.png');
      }
      break;
    case weather === '1' && countAverage > 1.6 && countAverage <= 3.3:
      if (emotionPicture !== '/rain_soso.png') {
        setEmotionPicture('/rain_soso.png');
      }
      break;
    case weather === '1' && countAverage > 3.3 && countAverage <= 5:
      if (emotionPicture !== '/rain_happy.png') {
        setEmotionPicture('/rain_happy.png');
      }
      break;
    case weather === '2' && countAverage <= 1.6:
      if (emotionPicture !== '/cloud_sad.png') {
        setEmotionPicture('/cloud_sad.png');
      }
      break;
    case weather === '2' && countAverage > 1.6 && countAverage <= 3.3:
      if (emotionPicture !== '/cloud_soso.png') {
        setEmotionPicture('/cloud_soso.png');
      }
      break;
    case weather === '2' && countAverage > 3.3 && countAverage <= 5:
      if (emotionPicture !== '/cloud_happy.png') {
        setEmotionPicture('/cloud_happy.png');
      }
      break;
    case weather === '3' && countAverage <= 1.6:
      if (emotionPicture !== '/sun_sad.png') {
        setEmotionPicture('/sun_sad.png');
      }
      break;
    case weather === '3' && countAverage > 1.6 && countAverage <= 3.3:
      if (emotionPicture !== '/sun_soso.png') {
        setEmotionPicture('/sun_soso.png');
      }
      break;
    case weather === '3' && countAverage > 3.3 && countAverage <= 5:
      if (emotionPicture !== '/sun_happy.png') {
        setEmotionPicture('/sun_happy.png');
      }
      break;
    default:
      console.log('아무것도 아님');
      break;
  }

  return (
    <>
      <S.ViewAllEachBoxDiv
        onClick={() => onClickGotoDetailPage(props.item.diaryId)}
      >
        <S.ViewAllEachFlex>
          <S.ViewAllIMGbox>
            <img src={props.item.image} alt='expic' style={mainInageStyle} />
          </S.ViewAllIMGbox>
          <S.ViewAllRightContentDiv>
            <S.ViewAllRightFlexDiv>
              <S.ViewAllEmojiIMGDiv>
                <img src={emotionPicture} style={imgstyle} alt='감정이모티콘' />
              </S.ViewAllEmojiIMGDiv>
              <S.ViewAllPublicIMGDiv>
                <img
                  src={isPublicPicture}
                  style={publicStyle}
                  alt='공개여부이모티콘'
                />
                {props.item.isPublic}
              </S.ViewAllPublicIMGDiv>
            </S.ViewAllRightFlexDiv>
            <S.ViewAllDateDiv>{formattedDate}</S.ViewAllDateDiv>

            <S.ViewAllContentP
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(props.item.content)),
              }}
            ></S.ViewAllContentP>
          </S.ViewAllRightContentDiv>
        </S.ViewAllEachFlex>
      </S.ViewAllEachBoxDiv>
    </>
  );
};

export default ViewAllInfinite;

const imgstyle = {
  width: '50px',
  height: '50px,',
};

const mainInageStyle = {
  width: '90%',
  height: '90%',
};

const publicStyle = {
  width: '80%',
  height: '80%',
};
