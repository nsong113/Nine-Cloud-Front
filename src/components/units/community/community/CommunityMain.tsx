import React from 'react';
import * as S from './CommunityMain.style';
import { RiMessage3Fill } from 'react-icons/ri';

const CommunityMain = () => {
  return (
    <S.MainContainer>
      <S.MainHeader>
        <div className='MainFlexBox'>
          <img alt='logo' />
          <div className='MainProfileFlexDiv'>
            <div className='MainStatus'></div>
            <img alt='profile' />
          </div>
        </div>
      </S.MainHeader>
      <S.MainSectionContainer>
        <S.MainSectionHeaderWrapper>
          <S.MainFlexBox style={iconStyle}>
            <RiMessage3Fill />
            <S.MainProfileDiv>
              <S.MainHeaderContent>
                오늘의 채팅방을 <br />
                방문해보세요
              </S.MainHeaderContent>
              <S.MainHeaderOn></S.MainHeaderOn>
            </S.MainProfileDiv>
          </S.MainFlexBox>
        </S.MainSectionHeaderWrapper>
        <S.MainSlideBox>
          <div className='MainSlideFlex'>
            <div className='MainEachSlideBox'>
              <p>전체</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정1</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정2</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정3</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정4</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정5</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정6</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정7</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정8</p>
            </div>
            <div className='MainEachSlideBox'>
              <div className='MainEachSlideEmojiBox'></div>
              <p>감정9</p>
            </div>
          </div>
          <div>{/* map */}</div>
        </S.MainSlideBox>
      </S.MainSectionContainer>
    </S.MainContainer>
  );
};

export default CommunityMain;

const iconStyle = {
  fontSize: '30px',
};
