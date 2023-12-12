import React from 'react';
import * as S from './Main.styles';
import { IViewAllProps, ViewAllInfiniteProps } from './Main.types';

const ViewAllInfinite: React.FC<ViewAllInfiniteProps> = ({ item }) => {
  //이 컴포넌트에서 조건부 렌더링
  return (
    <S.ViewAllEachBoxDiv>
      <S.ViewAllEachFlex>
        <S.ViewAllIMGbox>
          <img src='/expic.png' alt='expic'></img>
        </S.ViewAllIMGbox>
        <S.ViewAllRightContentDiv>
          <S.ViewAllRightFlexDiv>
            <S.ViewAllDateDiv>{item.createdAt}</S.ViewAllDateDiv>
            <S.ViewAllPublicIMGDiv>
              <img src='/happy.png' style={imgstyle} alt='happy'></img>
            </S.ViewAllPublicIMGDiv>
          </S.ViewAllRightFlexDiv>
          <S.ViewAllEmojiIMGDiv>
            <img src='/happy.png' style={imgstyle} alt='happy'></img>
          </S.ViewAllEmojiIMGDiv>
          <S.ViewAllContentP>{item.content}</S.ViewAllContentP>
        </S.ViewAllRightContentDiv>
      </S.ViewAllEachFlex>
    </S.ViewAllEachBoxDiv>
  );
};

export default ViewAllInfinite;

const imgstyle = {
  width: '30px',
  height: '30px,',
};
