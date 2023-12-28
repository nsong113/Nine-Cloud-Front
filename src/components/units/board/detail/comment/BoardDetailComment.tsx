import React, { ChangeEvent, useState } from 'react';
import * as S from './BoardDetailComment.styles';
import { useMutation, useQueryClient } from 'react-query';
import {
  addComment,
  deleteComment,
  editComment,
} from 'src/apis/cheolmin-api/apis';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { IComment } from './BoardDetailComment.types';
const BoardDetailComment: React.FC<IComment> = ({
  detailedContent,
  profile,
  comment,
}) => {
  const [content, setContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const queryClient = useQueryClient();
  const [editingCommentId, setEditingCommentId] = useState(null);
  const params = useParams();

  const [message, setMessage] = useState('');
  const diaryId = params.id;

  const createdAtDate: Date | '' = comment?.data?.createdAt
    ? new Date(comment?.data?.createdAt)
    : '';

  if (createdAtDate) {
    createdAtDate.setHours(createdAtDate.getHours() - 9);
  }

  const comments = comment?.data;

  const commentMutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comment');
    },
  });

  console.log('profile', profile);

  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comment');
    },
  });

  const editMutation = useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comment');
    },
  });

  const onClickSubmitBtn = () => {
    commentMutation.mutate({ content, diaryId });
    setContent('');
  };

  const onClickEditComment = (commentId: number) => () => {
    editMutation.mutate({ message, commentId });
    setIsEdit((prev) => !prev);
  };

  const onClickEditBtn = (commentId: any, userId: any) => () => {
    setEditingCommentId(commentId);
    Swal.fire({
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight : bolder;">수정할 내용을 입력하세요</span>',
      input: 'text',
      inputValue: '', // 초기값은 비어있음
      confirmButtonText: '수정하기',
      cancelButtonText: '취소하기',
      showCancelButton: true,
      reverseButtons: true,
      inputValidator: (value) => {
        // 입력값이 유효한지 검사할 수 있는 함수
        if (!value) {
          return '수정할 내용을 입력하세요';
        }
      },
    }).then((editResult) => {
      if (editResult.isConfirmed) {
        const message = editResult.value;
        // 여기서 editMutation.mutate를 호출하여 댓글을 수정합니다.
        editMutation.mutate({ message, commentId });
      }
    });
  };

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickDeleteBtn = (commentId: any, userId: any) => () => {
    Swal.fire({
      icon: 'error',
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight : bolder;">댓글을 삭제 하시겠습니까 ?</span>',
      confirmButtonText: '확인',
      showCancelButton: true,
      cancelButtonText: '취소',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(commentId);
      }
    });
  };

  const onClickCancelBtn = () => {
    setIsEdit((prev) => !prev);
  };

  const onChangeEditComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  return (
    <div>
      {comments.length === 0 && (
        <div>
          {detailedContent.isPublic === true && (
            <S.CommentsWrapperDiv>
              <S.CommentBox>
                <S.CommentHeaderDiv></S.CommentHeaderDiv>
                <S.CommentFooterWrapDiv>
                  <S.InputBoxDiv
                    placeholder='첫 번째 댓글을 등록해보세요'
                    value={content}
                    onChange={onChangeComment}
                  />
                  <S.SubmitButton onClick={onClickSubmitBtn}>
                    등록
                  </S.SubmitButton>
                </S.CommentFooterWrapDiv>
              </S.CommentBox>
            </S.CommentsWrapperDiv>
          )}
          {detailedContent.isPublic === false && (
            <S.NoCommentBoxDiv>
              <S.NoCommentSpan>
                전체공개로 전환해 사람들과 일기를 공유해보세요!
              </S.NoCommentSpan>
            </S.NoCommentBoxDiv>
          )}
        </div>
      )}
      {comments.length !== 0 && (
        <div>
          <S.CommentsWrapperDiv>
            <S.CommentBox>
              <S.CommentHeaderDiv>
                {comments?.map((el: any) => (
                  <S.CommentWrapperDiv key={el.commentId}>
                    <S.CommentBoxDiv>
                      <S.ProfileImg src={el?.User?.profileImg} alt='타원' />
                      <S.CommentWriterBoxDiv>
                        <S.DateBoxDiv>
                          <S.CommentWriterSpan>
                            {el?.User?.username}
                          </S.CommentWriterSpan>
                          {profile?.data?.userId === el.UserId && (
                            <S.CommentSettingDiv>
                              <S.EditTextSpan
                                onClick={onClickEditBtn(
                                  el.commentId,
                                  el.UserId
                                )}
                              >
                                수정
                              </S.EditTextSpan>
                              <S.DeleteTextSpan
                                onClick={onClickDeleteBtn(
                                  el.commentId,
                                  el.UserId
                                )}
                              >
                                삭제
                              </S.DeleteTextSpan>
                            </S.CommentSettingDiv>
                          )}
                        </S.DateBoxDiv>
                        <S.ButtonWrapperDiv>
                          <S.CommentContent>{el.content}</S.CommentContent>
                        </S.ButtonWrapperDiv>
                      </S.CommentWriterBoxDiv>
                    </S.CommentBoxDiv>
                  </S.CommentWrapperDiv>
                ))}
              </S.CommentHeaderDiv>
            </S.CommentBox>
            <S.CommentFooterWrapDiv>
              {detailedContent.isPublic === true && (
                <S.BlankDiv>
                  <S.InputBoxDiv
                    placeholder='댓글을 작성해보세요.'
                    value={content}
                    onChange={onChangeComment}
                  />
                  <S.SubmitButton onClick={onClickSubmitBtn}>
                    등록
                  </S.SubmitButton>
                </S.BlankDiv>
              )}
              {detailedContent.isPublic === false && (
                <div>
                  <S.BlankInput
                    placeholder='공개로 전환하면 다른 사용자가 댓글을 달 수 있어요'
                    value={content}
                    onChange={onChangeComment}
                    disabled
                  />
                </div>
              )}
            </S.CommentFooterWrapDiv>
          </S.CommentsWrapperDiv>
        </div>
      )}
    </div>
  );
};

export default BoardDetailComment;
