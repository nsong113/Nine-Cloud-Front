import styled from 'styled-components';

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 960px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentDiv = styled.div`
  width: 414.683px;
  height: 250px;
  border-radius: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const BoxButton = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 10px;
`;

export const StyleButton = styled.button`
  margin-left: 20px;
`;

export const TitleSpan = styled.span`
  color: #5035a6;

  font-family: Spoqa Han Sans Neo;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 15px;
`;

export const SubTitleSpan = styled.span`
  color: #646464;

  font-family: Spoqa Han Sans Neo;
  font-size: 17.063px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
`;

export const OkButton = styled.button`
  width: 146px;
  height: 60px;
  flex-shrink: 0;
  color: #5035a6;
  border-radius: 0 20px 0 20px;
  border: 0px;
`;
