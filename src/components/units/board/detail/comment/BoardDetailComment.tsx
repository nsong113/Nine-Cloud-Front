import React, { ChangeEvent, useState } from 'react';
import * as S from './BoardDetailComment.styles';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addComment, getComments } from 'src/apis/cheolmin-api/apis';
import { useParams } from 'react-router-dom';
import { CommentData } from './test';

const BoardDetailComment = () => {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const params = useParams();

  console.log('params', params.id);

  const diaryId = params.id;

  const { data } = useQuery('comment', () => getComments(params.id));

  const commentMutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
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

  console.log('commentList', commentList);

  return (
    <div>
      <S.CommentsWrapperDiv>
        <S.CommentBox>
          <S.CommentHeaderDiv>
            {commentList.map((el) => (
              <S.CommentWrapperDiv key={el.commentId}>
                <S.CommentBoxDiv>
                  <S.DeepCircleImg src='/deepCircle.png' alt='타원' />
                  <S.CommentWriterBoxDiv>
                    <S.CommentWriterSpan>{el.UserId}</S.CommentWriterSpan>
                    <S.CommentContent>{el.content}</S.CommentContent>
                  </S.CommentWriterBoxDiv>
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
