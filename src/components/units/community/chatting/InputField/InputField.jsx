import React from 'react';
import PropTypes from 'prop-types';
import * as S from './InputField.styles';

const InputField = ({ message, setMessage, sendMessage }) => {
  const handleSendMessage = (event) => {
    sendMessage(event);
    setMessage(''); // 메시지 전송 후에 인풋 필드 초기화
  };

  return (
    <S.InputArea>
      <S.InputContainer onSubmit={handleSendMessage}>
        <S.Input
          placeholder='Type in here…'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={1}
        />

        <S.SendButton disabled={message === ''} type='submit'>
          전송
        </S.SendButton>
      </S.InputContainer>
    </S.InputArea>
  );
};

// 추가: PropTypes 정의
InputField.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default InputField;
