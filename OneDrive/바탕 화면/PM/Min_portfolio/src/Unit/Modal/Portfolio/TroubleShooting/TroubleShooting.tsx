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
      'https://velog.io/@uiop3996/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%BA%A1%EC%B2%98%EB%A7%81%EA%B3%BC-%EB%B2%84%EB%B8%94%EB%A7%81',
      '_blank'
    );
  };

  const onClickSecondTrouble = () => {
    window.open('https://velog.io/@uiop3996/-', '_blank');
  };

  return (
    <S.Container>
      {!isSecondTrouble && (
        <S.ContentsBoxDiv>
          <S.HeaderDiv>
            <S.TitleText>트러블슈팅 1 | Event Capturing</S.TitleText>
            <S.VelogBtn onClick={onClickFirstTrouble}>기록</S.VelogBtn>
          </S.HeaderDiv>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              최상단 태그의 이벤트 핸들러 함수가 자식 태그들에게도 적용이 되는
              문제
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              해당 태그의 직계 자식 태그에 이벤트 핸들러 함수 생성
            </S.FirstSollutionContents>
            <S.FirstSollution>[2단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              event.stopPropagation(); 속성을 적용
            </S.FirstSollutionContents>
            <S.SollutionTitle>ο 적용효과</S.SollutionTitle>
            <S.FirstSollutionContents>
              부모 요소에게 자식 태그들이 영향을 받지 않게 됨
            </S.FirstSollutionContents>
          </S.Contents>
        </S.ContentsBoxDiv>
      )}
      {isSecondTrouble && (
        <S.ContentsBoxDiv>
          <S.HeaderDiv>
            <S.TitleText>트러블슈팅 2 | 레이아웃 </S.TitleText>
            <S.VelogBtn onClick={onClickSecondTrouble}>기록</S.VelogBtn>
          </S.HeaderDiv>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              화면 크기가 줄어들면, 모든 레이아웃이 무너지는 문제
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              styled-components에 media query의 max-width 적용
            </S.FirstSollutionContents>
            <S.FirstSollution>[2단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              상황에 따라, 전체 레이아웃을 다양하게 변경
            </S.FirstSollutionContents>
            <S.EffectTitle>ο 적용효과</S.EffectTitle>
            <S.EffectContents>
              반응형 웹사이트를 만들어, 본 서비스가 다양한 환경에서 정상 작동
              되게끔 구현
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
