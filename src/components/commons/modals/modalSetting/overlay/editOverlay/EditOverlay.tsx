import React, { useState } from 'react';
import { IEditPost } from '../../../editPost/EditPostOverlay.types';
import * as S from './EditOverlay.styles';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import DeleteModal from '../../../delete/DeleteModal';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost, updatePost } from 'src/apis/cheolmin-api/apis';
import { useNavigate, useParams } from 'react-router-dom';
import { IMyPost } from './EditOverlay.types';

const EditOverlay: React.FC<IEditPost> = ({
  detailedContent,
  content,
  onClose,
  setIsEdit,
  setIsClickedPencil,
}) => {
  const [isPublic, setIsPublic] = useState(detailedContent?.isPublic);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [contents, setContents] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const onClickModalDiv = (e: any) => {
    e.stopPropagation();
  };
  const params = useParams();
  const diaryId = params.id;

  const editMutation = useMutation(updatePost, {
    onSuccess: () => {
      setIsClickedPencil((prev) => !prev);
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
    navigate('/main');
  };

  const onClickEditBtn = () => {
    if (contents === '' && isPublic === detailedContent.isPublic) {
      alert('수정된 사항이 없습니다 다시 확인해주세요');
      return;
    }
    const myPost: IMyPost = {};
    if (contents) myPost.contents = contents;
    if (isPublic) myPost.isPublic = isPublic;

    editMutation.mutate({ diaryId, myPost });
    onClose();
  };

  const quillModules = {
    toolbar: [
      ['italic', 'underline', 'strike'],
      [
        // 글자 스타일
        { align: [] },
      ], // 정렬
    ],
  };

  const onClickTrashCan = () => {
    setIsChecked((prev) => !prev);
  };

  const onChangeContents = (value: string) => {
    console.log('value', value.length);
    setContents(value === '<p><br></p>' ? '' : value);
    if (value.length <= 200) {
      setContents(value);
    } else {
      alert('200자가 넘었다');
    }
  };

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
                {contents?.length === 0 && <S.BlankDiv></S.BlankDiv>}
                {contents?.length !== 0 && (
                  <S.TextAreaCount>{contents.length - 7}/200</S.TextAreaCount>
                )}
                <S.DiarySpace
                  theme='snow'
                  modules={quillModules}
                  onChange={onChangeContents}
                  defaultValue={content}
                />
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
                      </S.PrivateTextDiv>
                    )}
                    {!isPublic && <div style={{ width: '50px' }}></div>}
                    {isPublic && (
                      <S.PublicTextDiv>
                        <S.SubTitleSpan>
                          다른 사람들과 공유할 수 있습니다.
                        </S.SubTitleSpan>
                      </S.PublicTextDiv>
                    )}
                  </S.ToggleContainerDiv>
                </S.ToggleWrapperDiv>
              </S.ContentsContainerDiv>
              <S.FooterBoxDiv>
                <S.ButtonBoxDiv>
                  <S.EditButton onClick={onClickEditBtn}>수정하기</S.EditButton>
                </S.ButtonBoxDiv>
              </S.FooterBoxDiv>
            </div>
          </S.ContentsWrapperDiv>
        </S.ModalContentDiv>
      </Animation3>
    </S.ContainerDiv>
  );
};

export default EditOverlay;
