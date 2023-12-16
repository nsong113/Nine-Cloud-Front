import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './chatting.styles';

const Chatting = () => {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    console.log('초기 렌더링');
  }, [count]);

  useEffect(() => {
    console.log('글자가 바뀌었습니다');
  }, [comment]);

  const onChangeComment = (event: ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.value;
  };
  return (
    <S.ContainerDiv>
      <S.HeaderContainerDiv>
        <S.HeaderWrapperDiv>
          <S.MoveToPrevImg />
          <img src='/pinkcircle.png' alt='원' />
          <S.RommNameSpan>분노감정의 방</S.RommNameSpan>
        </S.HeaderWrapperDiv>
        <S.HeaderRightDiv>
          <S.PeopleImg src='/person.png' alt='사람들' />
          <span>참여자</span>
        </S.HeaderRightDiv>
      </S.HeaderContainerDiv>
      <S.ContentsBodyWrapperDiv>
        <S.WriterWrapperDiv>
          <S.CircleImg src='/deepcircle.png' alt='원' />
          <S.WriterBoxDiv>
            <span>김토끼</span>
            <div>sd</div>
          </S.WriterBoxDiv>
        </S.WriterWrapperDiv>
      </S.ContentsBodyWrapperDiv>
      <S.FooterDiv>
        <S.InputBoxDiv>
          <S.CommentInput
            onChange={onChangeComment}
            placeholder='채팅을 입력하세요'
          />
          <S.SubmitButton>등록</S.SubmitButton>
        </S.InputBoxDiv>
      </S.FooterDiv>
    </S.ContainerDiv>
  );
};

export default Chatting;
