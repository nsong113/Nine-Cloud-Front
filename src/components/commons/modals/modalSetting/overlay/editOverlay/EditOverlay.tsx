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
import { IoIosHeartHalf, IoMdHeart } from 'react-icons/io';

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
  const [isChecked, setIsChecked] = useState(false);
  const onClickModalDiv = (e: any) => {
    e.stopPropagation();
  };
  const [isPublicToday, setIsPublicToday] = useState(false);
  const params = useParams();
  const diaryId = params.id;

  const editMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const onChangeIsPublicHandler = () => {
    setIsPublic(!isPublic);
  };

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
    // setIsEdit((prev) => !prev);
  };

  const onClickCheck = () => {
    setIsDeleteModal((prev) => !prev);
  };

  const onClickTrashCan = () => {
    setIsChecked((prev) => !prev);
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
            <S.HeaderWrapperDiv>
              <S.TitleBoxDiv>마음 일기 수정</S.TitleBoxDiv>
              <S.CancelImg onClick={onClose} src='/cancel.png' alt='취소' />
            </S.HeaderWrapperDiv>
            <div>
              <S.ContentsContainerDiv>
                <S.DiarySpace
                  onChange={onChangeContents}
                  defaultValue={content}
                />
                {/* {contents && <span>200 / {contents.length - 7}</span>} */}
                <S.ToggleWrapperDiv>
                  <S.OpenToggleTitleSpan>공개여부</S.OpenToggleTitleSpan>
                  <S.ToggleContainerDiv>
                    <S.CustomToggle
                      id='customToggle'
                      checked={isPublic}
                      icons={{
                        unchecked: (
                          <S.ToggleTumbsImg
                            src='/private_person.png'
                            alt='사람들'
                          />
                        ),
                        checked: <S.PublicImg />,
                      }}
                      onChange={onChangeIsPublicHandler}
                    />
                    {!isPublic && (
                      <S.PrivateTextDiv>
                        <S.SubTitleSpan>
                          나만 일기를 확인할 수 있어요.
                        </S.SubTitleSpan>
                        {/* <span>나의 일기를 확인할 수 있어요</span> */}
                      </S.PrivateTextDiv>
                    )}
                    {!isPublic && <div style={{ width: '50px' }}></div>}
                    {isPublic && (
                      <S.PublicTextDiv>
                        <S.SubTitleSpan>
                          다른 사람들과 공유할 수 있습니다.
                        </S.SubTitleSpan>
                        {/* <span>다른 사람들과 공유할 수 있어요</span> */}
                      </S.PublicTextDiv>
                    )}
                  </S.ToggleContainerDiv>
                </S.ToggleWrapperDiv>
              </S.ContentsContainerDiv>
              <S.FooterBoxDiv>
                <S.ButtonBoxDiv>
                  {/* <S.DeleteButton onClick={onClickCheck}>
                    삭제하기
                  </S.DeleteButton> */}
                  <S.EditButton onClick={onClickEditBtn}>수정하기</S.EditButton>
                  <S.TrashCanImg onClick={onClickTrashCan} />
                </S.ButtonBoxDiv>
              </S.FooterBoxDiv>
              <S.DeleteTextDiv>
                {isChecked && (
                  <S.DeleteTextSpan onClick={onClickDeleteBtn}>
                    일기를 삭제하시려면 여기를 누르세요
                  </S.DeleteTextSpan>
                )}
              </S.DeleteTextDiv>
            </div>
          </S.ContentsWrapperDiv>
        </S.ModalContentDiv>
      </Animation3>
    </S.ContainerDiv>
  );
};

export default EditOverlay;
