import React from 'react';
import * as S from './BoardDetailComment.styles';
import { useQuery } from 'react-query';
import { getComments } from 'src/apis/cheolmin-api/apis';
import { useParams } from 'react-router-dom';

const BoardDetailComment = () => {
  const params = useParams();

  const { data } = useQuery('comment', () => getComments(params.id));

  return (
    <div>
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
  );
};

export default BoardDetailComment;
