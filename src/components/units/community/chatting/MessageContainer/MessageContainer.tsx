import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/system';
import * as S from './MessageContainer.styles';
import { MessageContainerProps } from '../Chatting.types';

const MessageContainer: React.FC<MessageContainerProps> = ({
  messageList,
  user,
}) => {
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = (): void => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    };
    scrollToBottom();
  }, [messageList]);

  return (
    <S.BaseMessage ref={messageContainerRef}>
      {messageList.map((message) => {
        return (
          <Container key={message._id}>
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

export default MessageContainer;
