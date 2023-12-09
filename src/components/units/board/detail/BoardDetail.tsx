import React, { useState } from 'react';
import * as S from './BoardDetail.styles';
import { format, getYear } from 'date-fns';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { MdPeopleOutline } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { dayList } from '../../main/test';
import { useQuery } from 'react-query';
import { getOnePostInfo } from 'src/apis/cheolmin-api/apis';

const BoardDetail = () => {
  const { data } = useQuery('post', () => getOnePostInfo(params.id));
  const { currentDate } = useCalendar();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isActiveModal, setIsActiveModal] = useState(false);
  const formattedMonth = format(currentMonth, 'MMMM');
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const params = useParams();

  const destructuringArray: ({
    image?: string;
    writer?: string;
    date?: string;
    content?: string;
    sentence?: string;
    id?: number;
  } | null)[] = dayList.filter((data) => data?.id == params.id);

  return (
    <S.ContainerDiv>
      {destructuringArray.map((data) => (
        <div key={data?.id}>
          <S.ImgBoxDiv>
            <S.MainImg src={data?.image} alt='엑박' />
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
                <S.TitleTextSpan>{data?.date}</S.TitleTextSpan>
                <S.WriterImageDiv>
                  <S.WriterSpan>{data?.writer}</S.WriterSpan>
                  <img src='/avatar.png' alt='돼지' />
                </S.WriterImageDiv>
              </S.ContentBoxHeaderDiv>
              <S.ContentsBoxDiv>
                <span>{data?.content}</span>
              </S.ContentsBoxDiv>
              <S.ContentsFooterDiv>
                <img src='/circle.png' alt='circle' />
                <S.ContentsSpan>{data?.sentence}</S.ContentsSpan>
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
        </div>
      ))}
    </S.ContainerDiv>
  );
};

export default BoardDetail;
