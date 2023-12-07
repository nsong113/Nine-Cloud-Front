import React, { useState } from 'react';
import * as S from './Main.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { Toggle } from 'src/components/commons/utills/Toggle';
import { addMonths, format, getYear, setMonth, subMonths } from 'date-fns';

const ViewAll = () => {
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();

  const newDate = new Date(currentDate);
  const year = getYear(newDate);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const formattedMonth = format(currentMonth, 'MMMM');

  const handlePrevMonth = () => {
    const newDate = subMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    // setMonth((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    const newDate = addMonths(currentMonth, 1);
    setCurrentDate(newDate);
    setCurrentMonth(newDate);
    // setMonth((prev) => prev + 1);
  };
  return (
    <>
      <div>
        <S.CalendarContainerDiv>
          <S.CalenderHeaderDiv>
            <S.DateBoxDiv>
              <S.YearTextSpan>{year}</S.YearTextSpan>
              <S.MonthTextSpan>{formattedMonth}</S.MonthTextSpan>
            </S.DateBoxDiv>
            <S.RightProfile>
              <div>{Toggle()}</div>
              <div style={{ display: 'flex' }}>
                <S.AvatarSizeImg src='/avatar.png' alt='기본' />
              </div>
            </S.RightProfile>
          </S.CalenderHeaderDiv>
          <S.ViewAllWrapperDiv>
            <S.ViewAllEachBoxDiv>
              {/* 이거를 Null이 아닌 것을 최신순으로 돌려줘야함 */}
              <S.ViewAllEachFlex>
                <S.ViewAllIMGbox>
                  <img src='/expic.png' alt='expic'></img>
                </S.ViewAllIMGbox>
                <S.ViewAllRightContentDiv>
                  <S.ViewAllRightFlexDiv>
                    <S.ViewAllDateDiv>2023. 12. 01</S.ViewAllDateDiv>
                    <S.ViewAllPublicIMGDiv>
                      <img src='/happy.png' alt='happy' style={imgstyle}></img>
                    </S.ViewAllPublicIMGDiv>
                  </S.ViewAllRightFlexDiv>
                  <S.ViewAllEmojiIMGDiv>
                    <img src='/happy.png' alt='happy' style={imgstyle}></img>
                  </S.ViewAllEmojiIMGDiv>
                  <S.ViewAllContentP>
                    오늘은 12월의 첫 날을 기념해서 초상화를 그려봤는데 나 설마
                    피카소의 환생인걸블라블라블라블라까나오늘은 12월의 첫 날을
                    기념해서 초상화를 그려봤는데 나 설마 피카소의 오늘은 12월의
                    첫 날을 기념해서 초상화를 그려봤는데 나 설마 피카소의 ..
                    ....
                  </S.ViewAllContentP>
                </S.ViewAllRightContentDiv>
              </S.ViewAllEachFlex>
            </S.ViewAllEachBoxDiv>
          </S.ViewAllWrapperDiv>
        </S.CalendarContainerDiv>
      </div>
    </>
  );
};

export default ViewAll;

const imgstyle = {
  width: '30px',
  height: '30px,',
};
