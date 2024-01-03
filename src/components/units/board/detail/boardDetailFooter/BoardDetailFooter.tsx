import React, { useEffect, useState } from 'react';
import * as S from './BoardDetailFooter.styles';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getHearts, getMyInfo } from 'src/apis/cheolmin-api/apis';
import { useParams } from 'react-router-dom';
import { IDetailFooter } from './BoardDetailFooter.types';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import BoardDetailComment from '../comment/BoardDetailComment';

const BoardDetailFooter: React.FC<IDetailFooter> = ({
  detailedContent,
  comment,
  data,
}) => {
  const params = useParams();
  const queryClient = useQueryClient();
  const { data: profile } = useQuery('profile', getMyInfo);
  const [isHeart, setIsHeart] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const onClickToggle = () => {
    setIsActive((prev) => !prev);
  };

  const heartMutation = useMutation(getHearts, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
      setIsHeart((prev) => !prev);
    },
  });

  const onClickHeart = () => {
    heartMutation.mutate(params.id);
  };

  useEffect(() => {
    if (data?.like !== null) {
      if (data?.like?.likeExist === true) {
        setIsHeart(true);
      }
    } else {
      setIsHeart(false);
    }
  }, [params.id, detailedContent?.likeExist]);

  return (
    <div>
      <S.CategoryBoxDiv>
        <S.FooterBoxDiv>
          {detailedContent.isPublic === true && (
            <div>
              {!isActive && <S.ToggleOnImg onClick={onClickToggle} />}
              {isActive && <S.ToggleOffImg onClick={onClickToggle} />}
            </div>
          )}
          {detailedContent.isPublic === false && (
            <div>
              {isActive && <S.GrayToggleImg onClick={onClickToggle} />}
              {!isActive && <S.GrayToggleOffImg onClick={onClickToggle} />}
            </div>
          )}
          <S.CommentsBoxDiv>
            {detailedContent.isPublic === true && (
              <S.ChatBoxDiv onClick={onClickToggle}>
                <S.PurpleChatImg src='/chat_purple.png' alt='보라색말풍선' />
                <S.HeartCommentTextSpan public={detailedContent.isPublic}>
                  댓글
                </S.HeartCommentTextSpan>
                <S.HeartCommentTextSpan public={detailedContent.isPublic}>
                  {comment?.data?.length}
                </S.HeartCommentTextSpan>
              </S.ChatBoxDiv>
            )}
            {detailedContent.isPublic === false && (
              <S.ChatBoxDiv>
                <S.GrayChatImg src='/chat_gray.png' alt='회색말풍선' />
                <S.HeartCommentTextSpan public={detailedContent.isPublic}>
                  댓글
                </S.HeartCommentTextSpan>
                <S.HeartCommentTextSpan public={detailedContent.isPublic}>
                  {comment?.data?.length}
                </S.HeartCommentTextSpan>
              </S.ChatBoxDiv>
            )}
          </S.CommentsBoxDiv>
          <S.HeartBoxDiv>
            <div>
              {detailedContent.isPublic === true && (
                <S.ChatBoxDiv>
                  <S.HeartWrapperDiv onClick={onClickHeart}>
                    {isHeart && <S.CommentHeartImg />}
                    {!isHeart && <S.BlankHeartImg />}
                    <S.HeartCommentTextSpan public={detailedContent.isPublic}>
                      좋아요
                    </S.HeartCommentTextSpan>
                    <S.PurpleHeartCountSpan>
                      {detailedContent.likeCount}
                    </S.PurpleHeartCountSpan>
                  </S.HeartWrapperDiv>
                </S.ChatBoxDiv>
              )}
              {detailedContent.isPublic === false && (
                <S.HeartWrapperDiv>
                  <img src='/grayHeart.png' alt='회색하트' />
                  <S.HeartCommentTextSpan public={detailedContent.isPublic}>
                    좋아요
                  </S.HeartCommentTextSpan>
                  <S.GrayHeartCountSpan>
                    {detailedContent.likeCount}
                  </S.GrayHeartCountSpan>
                </S.HeartWrapperDiv>
              )}
            </div>
          </S.HeartBoxDiv>
        </S.FooterBoxDiv>
      </S.CategoryBoxDiv>
      <Animation3>
        {isActive && (
          <BoardDetailComment
            detailedContent={detailedContent}
            profile={profile}
            comment={comment}
          />
        )}
      </Animation3>
    </div>
  );
};

export default BoardDetailFooter;
