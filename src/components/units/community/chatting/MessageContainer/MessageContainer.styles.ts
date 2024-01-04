import styled from 'styled-components';

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
  background-color: #f7e600;
  border-radius: 8px;
  padding: 8px;
  max-width: 200px;
  font-size: 12px;
`;

export const YourMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const YourMessage = styled.div`
  background-color: rgba(57, 29, 147, 0.3);
  border-radius: 8px;
  padding: 8px;
  max-width: 200px;
  font-size: 12px;
`;

export const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100px;
  margin-right: 10px;
`;

export const YourMessageTitle = styled.div`
  color: RGB(100, 100, 100);
  font-size: 13px;
`;

export const YourMessageContent = styled.div`
  display: flex;
`;
