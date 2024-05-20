import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentsBoxDiv = styled.div`
  margin-top: 20px;
  padding: 0px 40px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 20px;
`;

export const VelogBtn = styled.button`
  margin-bottom: 20px;
  height: 30px;
  line-height: 10px;
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;

  &:hover {
    background-color: #5035a6;
  }
`;

export const Contents = styled.span`
  color: black;
`;
export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17.063px;
  font-weight: 400;
`;

export const SubTitle = styled.div`
  margin-left: 40px;
  font-size: 17.063px;
  font-weight: 400;
  font-weight: bold;
`;

export const SubTitleContents = styled.div`
  color: #646464;
  font-size: 17.063px;
  font-weight: 400;
  margin-top: 10px; /* 위쪽 여백 추가 */
  margin-left: 50px;
  margin-bottom: 20px;
  white-space: pre-line; /* 줄 바꿈 유지 */
`;

export const SollutionTitle = styled.div`
  margin-left: 40px;
  font-size: 17.063px;
  font-weight: 400;
  font-weight: bold;
`;

export const FirstSollution = styled.div`
  margin-left: 50px;
  color: #5035a6;
  font-weight: 400;
`;

export const FirstSollutionContents = styled.div`
  font-size: 15px;
  margin-left: 50px;
  margin-bottom: 10px;
  color: #646464;
`;

export const EffectTitle = styled.div`
  margin-left: 40px;
  font-size: 17.063px;
  font-weight: 400;
  font-weight: bold;
`;

export const EffectContents = styled.div`
  font-size: 15px;
  margin-left: 50px;
  margin-bottom: 10px;
  color: #646464;
`;

export const BackImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const FirstButton = styled.button`
  margin-right: 20px;
  border: 2px solid black;
  background-color: white;
  color: black;
  font-weight: bolder;

  &:hover {
    border-color: #5035a6;
    color: blueviolet;
  }

  &:click {
    border-color: #5035a6;
    color: blueviolet;
  }
`;
