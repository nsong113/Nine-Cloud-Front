import React, { ChangeEvent, useState } from 'react';
import { IEditPost } from '../../../editPost/EditPostOverlay.types';
import * as S from './EditOverlay.styles';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import DeleteModal from '../../../delete/DeleteModal';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost, updatePost } from 'src/apis/cheolmin-api/apis';
import { useNavigate, useParams } from 'react-router-dom';

const EditOverlay: React.FC<IEditPost> = ({
  detailedContent,
  content,
  onClose,
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
      queryClient.invalidateQueries('post');
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
    editMutation.mutate({ diaryId,isPublic,contents });
    alert('정상적으로 수정됐습니다');
    onClose();
  };

  const onClickCheck = () => {
    setIsPublic((prev) => !prev);
  };

  const onClickTrashCan = () => {
    setIsDeleteModal((prev) => !prev);
  };

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  console.log('isPublic', isPublic);
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
                <S.ContentTextArea
                  onChange={onChangeTextArea}
                  defaultValue={content}
                ></S.ContentTextArea>
              </div>
              <S.FooterBoxDiv>
                <div>
                  <button onClick={onClickCancel}>취소하기</button>
                  <button onClick={onClickEditBtn}>수정하기</button>
                </div>
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
