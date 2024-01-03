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
  const userNameServer = UserNameGenerator();
  sessionStorage.setItem('username', userNameServer);
  const userNameClient = sessionStorage.getItem('username').split('.')[0];

  useEffect(() => {
    alert(`당신의 이름은 '${userNameClient}'입니다!`);
    userName();
    socket.on('message', (message) => {
      setMessageList((prevState) => prevState.concat(message));
    });
  }, []);

  const userName = () => {
    socket.emit('login', userNameServer, (res) => {
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
