import styled from 'styled-components';

export const BaseMessage = styled.div`
  overflow-y: auto;
  height: calc(80vh - 20px);
  max-height: calc(80vh - 20px);
  background-color: #fcfcff;
  border-top-left-radius: 35px;
  border-bottom-right-radius: 35px;
  box-shadow: inset 0 0 30px #ebe9f6;
`;

export const SystemMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SystemMessage = styled.p`
  background-color: #55667758;
  border-radius: 100px;
  text-align: center;
  color: white;
  padding: 2px 15px;
  font-size: 14px;
`;

export const MyMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

export const MyMessage = styled.div`
  background-color: rgba(57, 29, 147, 0.7);
  border-radius: 8px;
  padding: 12px;
  max-width: 200px;
  font-size: 18px;
  color: white;
`;

export const MyMessageContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const YourMessageContainer = styled.div``;

export const YourMessage = styled.div`
  background-color: rgba(57, 29, 147, 0.3);
  border-radius: 8px;
  padding: 12px;
  max-width: 200px;
  font-size: 15px;
  color: white;
`;

export const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100px;
  margin-right: 10px;
`;

export const MyMessageTitle = styled.div`
  text-align: end;
  color: #929292;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 3px;
`;

export const YourMessageTitle = styled.div`
  color: #929292;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 3px;
`;

export const YourMessageContent = styled.div`
  display: flex;
`;
