import React from 'react';
import PropTypes from 'prop-types';
import * as S from './InputField.styles';

const InputField = ({ message, setMessage, sendMessage }) => {
  const handleSendMessage = (event) => {
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
          onChange={(event) => setMessage(event.target.value)}
          rows={1}
        />
        <S.SendButton disabled={message.trim().length === 0} type='submit'>
          전송
        </S.SendButton>
      </S.InputContainer>
    </S.InputArea>
  );
};

InputField.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default InputField;
