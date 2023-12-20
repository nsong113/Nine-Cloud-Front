import React, { ChangeEvent, useState } from 'react';
import { IEditPost } from '../../../editPost/EditPostOverlay.types';
import * as S from './EditOverlay.styles';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import DeleteModal from '../../../delete/DeleteModal';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost, updatePost } from 'src/apis/cheolmin-api/apis';
import { useNavigate, useParams } from 'react-router-dom';
import { IMyPost } from './EditOverlay.types';
import ReactQuill from 'react-quill';
// 
const EditOverlay: React.FC<IEditPost> = ({
  detailedContent,
  content,
  onClose,
  setIsEdit,
}) => {
  const [isPublic, setIsPublic] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [contents, setContents] = useState('');
  const onClickModalDiv = (e: any) => {
    e.stopPropagation();
  };
  const params = useParams();
  const diaryId = params.id;

  const editMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const onClickDeleteBtn = () => {
    deleteMutation.mutate(params.id);
    alert('글이 정상적으로 삭제 됐습니다');
    navigate('/main');
  };

  const onClickCancel = () => {
    onClose();
  };

  const onClickEditBtn = () => {
    const myPost: IMyPost = {};
    if (contents) myPost.contents = contents;
    if (isPublic) myPost.isPublic = isPublic;

    // if(detailedContent.content === )
    editMutation.mutate({ diaryId, myPost });
    alert('정상적으로 수정됐습니다');
    onClose();
    setIsEdit((prev) => !prev);
  };

  const onClickCheck = () => {
    setIsPublic((prev) => !prev);
  };

  const onClickTrashCan = () => {
    setIsDeleteModal((prev) => !prev);
  };

  const onChangeContents = (value: string) => {
    setContents(value === '<p><br></p>' ? '' : value);
    if (contents.length > 205) {
      alert('200자 이상 입력 불가합니다');
      return;
    }
  };

  console.log('contents', contents);

  return (
    <S.ContainerDiv onClick={onClose} className='modal'>
      <Animation3>
        <S.ModalContentDiv onClick={onClickModalDiv}>
          {isDeleteModal && (
            <DeleteModal onOk={onClickDeleteBtn} onClose={onClickTrashCan} />
          )}
          <S.ContentsWrapperDiv>
            <div>
              <S.TitleBoxDiv>일기 수정하기</S.TitleBoxDiv>
            </div>
            <div>
              <div>
                <h3>공유여부</h3>
                <span>
                  퍼블릭으로 설정할 시, 다른사람들과 공유할 수 있습니다.
                </span>
                <S.CheckBoxInput onClick={onClickCheck} type='checkbox' />
              </div>
              <div>
                <ReactQuill
                  style={{ height: '150px', width: '400px' }}
                  onChange={onChangeContents}
                  defaultValue={content}
                />
              </div>

              <S.FooterBoxDiv>
                <div>
                  <button onClick={onClickCancel}>취소하기</button>
                  <button onClick={onClickEditBtn}>수정하기</button>
                </div>
                {contents && <span>200 / {contents.length - 7}</span>}
                <S.TrashCanImg onClick={onClickTrashCan} />
              </S.FooterBoxDiv>
            </div>
          </S.ContentsWrapperDiv>
        </S.ModalContentDiv>
      </Animation3>
    </S.ContainerDiv>
  );
};

export default EditOverlay;
