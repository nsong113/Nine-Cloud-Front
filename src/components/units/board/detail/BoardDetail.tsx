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
          <S.CloudImg src='/cloud.png' alt='구름' />
          <div>
            <img src='/eye.png' alt='사람들' />
            <span>3</span>
          </div>
        </S.ContentsHeaderDiv>
        <div>
          <S.ContentBoxHeaderDiv>
            <S.TitleTextSpan>2023. 12. 06</S.TitleTextSpan>
            <S.WriterImageDiv>
              <S.WriterSpan>주철민</S.WriterSpan>
              <img src='/avatar.png' alt='돼지' />
            </S.WriterImageDiv>
          </S.ContentBoxHeaderDiv>
          <S.ContentsBoxDiv>
            <span>어쩌구 저쩌구</span>
          </S.ContentsBoxDiv>
          <S.ContentsFooterDiv>
            <img src='/circle.png' alt='circle' />
            <S.ContentsSpan>
              지렁이도 밟으면 꿈틀한다는 것을 아시나요 ? 꿈틀 꿈틀 꿈틀
            </S.ContentsSpan>
          </S.ContentsFooterDiv>
        </div>
        <div>
          <S.CategoryBoxDiv>
            <div>
              <img src='/heart2.png' alt='하트2' />
              <S.HeartCommentTextSpan>좋아요 3</S.HeartCommentTextSpan>
            </div>
            <div>
              <img src='/chat.png' alt='채팅' />
              <S.HeartCommentTextSpan>댓글 2</S.HeartCommentTextSpan>
            </div>
          </S.CategoryBoxDiv>
          <S.CommentsWrapperDiv>
            <S.CommentBox>
              <S.CommentHeaderDiv>
                <S.DeepCircleImg src='/deepCircle.png' alt='타원' />
                <S.CommentBoxDiv>
                  <S.CommentWriterSpan>한덕용</S.CommentWriterSpan>
                  <S.CommentContent>
                    평소에 그림을 자주 그리시나요 ?
                  </S.CommentContent>
                </S.CommentBoxDiv>
              </S.CommentHeaderDiv>
              <S.CommentFooterWrapDiv>
                <S.InputBoxDiv />
                <S.SubmitButton>등록</S.SubmitButton>
              </S.CommentFooterWrapDiv>
            </S.CommentBox>
          </S.CommentsWrapperDiv>
        </div>
      </S.ContentsWrapperDiv>
    </S.ContainerDiv>
  );
};

export default Header;
