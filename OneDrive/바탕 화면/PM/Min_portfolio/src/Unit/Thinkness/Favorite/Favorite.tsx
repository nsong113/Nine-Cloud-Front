import * as S from './Favorite.styles';

const Favorite = () => {
  return (
    <S.container>
      <S.Contents>
        <div>
          <S.Title> 2018 </S.Title>- 공군 만기전역
          <br />- SK SUNNY 서포터즈
          <S.Title> 2020 </S.Title>
          - 충북대학교 국제경영학과 편입
          <br />
          - 대학생 청소년교육지원 프로그램
          <br />
          <S.Title> 2021 </S.Title>
          - NMHC 홍보 서포터즈 <br />
          - 광주세광학교 하계 국가근로
          <br />
          - EPIS 인턴
          <br />
          <S.Title> 2022 </S.Title>
          - 한국문화재재단 산업인턴
          <br />
          <S.Title> 2023 </S.Title>
          - KISTEP 계약직
          <br />- 항해99 부트캠프
        </div>
        <S.DurationDiv>
          <span>16.04 ~ 18.04</span>
          <span>18.10 ~ 18.12</span>
          <S.FirstDiv>
            <span>20.02 ~ 22.02</span>
            <span>20.06 ~ 20.11</span>
          </S.FirstDiv>
          <S.SecondDiv>
            <span>21.04 ~ 21.08</span>
            <span>21.07 ~ 21.08</span>
            <span>21.11 ~ 21.12</span>
          </S.SecondDiv>
          <br />
          <span>22.03 ~ 22.09</span>
          <br />
          <span>23.04 ~ 23.07</span>
          <span>23.09 ~ 24.01</span>
        </S.DurationDiv>
      </S.Contents>
    </S.container>
  );
};
export default Favorite;
