import React from 'react';
import * as S from './Main.styles';
import {
  IViewAllProps,
  IViewAllPropsEach,
  IViewAllPropsPure,
  ViewAllInfiniteProps,
} from './Main.types';
import { VideoCard } from 'src/components/commons/utills/Date/date';
import { format } from 'date-fns';

// const ViewAllInfinite: React.FC<IViewAllPropsPure> = ({ item }) => {
const ViewAllInfinite: React.FC<IViewAllPropsPure> = (props) => {
  //이 컴포넌트에서 조건부 렌더링
  // console.log('item', props.item);
  return (
    <>
      {props.item?.data?.map((eachItem: IViewAllPropsEach) => {
        // const formattedDate = format(eachItem.createdAt, 'yyyy. MM. dd');
        const formattedDate = format(
          new Date(eachItem.createdAt),
          'yyyy. MM. dd'
        );

        return (
          <S.ViewAllEachBoxDiv>
            <S.ViewAllEachFlex>
              <S.ViewAllIMGbox>
                <img src={eachItem.image} alt='expic' style={mainInageStyle} />
              </S.ViewAllIMGbox>
              <S.ViewAllRightContentDiv>
                <S.ViewAllRightFlexDiv>
                  <S.ViewAllDateDiv>
                    {/* {VideoCard(eachItem.createdAt)} */}
                    {/* {eachItem.createdAt.format('YYYYMMDD HH:mm:ss')} */}
                    {formattedDate}
                  </S.ViewAllDateDiv>
                  <S.ViewAllPublicIMGDiv>
                    <img src='/happy.png' style={imgstyle} alt='happy' />
                    {eachItem.isPublic}
                  </S.ViewAllPublicIMGDiv>
                </S.ViewAllRightFlexDiv>
                <S.ViewAllEmojiIMGDiv>
                  <img src='/happy.png' style={imgstyle} alt='happy' />
                  {eachItem.EmotionStatus}
                </S.ViewAllEmojiIMGDiv>
                <S.ViewAllContentP>{eachItem.content}</S.ViewAllContentP>
              </S.ViewAllRightContentDiv>
            </S.ViewAllEachFlex>
          </S.ViewAllEachBoxDiv>
        );
      })}
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
