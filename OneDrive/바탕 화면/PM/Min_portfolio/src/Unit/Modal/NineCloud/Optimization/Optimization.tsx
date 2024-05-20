import { useState } from 'react';
import * as S from './Otimization.styles';

const Optimization = () => {
  const [isSecondOpt, setIsSecondOpt] = useState(false);

  const onClickFirstBtn = () => {
    setIsSecondOpt(false);
  };

  const onClickSecondBtn = () => {
    setIsSecondOpt(true);
  };

  const onClickFirstOpt = () => {
    window.open(
      'https://velog.io/@uiop3996/240102-chunk-%EC%82%AC%EC%9D%B4%EC%A6%88-%EC%A4%84%EC%9D%B4%EA%B8%B0',
      '_blank'
    );
  };

  const onClickSecondOpt = () => {
    window.open(
      'https://velog.io/@uiop3996/image-preload',
      '_blank'
    );
  };

  return (
    <S.Container>
      {!isSecondOpt && (
        <S.ContentsBoxDiv>
          <S.HeaderDiv>
            <S.TitleText>최적화 1 | 번들 크기 최소화</S.TitleText>
            <S.VelogBtn onClick={onClickFirstOpt}>기록</S.VelogBtn>
          </S.HeaderDiv>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              TBT 시간이 너무 오래 걸려, 렌더링 속도 저하
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              bundlephobia를 통해 라이브러리 번들 크기 측정하고 라이브러리 정리 및 분석
            </S.FirstSollutionContents>
            <S.FirstSollution>[2단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              build시 필요없는 파일도 모두 포함시키는 react-icon 대신 필요한 파일만 포함시키는 @react-icons/all-files로 대체
            </S.FirstSollutionContents>
            <S.SollutionTitle>ο 적용효과</S.SollutionTitle>
            <S.FirstSollutionContents>
              TBT 870 밀리세컨에서 201 밀리세컨으로 줄어듦
            </S.FirstSollutionContents>
          </S.Contents>
        </S.ContentsBoxDiv>
      )}
      {isSecondOpt && (
        <S.ContentsBoxDiv>
          <S.HeaderDiv>
            <S.TitleText>최적화 2 | 이미지 프리로드, webp </S.TitleText>
            <S.VelogBtn onClick={onClickSecondOpt}>기록</S.VelogBtn>
          </S.HeaderDiv>
          <S.Contents>
            <S.SubTitle>ο 상황 </S.SubTitle>
            <S.SubTitleContents>
              - 메인페이지에 로드 되는 이미지들의 개수가 많아 초기 렌더링 속도가 저하
            </S.SubTitleContents>
            <S.SollutionTitle>ο 해결방법</S.SollutionTitle>
            <S.FirstSollution>[1단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              확장자명 png에서 webp로 변경
            </S.FirstSollutionContents>
            <S.FirstSollution>[2단계] </S.FirstSollution>
            <S.FirstSollutionContents>
              메인페이지에서 로드 될 이미지들을 로그인페이지에서 미리 로드되게끔 로직 추가
            </S.FirstSollutionContents>
            <S.EffectTitle>ο 적용효과</S.EffectTitle>
            <S.EffectContents>
              - 이미지 로드 되는 시간이 0초에 가깝게 줄어듦
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

export default Optimization;
