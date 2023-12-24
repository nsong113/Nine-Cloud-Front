// import React, { ChangeEvent, useEffect, useState } from 'react';
// import socket from './server';
// import InputField from './InputField/InputField';
// import * as S from './Chatting.style';
// import MessageContainer from './MessageContainer/MessageContainer';
// import UserNameGenerator from './UserNameGenerator';

// const Chatting = () => {
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState('');
//   const [messageList, setMessageList] = useState([]);
//   // const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     userName();
//     // socket.on('rooms', (res) => {
//     //   setRooms(res);
//     // });
//     socket.on('message', (message) => {
//       setMessageList((prevState) => prevState.concat(message));
//     });
//   }, []);

//   const userName = () => {
//     socket.emit('login', UserNameGenerator(), (res) => {
//       console.log('Res', res);
//       if (res?.ok) {
//         setUser(res.data);
//       }
//     });
//   };

//   const sendMessage = (event) => {
//     event.preventDefault();
//     socket.emit('sendMessage', message, (res) => {
//       console.log(res);
//     });
//   };

//   return (
//     <S.Background>
//       <S.Header>
//         <S.LogoBoxDiv>
//           <S.LogoImg src='/logo.png' alt='로고' />
//           <S.BrandTextBoxDiv>
//             <span>NINE</span>
//             <span>CLOUD</span>
//           </S.BrandTextBoxDiv>
//         </S.LogoBoxDiv>
//         <div style={{ display: 'flex' }}>
//           <S.DivDiv>
//             <S.ChatTitle>Chatting</S.ChatTitle>
//           </S.DivDiv>
//           <div></div>
//         </div>
//       </S.Header>
//       <MessageContainer messageList={messageList} user={user} />
//       <InputField
//         message={message}
//         setMessage={setMessage}
//         sendMessage={sendMessage}
//       />
//     </S.Background>
//   );
// };

// export default Chatting;

// 오류가 생길까봐 전체 css와 js, ts 혼용되어 있습니다.
// 채팅 성공하자마자 바로 모두 타입스크립트 형태로 변경할 예정입니다.
// 혹시 제가 부재중일 때 채팅을 테스트해보고 싶으시다면
// /community/chatting 폴더 안 9개의 모든 파일을 주석 해제 하시면 됩니다.
// 서버 엔드포인트가 변한다면 server.js 안의 const socket = 이 부분 변경하시면 됩니다. 이 부분도 마찬가지로 오류 생길까봐 env도 못썼습미다...
// 항상 두분께서 도와주시고 부족한 제게 맞춰주셔서 너무너무 감사합니다.
// 메리 크리스마스

// ......................★
// .....................★★
// ...................★★★★
// ..................★★★★★
// ................★★★★★★★
// ..............★★★★★★★★★
// .............★★★★★★★★★★
// ...........★★★★★★★★★★★★
// .........★★★★★★★★★★★★★★
// .......★★★★★★★★★★★★★★★★
// ....★★★★★★★★★★★★★★★★★★★
// ....................■■■■
// ..........★˚ 。Merry Christmas☆
