import React from 'react';
import * as S from './DiaryDeleteOverlay.styles';
import { IDiaryDelete } from './DiatyDeleteOverlay.types';
import { deletePost } from 'src/apis/cheolmin-api/apis';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

const DiaryDeleteOverlay: React.FC<IDiaryDelete> = ({ onOk, onClose }) => {
  const navigate = useNavigate();
  const params = useParams();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      navigate('/main');
    },
  });

  const onClickDeleteBtn = () => {
    deleteMutation.mutate(params.id);
    alert('글이 정상적으로 삭제 됐습니다');
  };

  return (
    <S.ContainerDiv>
      <S.Div>
        <S.ContainerDiv className='modal'>
          <S.ModalContentDiv>
            <S.TitleBoxDiv>
              <img src='/alert.png' alt='경고' />
              <S.TitleSpan>일기를 삭제 하시겠습니까? </S.TitleSpan>
              <S.SubTitleSpan>
                삭제하기를 누르면 오늘의 일기가 삭제됩니다.
              </S.SubTitleSpan>
            </S.TitleBoxDiv>
            <S.BoxButton>
              <S.CancelButton onClick={onClose}>취소하기</S.CancelButton>
              <S.OkButton onClick={onClickDeleteBtn}>삭제하기</S.OkButton>
            </S.BoxButton>
          </S.ModalContentDiv>
        </S.ContainerDiv>
      </S.Div>
    </S.ContainerDiv>
  );
};

export default DiaryDeleteOverlay;
