import React, { ChangeEvent, useEffect, useState } from 'react';
import socket from './server';
import { useQuery } from 'react-query';
import { getMyInfo } from 'src/apis/cheolmin-api/apis';
import InputField from './InputField/InputField';
import { Background } from './Chatting.style';
import MessageContainer from './MessageContainer/MessageContainer';

const Chatting = () => {
  const { data } = useQuery('myInfo', getMyInfo);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    socket.on('message', (message) => {
      setMessageList((prevState) => prevState.concat(message));
    });
  });

  const userName = () => {
    socket.emit('login', data?.data.username, (res) => {
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
    <Background>
      <MessageContainer messageList={messageList} user={user} />
      <InputField
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </Background>
  );
};

export default Chatting;
