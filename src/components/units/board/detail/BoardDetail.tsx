import React, { useState } from 'react';
import * as S from './BoardDetail.styles';
import { format, getYear } from 'date-fns';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { useNavigate, useParams } from 'react-router-dom';
import { dayList } from '../../main/test';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  deletePost,
  getComments,
  getMyInfo,
  getOnePostInfo,
} from 'src/apis/cheolmin-api/apis';
import BoardDetailComment from './comment/BoardDetailComment';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import Loading from 'src/components/commons/utills/loading/Loading';
import { CommentData } from './comment/test';

const BoardDetail = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery('post', () => getOnePostInfo(params.id));
  const { currentDate, currentMonth } = useCalendar();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const formattedMonth = format(currentMonth, 'MMMM');
  const newDate = new Date(currentDate);
  const year = getYear(newDate);
  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const { data: comment } = useQuery('comment', () => getComments(params.id));
  const { data: profile } = useQuery('profile', getMyInfo);

  console.log('상세페이지', data?.data);

  const detailedContent = data?.data;

  const params = useParams();
  if (isLoading) {
    return <Loading />;
  }

  const onClickMoveToMain = () => {
    navigate('/main');
  };
  const date = new Date(currentDate);
  console.log('date', date);

  const onClickToggle = () => {
    setIsActive((prev) => !prev);
  };

  const commentList = CommentData.filter(
    (comment) => comment.DiaryId === Number(params.id)
  );

  const onClickDeleteBtn = () => {
    deleteMutation.mutate(params.id);
    alert('글이 정상적으로 삭제 됐습니다');
    navigate('/main');
  };

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
          <Animation3>
            <S.ImgBoxDiv>
              <S.BackImg onClick={onClickMoveToMain} />
              <S.MainImg src={detailedContent?.image} alt='엑박' />
            </S.ImgBoxDiv>
          </Animation3>
          <Animation2>
            <S.ContentsWrapperDiv>
              <S.ContentsHeaderDiv>
                <S.CloudImg src='/cloud.png' alt='구름' />
                <S.ConentsHeaderRightDiv>
                  <S.heartBoxDiv>
                    <S.PeopleImg src={'/people.png'} alt='사람들' />
                  </S.heartBoxDiv>
                </S.ConentsHeaderRightDiv>
              </S.ContentsHeaderDiv>
              <div>
                <S.ContentBoxHeaderDiv>
                  <S.TitleTextSpan>
                    {format(new Date(currentDate), 'yyyy년 MM월 dd일')}
                  </S.TitleTextSpan>
                </S.ContentBoxHeaderDiv>
                <S.ContentsBoxDiv>
                  <S.PencilBoxDiv>
                    <S.PencilImg />
                  </S.PencilBoxDiv>
                  <S.ContentBoxDiv>
                    <S.ContentSpan>{detailedContent?.content}</S.ContentSpan>
                  </S.ContentBoxDiv>
                </S.ContentsBoxDiv>
                <S.ContentsFooterDiv>
                  <img src='/circle.png' alt='circle' />
                  <S.ContentsSpan>{data?.sentence}</S.ContentsSpan>
                </S.ContentsFooterDiv>
              </div>
              <div>
                <S.CategoryBoxDiv>
                  <S.FooterBoxDiv>
                    {!isActive && <S.ToggleOnImg onClick={onClickToggle} />}
                    {isActive && <S.ToggleOffImg onClick={onClickToggle} />}
                    <S.CommentsBoxDiv onClick={onClickToggle}>
                      <S.CommentImg />
                      <S.HeartCommentTextSpan>
                        댓글 {comment.length}
                      </S.HeartCommentTextSpan>
                    </S.CommentsBoxDiv>
                    <S.HeartBoxDiv>
                      <S.CommentHeartImg />
                      <S.HeartCommentTextSpan>좋아요</S.HeartCommentTextSpan>
                    </S.HeartBoxDiv>
                  </S.FooterBoxDiv>
                  <S.DeletePostSpan onClick={onClickDeleteBtn}>
                    일기 삭제하기
                  </S.DeletePostSpan>
                </S.CategoryBoxDiv>
                {/* comment 영역 => BoardDetailComment (따로 분리시킴) */}
                {commentList.length >= 1 && (
                  <Animation3>
                    {isActive && (
                      <BoardDetailComment comment={comment} profile={profile} />
                    )}
                  </Animation3>
                )}
                {commentList.length === 0 && (
                  <div>
                    {isActive && (
                      <S.BlankCommentBoxDiv>
                        <S.BlankCommentSpan>
                          아직 댓글이 없습니다.
                        </S.BlankCommentSpan>
                        <S.BlankCommentSpan>
                          전체공개로 전환해 사람들과 일기를 공유해보세요!
                        </S.BlankCommentSpan>
                      </S.BlankCommentBoxDiv>
                    )}
                  </div>
                )}
              </div>
            </S.ContentsWrapperDiv>
          </Animation2>
        </div>
      ))}
    </S.ContainerDiv>
  );
};

export default BoardDetail;
