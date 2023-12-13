import React, { ChangeEvent, useState } from 'react';
import * as S from './BoardDetailComment.styles';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  addComment,
  deleteComment,
  getComments,
  getMyInfo,
} from 'src/apis/cheolmin-api/apis';
import { useParams } from 'react-router-dom';
import { CommentData } from './test';
import { IComment } from './BoardDetailComment.types';

const BoardDetailComment : React.FC<IComment> = ({profile,comment}) => {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const params = useParams();

  console.log('params', params.id);

  const diaryId = params.id;


  const comments = comment?.data;
  console.log('data', comment);
  const commentMutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comment');
    },
  });

  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comment');
    },
  });

  const onClickSubmitBtn = () => {
    commentMutation.mutate({ content, diaryId });
  };

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const commentList = CommentData.filter(
    (comment) => comment.DiaryId === Number(params.id)
  );

  const onClickDeleteBtn = (commentId: any) => () => {
    deleteMutation.mutate(commentId);
  };

  console.log('commentList', commentList);

  return (
    <div>
      <S.CommentsWrapperDiv>
        <S.CommentBox>
          <S.CommentHeaderDiv>
            {comments?.map((el: any) => (
              <S.CommentWrapperDiv key={el.commentId}>
                <S.CommentBoxDiv>
                  <S.DeepCircleImg src='/deepCircle.png' alt='타원' />
                  <S.CommentWriterBoxDiv>
                    <S.CommentWriterSpan>{el.UserId}</S.CommentWriterSpan>
                    <S.CommentContent>{el.content}</S.CommentContent>
                  </S.CommentWriterBoxDiv>
                  <button onClick={onClickDeleteBtn(el.commentId)}>
                    삭제하기
                  </button>
                </S.CommentBoxDiv>
              </S.CommentWrapperDiv>
            ))}
          </S.CommentHeaderDiv>
          <S.CommentFooterWrapDiv>
            <S.InputBoxDiv value={content} onChange={onChangeComment} />
            <S.SubmitButton onClick={onClickSubmitBtn}>등록</S.SubmitButton>
          </S.CommentFooterWrapDiv>
        </S.CommentBox>
      </S.CommentsWrapperDiv>
    </div>
  );
};

export default BoardDetailComment;
