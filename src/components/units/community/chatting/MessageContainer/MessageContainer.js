import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/system';
import * as S from './MessageContainer.styles';

const MessageContainer = ({ messageList, user }) => {
  const messageContainerRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때와 messageList가 업데이트될 때 스크롤을 아래로 내립니다.
    scrollToBottom();
  }, [messageList]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  return (
    <S.BaseMessage ref={messageContainerRef}>
      {messageList.map((message, index) => {
        return (
          <Container key={message._id} className='message-container'>
            {message.user.name === 'system' ? (
              <S.SystemMessageContainer>
                <S.SystemMessage>{message.chat}</S.SystemMessage>
              </S.SystemMessageContainer>
            ) : message.user.name === user.name ? (
              <S.MyMessageContainer>
                <div>
                  <div>
                    <S.MyMessageTitle>
                      {message.user.name.split('.')[0]}
                    </S.MyMessageTitle>
                  </div>
                  <div>
                    <S.MyMessageContent>
                      <S.MyMessage>{message.chat}</S.MyMessage>
                    </S.MyMessageContent>
                  </div>
                </div>
              </S.MyMessageContainer>
            ) : (
              <S.YourMessageContainer>
                <div>
                  <S.YourMessageTitle>
                    {message.user.name.split('.')[0]}
                  </S.YourMessageTitle>
                </div>
                <div>
                  <S.YourMessageContent>
                    <S.YourMessage>{message.chat}</S.YourMessage>
                  </S.YourMessageContent>
                </div>
              </S.YourMessageContainer>
            )}
          </Container>
        );
      })}
    </S.BaseMessage>
  );
};

MessageContainer.propTypes = {
  messageList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      chat: PropTypes.string.isRequired,
    })
  ).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageContainer;
