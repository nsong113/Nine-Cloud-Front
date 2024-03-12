import styled from 'styled-components';

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.3s ease-in-out;
`;

export const Contents = styled.div`
  color: #646464;
  font-size: 17.063px;
  font-weight: 400;
  margin-top: 10px; /* 위쪽 여백 추가 */
  margin-left: 20px;
  white-space: pre-line; /* 줄 바꿈 유지 */
`;

export const ForumBtn = styled.button`
  background-color: #5035a6;
  margin-bottom: 20px;
  margin-right: 10px;
`;

export const ModalContentDiv = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
  justify-content: space-between;
`;

export const TitleAndSub = styled.div`
  width: 62%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
`;

export const TitleAndCancel = styled.span`
  color: black;
  left: 80%;
  font-weight: bolder;
  font-size: 30px;
  margin-right: 20px;
  cursor: url('https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/finger+(2).png'),
    auto;
  &:hover {
    color: purple;
  }
`;

export const ContentsTitle = styled.td`
  color: black;
`;

export const BoxButton = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 40px;
  text-align: center;
`;

export const TextStyleSpanH5 = styled.h5`
  color: #5035a6;
  width: 100%;
  text-align: center;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TextStyleSpanP = styled.p`
  width: 100%;
  color: #646464;
  text-align: center;
  font-size: 17.063px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transform: translateY(-30px);
`;

export const TextStyleSpan = styled.span`
  color: white;
`;

export const StyleButton = styled.div`
  width: 242px;
  height: 60px;
  background-color: #ece9f5;
  border-radius: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5035a6;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

export const TitleSpan = styled.span`
  color: #5035a6;
  font-size: 23px;
  font-weight: bolder;
`;

export const SubTitleSpan = styled.span`
  color: #646464;
  font-size: 17.063px;
  font-weight: bolder;
`;

export const ContentsText = styled.div`
  color: #646464;
  font-size: 17.063px;
  font-weight: bolder;
  margin-top: 10px; /* 위쪽 여백 추가 */
  white-space: pre-line; /* 줄 바꿈 유지 */
`;

export const CancelButton = styled.button`
  width: 242px;
  height: 60px;
  flex-shrink: 0;
  background-color: #ece9f5;
  color: #5035a6;
  border-radius: 22px 0 22px 0;
  border: 0px;
  margin-left: 10px;
  cursor: pointer;
`;

export const OkButton = styled.button`
  width: 146px;
  height: 60px;
  flex-shrink: 0;
  color: #5035a6;
  border-radius: 0 20px 0 20px;
  border: 0px;
  cursor: pointer;
`;
