import React, { ChangeEvent, useEffect, useState } from 'react';
import socket from './server';
import InputField from './InputField/InputField';
import * as S from './Chatting.style';
import MessageContainer from './MessageContainer/MessageContainer';
import UserNameGenerator from './UserNameGenerator';

const Chatting = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  // const [rooms, setRooms] = useState([]);

  useEffect(() => {
    userName();
    // socket.on('rooms', (res) => {
    //   setRooms(res);
    // });
    socket.on('message', (message) => {
      setMessageList((prevState) => prevState.concat(message));
    });
  }, []);

  const userName = () => {
    socket.emit('login', UserNameGenerator(), (res) => {
      console.log('Res', res);
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('sendMessage', message, (res) => {
      console.log(res);
    });
  };

  return (
    <S.Background>
      <S.Header>
        <S.LogoBoxDiv>
          <S.LogoImg src='/logo.png' alt='로고' />
          <S.BrandTextBoxDiv>
            <span>NINE</span>
            <span>CLOUD</span>
          </S.BrandTextBoxDiv>
        </S.LogoBoxDiv>
        <div style={{ display: 'flex' }}>
          <S.DivDiv>
            <S.ChatTitle>Chatting</S.ChatTitle>
          </S.DivDiv>
          <div></div>
        </div>
      </S.Header>
      <MessageContainer messageList={messageList} user={user} />
      <InputField
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </S.Background>
  );
};

export default Chatting;
