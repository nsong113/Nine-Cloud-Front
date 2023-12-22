import React, { useState } from 'react';
import * as S from './CommunityMain.style';
import {
  addMonths,
  format,
  getMonth,
  getYear,
  setMonth,
  subMonths,
  getDate,
} from 'date-fns';
import { useNavigate } from 'react-router-dom';
import * as DOMPurify from 'dompurify';
import { VideoCard } from 'src/components/commons/utills/Date/date';

const CommunityEach = (props: any) => {
  // const formattedDate = format(new Date(props.item.createdAt), 'yyyy. MM. dd');

  const createdAtDate = new Date(props.item.createdAt); //Tue Dec 19 2023 09:08:45 GMT+0900 (일본 표준시)

  if (createdAtDate) {
    createdAtDate.setHours(createdAtDate.getHours() - 9);
  }

  const formattedDate = createdAtDate
    ? createdAtDate.toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  // console.log('formattedDate', formattedDate);

  const navigate = useNavigate();
  console.log('createdAtDate', createdAtDate);

  const onClickGotoDetailPage = (id: any) => {
    navigate(`/post/${id}`);
  };

  const weather = props.item.weather; //string
  const countAverage = props.item.EmotionStatus; //number
  const isPublic = props.item.isPublic;
  const [emotionPicture, setEmotionPicture] = useState('');
  const [isPublicPicture, setIsPublicPicture] = useState('');

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
                {VideoCard(createdAtDate)}
                {/* {VideoCard(kr_curr.toString())} */}
                {/* {VideoCard(props.item.createdAt)} */}
                {/* {VideoCard(props.item.updatedAt)} */}
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

export default CommunityEach;

const imgstyle = {
  width: '50px',
  height: '50px,',
};

const mainInageStyle = {
  width: '90%',
  height: '90%',
};

const publicStyle = {
  width: '50px',
  height: '50px',
};
