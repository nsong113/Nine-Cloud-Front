import React from 'react';
import * as S from './Main.styles';
import { format } from 'date-fns';

const ViewAllInfinite = (props: any) => {
  const formattedDate = format(new Date(props.item.createdAt), 'yyyy. MM. dd');

  return (
    <>
      <S.ViewAllEachBoxDiv>
        <S.ViewAllEachFlex>
          <S.ViewAllIMGbox>
            <img src={props.item.image} alt='expic' style={mainInageStyle} />
          </S.ViewAllIMGbox>
          <S.ViewAllRightContentDiv>
            <S.ViewAllRightFlexDiv>
              <S.ViewAllDateDiv>{formattedDate}</S.ViewAllDateDiv>
              <S.ViewAllPublicIMGDiv>
                <img src='/happy.png' style={imgstyle} alt='happy' />
                {props.item.isPublic}
              </S.ViewAllPublicIMGDiv>
            </S.ViewAllRightFlexDiv>
            <S.ViewAllEmojiIMGDiv>
              <img src='/happy.png' style={imgstyle} alt='happy' />
              {props.item.EmotionStatus}
            </S.ViewAllEmojiIMGDiv>
            <S.ViewAllContentP>{props.item.content}</S.ViewAllContentP>
          </S.ViewAllRightContentDiv>
        </S.ViewAllEachFlex>
      </S.ViewAllEachBoxDiv>
    </>
  );
};

export default ViewAllInfinite;

const imgstyle = {
  width: '30px',
  height: '30px,',
};

const mainInageStyle = {
  width: '50px',
  height: '50px',
};
