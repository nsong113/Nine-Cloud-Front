import React, { useState } from 'react';
import * as S from './BoardDetail.styles';
import { format, getYear } from 'date-fns';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { MdPeopleOutline } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';

const Header = () => {
  const { currentDate } = useCalendar();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isActiveModal, setIsActiveModal] = useState(false);
  const formattedMonth = format(currentMonth, 'MMMM');
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  return (
    <S.ContainerDiv>
      <S.ImgBoxDiv>
        <img src='/me.png' alt='엑박' />
      </S.ImgBoxDiv>
      <S.ContentsWrapperDiv>
        <S.ContentsHeaderDiv>
          <img src='/rabbit.png' alt='토끼' />
          <div>
            <img src='/people.png' alt='사람들' />
            <img src='/heart.png' alt='하트' />
          </div>
        </S.ContentsHeaderDiv>
        <div>
          <S.TitleTextSpan>2023년 12월 06일</S.TitleTextSpan>
          <div>
            <span>어쩌구 저쩌구</span>
          </div>
          <div>
            <span>
              지렁이도 밟으면 꿈틀한다는 것을 아시나요 ? 꿈틀 꿈틀 꿈틀
            </span>
          </div>
        </div>
      </S.ContentsWrapperDiv>
    </S.ContainerDiv>
  );
};

export default Header;
