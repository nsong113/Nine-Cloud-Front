import React from 'react';
import * as S from './diary/BoardWriteDiary.styles';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';

const renderComponent = (type: string, word: string): JSX.Element => {
  switch (type) {
    case 'checked':
      return (
        <>
          <FaCheck
            style={{
              position: 'absolute',
              zIndex: '17',
              color: '#5035A6',
            }}
          />
          <S.OneBlackSpan />
          <S.SelectP color={type}>{word}</S.SelectP>
        </>
      );
    case 'now':
      return (
        <>
          <S.ThreeFilledSpan></S.ThreeFilledSpan>
          <S.SelectP color={type}>{word}</S.SelectP>
        </>
      );
    case 'yet':
      return (
        <>
          <S.OneBlackSpan />
          <S.SelectP color={type}>{word}</S.SelectP>
        </>
      );
    default:
      return <></>;
  }
};

const PostUpperWrapper = ({
  first,
  firstWord,
  second,
  secondWord,
  third,
  thirdWord,
  progress,
}: {
  first: string;
  firstWord: string;
  second: string;
  secondWord: string;
  third: string;
  thirdWord: string;
  progress: string;
}): JSX.Element => {
  return (
    <S.DiaryWrapperUPDiv>
      <S.HeaderButtonBoxDiv>
        <S.HeaderLineDone width={progress} />
        <S.HeaderLine />
        <S.HeaderFlexBox>
          <S.SelectBox>{renderComponent(first, firstWord)}</S.SelectBox>
          <S.SelectBox>{renderComponent(second, secondWord)}</S.SelectBox>
          <S.SelectBox>{renderComponent(third, thirdWord)}</S.SelectBox>
        </S.HeaderFlexBox>
      </S.HeaderButtonBoxDiv>
    </S.DiaryWrapperUPDiv>
  );
};

export default React.memo(PostUpperWrapper);
