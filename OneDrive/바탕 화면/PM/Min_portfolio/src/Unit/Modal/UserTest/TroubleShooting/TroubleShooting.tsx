import { useState } from 'react';
import * as S from './TroubleShooting.styles';

const TroubleShooting = () => {
  const [isSecondTrouble, setIsSecondTrouble] = useState(false);

  const onClickFirstBtn = () => {
    setIsSecondTrouble(false);
  };

  const onClickSecondBtn = () => {
    setIsSecondTrouble(true);
  };

  const onClickFirstTrouble = () => {
    window.open(
      'https://velog.io/@uiop3996/%EC%A2%8B%EC%95%84%EC%9A%94-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85',
      '_blank'
    );
  };

  const onClickSecondTrouble = () => {
    window.open(
      'https://velog.io/@uiop3996/240107-CSS-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85',
      '_blank'
    );
  };
  return (
    <S.Container>
      {!isSecondTrouble && (
        <S.ContentsBoxDiv>
          <S.HeaderDiv>
            <S.TitleText>사례 1 | 좋아요 기능</S.TitleText>
            <S.VelogBtn onClick={onClickFirstTrouble}>기록</S.VelogBtn>
          </S.HeaderDiv>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              좋아요 버튼을 눌렀을 때, 변화가 없어 여부 확인 불가
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              백엔드에게 좋아요의 여부에 대한 boolean 값을 가지는 새로운 값을
              추가로 받음
            </S.FirstSollutionContents>
            <S.FirstSollution>[2단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              useEffect를 통해 boolean 값에 따라 좋아요 이미지 변경
            </S.FirstSollutionContents>
            <S.SollutionTitle>ο 적용효과</S.SollutionTitle>
            <S.FirstSollutionContents>
              좋아요를 누르지 않은 게시글이면 빈 하트가 나오고, 눌렀다면 꽉 찬
              하트이미지가 출력
            </S.FirstSollutionContents>
          </S.Contents>
        </S.ContentsBoxDiv>
      )}
      {isSecondTrouble && (
        <S.ContentsBoxDiv>
          <S.HeaderDiv>
            <S.TitleText>사례 2 | 달력 hover 효과</S.TitleText>
            <S.VelogBtn onClick={onClickSecondTrouble}>기록</S.VelogBtn>
          </S.HeaderDiv>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              달력의 날짜인 숫자에 마우스를 올려야만 hover 효과 발생
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              달력 날짜가 아니라, 달력 날짜 박스에 hover 효과 적용
            </S.FirstSollutionContents>
            <S.FirstSollution>[2단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              hover 적용할 때, 템플릿 리터럴을 사용해, 달력 날짜도 함께 적용
            </S.FirstSollutionContents>
            <S.EffectTitle>ο 적용효과</S.EffectTitle>
            <S.EffectContents>
              사용자가 날짜에 마우스를 딱 올려야 hover가 적용되는 게 아니라서
              서비스를 이용함에 있어, 편의성 증가
            </S.EffectContents>
          </S.Contents>
        </S.ContentsBoxDiv>
      )}
      <S.PaginationDiv>
        <S.FirstButton onClick={onClickFirstBtn}>1</S.FirstButton>
        <S.FirstButton onClick={onClickSecondBtn}>2</S.FirstButton>
      </S.PaginationDiv>
    </S.Container>
  );
};

export default TroubleShooting;
