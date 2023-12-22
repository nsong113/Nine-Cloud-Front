import React, { ChangeEvent, useState } from 'react';
import * as S from './BoardDetailComment.styles';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import ReactQuill from 'react-quill';
import {
  addComment,
  deleteComment,
  editComment,
  getComments,
  getMyInfo,
} from 'src/apis/cheolmin-api/apis';
import { useParams } from 'react-router-dom';
import { CommentData } from './test';
import { IComment } from './BoardDetailComment.types';
import { VideoCard } from 'src/components/commons/utills/Date/date';

const BoardDetailComment: React.FC<IComment> = ({ profile, comment }) => {
  const [content, setContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const queryClient = useQueryClient();
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const params = useParams();

  const [message, setMessage] = useState('');
  const diaryId = params.id;

  const createdAtDate: Date | '' = comment?.data?.createdAt
    ? new Date(comment?.data?.createdAt)
    : '';

  if (createdAtDate) {
    createdAtDate.setHours(createdAtDate.getHours() - 9);
  }

  console.log('댓글', createdAtDate);
  console.log('comment', comment);

  const profileInfo = profile?.data;

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

  const onClickEditBtn = (commentId: any) => () => {
    setEditingCommentId(commentId);
    setIsEdit((prev) => !prev);
  };

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickDeleteBtn = (commentId: any) => () => {
    alert('정상적으로 삭제 됐습니다');
    deleteMutation.mutate(commentId);
  };

  const onClickOkBtn = () => {
    setIsDeleteModal((prev) => !prev);
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
          <S.CommentsWrapperDiv>
            <S.CommentBox>
              <S.CommentHeaderDiv></S.CommentHeaderDiv>
              <S.CommentFooterWrapDiv>
                <S.InputBoxDiv
                  placeholder='첫 번째 댓글을 등록해보세요'
                  value={content}
                  onChange={onChangeComment}
                />
                <S.SubmitButton onClick={onClickSubmitBtn}>등록</S.SubmitButton>
              </S.CommentFooterWrapDiv>
            </S.CommentBox>
          </S.CommentsWrapperDiv>
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
                      <S.ProfileImg src={profileInfo?.profileImg} alt='타원' />
                      <S.CommentWriterBoxDiv>
                        <S.DateBoxDiv>
                          <S.CommentWriterSpan>
                            {profileInfo?.username}
                            <S.DateTextSpan>{VideoCard(createdAtDate)}</S.DateTextSpan>
                          </S.CommentWriterSpan>
                        </S.DateBoxDiv>

                        {editingCommentId !== el.commentId && (
                          <S.ButtonWrapperDiv>
                            <S.CommentContent>{el.content}</S.CommentContent>
                            <div>
                              <S.PencilBtn
                                onClick={onClickEditBtn(el.commentId)}
                              >
                                수정하기
                              </S.PencilBtn>
                              <S.TrashButton
                                onClick={onClickDeleteBtn(el.commentId)}
                              >
                                삭제하기
                              </S.TrashButton>
                            </div>
                          </S.ButtonWrapperDiv>
                        )}
                        {editingCommentId === el.commentId && (
                          <div>
                            {!isEdit && (
                              <S.ButtonWrapperDiv>
                                <S.CommentContent>
                                  {el.content}
                                </S.CommentContent>
                                <div>
                                  <S.PencilBtn
                                    onClick={onClickEditBtn(el.commentId)}
                                  >
                                    수정하기
                                  </S.PencilBtn>
                                  <S.TrashButton
                                    onClick={onClickDeleteBtn(el.commentId)}
                                  >
                                    삭제하기
                                  </S.TrashButton>
                                </div>
                              </S.ButtonWrapperDiv>
                            )}

                            {isEdit && (
                              <S.ButtonWrapperDiv>
                                <S.CommentTextArea
                                  onChange={onChangeEditComment}
                                  defaultValue={el.content}
                                />
                                <div>
                                  <S.CancelImg onClick={onClickCancelBtn}>
                                    취소하기
                                  </S.CancelImg>
                                  <S.ConfrimImg
                                    onClick={onClickEditComment(el.commentId)}
                                  >
                                    수정하기
                                  </S.ConfrimImg>
                                </div>
                              </S.ButtonWrapperDiv>
                            )}
                          </div>
                        )}
                      </S.CommentWriterBoxDiv>
                    </S.CommentBoxDiv>
                  </S.CommentWrapperDiv>
                ))}
              </S.CommentHeaderDiv>
            </S.CommentBox>
            <S.CommentFooterWrapDiv>
              <S.InputBoxDiv value={content} onChange={onChangeComment} />
              <S.SubmitButton onClick={onClickSubmitBtn}>등록</S.SubmitButton>
            </S.CommentFooterWrapDiv>
          </S.CommentsWrapperDiv>
        </div>
      )}
    </div>
  );
};

export default BoardDetailComment;
