import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MessageContainer.css';
import { Container } from '@mui/system';
import * as S from './MessageContainer.styles';

const MessageContainer = ({ messageList, user }) => {
  return (
    <div>
      {messageList.map((message, index) => {
        return (
          <Container key={message._id} className='message-container'>
            {message.user.name === 'system' ? (
              <div className='system-message-container'>
                <p className='system-message'>{message.chat}</p>
              </div>
            ) : message.user.name === user.name ? (
              <div className='my-message-container'>
                <div className='my-message'>{message.chat}</div>
              </div>
            ) : (
              <div className='your-message-container'>
                <img
                  src='/profile.jpeg'
                  alt='Profile'
                  className='profile-image'
                  style={
                    (index === 0
                      ? { visibility: 'visible' }
                      : messageList[index - 1].user.name === user.name) ||
                    messageList[index - 1].user.name === 'system'
                      ? { visibility: 'visible' }
                      : { visibility: 'hidden' }
                  }
                />
                <S.YourMessage>{message.chat}</S.YourMessage>
              </div>
            )}
          </Container>
        );
      })}
    </div>
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
