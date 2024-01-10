import React, { ChangeEvent, FormEvent } from 'react';
import * as S from './InputField.styles';
import { InputFieldProps } from '../Chatting.types';

const InputField: React.FC<InputFieldProps> = ({ message, setMessage, sendMessage }) => {
  const handleSendMessage = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (message.trim().length > 0) {
      sendMessage(event);
      setMessage('');
    }
  };

  return (
    <S.InputArea>
      <S.InputContainer onSubmit={handleSendMessage}>
        <S.Input
          placeholder='채팅을 입력하세요'
          value={message}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
        />
        <S.SendButton disabled={message.trim().length === 0} type='submit'>
          전송
        </S.SendButton>
      </S.InputContainer>
    </S.InputArea>
  );
};

export default InputField;
