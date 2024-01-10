import React, { ChangeEvent, useEffect, useState, FormEvent } from 'react';
import socket from './server';
import InputField from './InputField/InputField';
import * as S from './Chatting.style';
import MessageContainer from './MessageContainer/MessageContainer';
import UserNameGenerator from './UserNameGenerator';
import { useNavigate } from 'react-router-dom';

const Chatting = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [randomImage, setRandomImage] = useState('');
  const userNameServer = UserNameGenerator();
  sessionStorage.setItem('username', userNameServer);
  const userNameClient =
    sessionStorage.getItem('username')?.split('.')[0] || '';
  const navigate = useNavigate();

  const images = [
    '/cloud_happy.webp',
    '/cloud_sad.webp',
    '/cloud_soso.webp',
    '/sun_happy.webp',
    '/sun_sad.webp',
    '/sun_soso.webp',
    '/rain_happy.webp',
    '/rain_sad.webp',
    '/rain_soso.webp',
  ];

  useEffect(() => {
    alert(`당신의 이름은 '${userNameClient}'입니다!`);
    userName();
    socket.on('message', (message: any) => {
      setMessageList((prevState) => prevState.concat(message));
    });
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  const userName = () => {
    socket.emit('login', userNameServer, (res: any) => {
      console.log('Res', res);
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  const sendMessage = (event: FormEvent) => {
    event.preventDefault();
    socket.emit('sendMessage', message, (res: any) => {
      console.log(res);
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <S.Background>
        <S.Header>
          <S.HeaderContent>
            <S.ButtonLeftArrow onClick={goBack}>┏</S.ButtonLeftArrow>
            <S.ButtonRightContent>익명으로 진행돼요!</S.ButtonRightContent>
          </S.HeaderContent>
          <S.ImgRandom src={randomImage} alt='감정' />
        </S.Header>
        {user && <MessageContainer messageList={messageList} user={user} />}
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </S.Background>
    </>
  );
};

export default Chatting;
