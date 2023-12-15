import React, { useState } from 'react';
import { IEditPost } from '../../../editPost/EditPostOverlay.types';
import * as S from './EditOverlay.styles';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';

const EditOverlay: React.FC<IEditPost> = ({ content, onClose }) => {
  const [isPublic, setIsPublic] = useState(false);
  const onClickModalDiv = (e: any) => {
    e.stopPropagation();
  };

  const onClickCancel = () => {
    onClose();
  };

  const onClickEditBtn = () => {
    alert('정상적으로 수정됐습니다');
    onClose();
  };

  const onClickCheck = () => {
    setIsPublic((prev) => !prev);
  };

  console.log('isPublic', isPublic);
  return (
    <S.ContainerDiv onClick={onClose} className='modal'>
      <Animation3>
        <S.ModalContentDiv onClick={onClickModalDiv}>
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
                <S.ContentTextArea defaultValue={content}></S.ContentTextArea>
              </div>
              <div>
                <button onClick={onClickCancel}>취소하기</button>
                <button onClick={onClickEditBtn}>수정하기</button>
              </div>
            </div>
          </S.ContentsWrapperDiv>
        </S.ModalContentDiv>
      </Animation3>
    </S.ContainerDiv>
  );
};

export default EditOverlay;
