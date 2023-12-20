import React, { useEffect, useState } from 'react';
import * as S from './BoardDetail.styles';
import { format, getYear, parseISO } from 'date-fns';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import * as DOMPurify from 'dompurify';

import {
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

const BoardDetail = () => {
  const queryClient = useQueryClient();

  const { currentDate, currentMonth } = useCalendar();
  const [isEdit, setIsEdit] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isHeart, setIsHeart] = useState(false);
  const onClickPencilImg = () => {
    setIsActiveModal((prev) => !prev);
  };

  const { data, isLoading } = useQuery(['post'], () =>
    getOnePostInfo(params.id)
  );

  const heartMutation = useMutation(getHearts, {
    onSuccess: () => {
      queryClient.invalidateQueries('heart');
    },
  });

  const heartCount = heartMutation?.data;

  const { data: comment } = useQuery('comment', () => getComments(params.id));
  const { data: profile } = useQuery('profile', getMyInfo);
  const [isPublic, setIsPublic] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const profileInfo = profile?.data;

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
    ? new Date(detailedContent.createdAt)
    : null;

  if (createdAtDate) {
    createdAtDate.setHours(createdAtDate.getHours() - 9);
  }

  const formattedDate = createdAtDate
    ? createdAtDate.toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  // console.log('formattedDate', formattedDate);
  console.log('createdAtDate', createdAtDate);
  console.log('현재시간', detailedContent?.createdAt);

  const onClickPencil = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickPublic = () => {
    setIsPublic((prev) => !prev);
  };

  const id = params.id;

  const onClickHeart = () => {
    setIsHeart(true);
    heartMutation.mutate(id);
  };

  const onClickHeartCancel = () => {
    setIsHeart(false);
    heartMutation.mutate(id);
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
          setIsEdit={setIsEdit}
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
                  {detailedContent?.isPublic === true && <S.PeopleImg />}
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
                  <S.ContentSpan
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        String(detailedContent?.content)
                      ),
                    }}
                  ></S.ContentSpan>
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
                    {/* {detailedContent.isPublic !== true && (
                    
                    )}

                  {detailedContent.isPublic === false && (
                    
                    )} */}
                    <S.CommentImg />
                    <S.HeartCommentTextSpan>
                      댓글 {comment?.data?.length}
                    </S.HeartCommentTextSpan>
                  </S.CommentsBoxDiv>
                  <S.HeartBoxDiv>
                    <div>
                      {isHeart && <S.CommentHeartImg onClick={onClickHeartCancel} />}
                      {!isHeart && <S.BlankHeartImg onClick={onClickHeart} />}
                      <S.HeartCommentTextSpan>좋아요</S.HeartCommentTextSpan>
                      <span>{heartCount?.data}</span>
                    </div>
                  </S.HeartBoxDiv>
                </S.FooterBoxDiv>
              </S.CategoryBoxDiv>
              {/* comment 영역 => BoardDetailComment (따로 분리시킴) */}
              {detailedContent.isPublic === true && (
                <Animation3>
                  {isActive && (
                    <BoardDetailComment profile={profile} comment={comment} />
                  )}
                </Animation3>
              )}
              {!isActive && (
                <div>
                  {detailedContent.isPublic === false && (
                    <div>
                      <S.CommentsWrapperDiv>
                        <S.CommentBox>
                          <S.CommentHeaderDiv>
                            {comment?.data?.map((el: any) => (
                              <S.CommentWrapperDiv key={el.commentId}>
                                <S.CommentBoxDiv>
                                  <S.DeepCircleImg
                                    src='/deepCircle.png'
                                    alt='타원'
                                  />
                                  <S.CommentWriterBoxDiv>
                                    <S.CommentWriterSpan>
                                      {profileInfo?.username}
                                    </S.CommentWriterSpan>
                                    <S.CommentContent>
                                      {el.content}
                                    </S.CommentContent>
                                  </S.CommentWriterBoxDiv>
                                </S.CommentBoxDiv>
                              </S.CommentWrapperDiv>
                            ))}
                          </S.CommentHeaderDiv>
                          <S.CommentFooterWrapDiv>
                            <S.InputBoxDiv
                              placeholder='공개로 바꾸면 친구들이 댓글을 달 수 있습니다.'
                              disabled
                            />
                          </S.CommentFooterWrapDiv>
                        </S.CommentBox>
                      </S.CommentsWrapperDiv>
                    </div>
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
