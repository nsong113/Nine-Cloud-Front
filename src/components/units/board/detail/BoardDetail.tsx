import React, { useState } from 'react';
import * as S from './BoardDetail.styles';
import { format, getYear, parseISO } from 'date-fns';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { useNavigate, useParams } from 'react-router-dom';
import { dayList } from '../../main/test';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  deletePost,
  getComments,
  getHearts,
  getMyInfo,
  getOnePostInfo,
} from 'src/apis/cheolmin-api/apis';
import BoardDetailComment from './comment/BoardDetailComment';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import Loading from 'src/components/commons/utills/loading/Loading';
import { CommentData } from './comment/test';
import EditPostOverlay from 'src/components/commons/modals/editPost/EditPostOverlay';
import DeleteOverlay from 'src/components/commons/modals/modalSetting/overlay/deleteOverlay/DeleteOverlay';
import DeleteModal from 'src/components/commons/modals/delete/DeleteModal';

const BoardDetail = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery('post', () => getOnePostInfo(params.id));

  console.log('data', data);
  const { currentDate, currentMonth } = useCalendar();
  const [isEdit, setIsEdit] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const formattedMonth = format(currentMonth, 'MMMM');
  const newDate = new Date(currentDate);
  const [isHeart, setIsHeart] = useState(false);
  const onClickPencilImg = () => {
    setIsActiveModal((prev) => !prev);
  };

  const heartMutation = useMutation(getHearts, {
    onSuccess: () => {
      queryClient.invalidateQueries('heart');
    },
  });

  const heartCount = heartMutation?.data;
  console.log('heartCount', heartCount);
  console.log('heartMutation', heartMutation);

  const { data: comment } = useQuery('comment', () => getComments(params.id));
  const { data: profile } = useQuery('profile', getMyInfo);
  const [isPublic, setIsPublic] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const detailedContent = data?.data;

  const params = useParams();
  if (isLoading) {
    return <Loading />;
  }

  const onClickMoveToMain = () => {
    navigate('/main');
  };
  const date = new Date(currentDate);

  const onClickToggle = () => {
    setIsActive((prev) => !prev);
  };

  const commentList = CommentData.filter(
    (comment) => comment.DiaryId === Number(params.id)
  );

  const createdAtDate = detailedContent?.createdAt
    ? parseISO(detailedContent.createdAt)
    : null;
  const formattedDate = createdAtDate
    ? format(createdAtDate, 'yyyy년 MM월 dd일')
    : null;

  const onClickPencil = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickPublic = () => {
    setIsPublic((prev) => !prev);
  };

  const onClickHeart = () => {
    heartMutation.mutate(params.id);
    setIsHeart((prev) => !prev);
  };

  const weatherImages: { [key: string]: string | undefined } = {
    1: '/sunny.png',
    2: '/rain.png',
    3: '/cloudy.png',
  };

  const getImage = () => {
    return weatherImages[detailedContent?.weather];
  };
  // const formattedData = format(detailedContent?.createdAt, 'yyyy년 mm월 dd일');

  return (
    <S.ContainerDiv>
      {isActiveModal && (
        <EditPostOverlay
          content={detailedContent?.content}
          onClose={onClickPencilImg}
          detailedContent={detailedContent}
        />
      )}

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
                  {detailedContent?.isPublic === true && (
                    <div>
                      {!isEdit && (
                        <S.PeopleImg src={'/people.png'} alt='사람들' />
                      )}
                      {isEdit && (
                        <div>
                          <label htmlFor='inputField'>공개</label>
                          <input onClick={onClickPublic} type='checkbox' />
                        </div>
                      )}
                    </div>
                  )}
                  {detailedContent?.isPublic === false && <S.PersonImg />}
                </S.heartBoxDiv>
              </S.ConentsHeaderRightDiv>
            </S.ContentsHeaderDiv>
            <div>
              <S.ContentBoxHeaderDiv>
                <S.TitleTextSpan>{formattedDate}</S.TitleTextSpan>
                <S.WeatherImage src={getImage()} alt='이미지' />
                <div>
                  <S.PencilImg onClick={onClickPencilImg} />
                </div>
              </S.ContentBoxHeaderDiv>
              <S.ContentsBoxDiv>
                <S.ContentBoxDiv>
                  {!isEdit && (
                    <S.ContentSpan>{detailedContent?.content}</S.ContentSpan>
                  )}
                  {isEdit && (
                    <textarea defaultValue={detailedContent?.content} />
                  )}
                </S.ContentBoxDiv>
              </S.ContentsBoxDiv>
              <S.ContentsFooterDiv>
                <S.SentenceSpan>{detailedContent?.sentence}</S.SentenceSpan>
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
                      댓글 {comment?.length}
                    </S.HeartCommentTextSpan>
                  </S.CommentsBoxDiv>
                  <S.HeartBoxDiv>
                    {!isHeart && (
                      <div>
                        <S.CommentHeartImg onClick={onClickHeart} />
                        <S.HeartCommentTextSpan>좋아요</S.HeartCommentTextSpan>
                        {/* <span>{heartMutation.data}</span> */}
                      </div>
                    )}
                    {isHeart && (
                      <div>
                        <S.BlankHeartImg onClick={onClickHeart} />
                        <S.HeartCommentTextSpan>좋아요</S.HeartCommentTextSpan>
                        <span>{heartMutation.data}</span>
                      </div>
                    )}
                  </S.HeartBoxDiv>
                </S.FooterBoxDiv>
              </S.CategoryBoxDiv>
              {/* comment 영역 => BoardDetailComment (따로 분리시킴) */}
              {commentList?.length >= 1 && (
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
    </S.ContainerDiv>
  );
};

export default BoardDetail;
