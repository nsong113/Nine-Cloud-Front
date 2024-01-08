import React from 'react';
import * as S from './DiaryDeleteOverlay.styles';
import { IDiaryDelete } from './DiatyDeleteOverlay.types';
import { deletePost } from 'src/apis/cheolmin-api/apis';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { isActiveDeleteModal } from 'src/states/detailedPageModal';
import { useRecoilState } from 'recoil';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import Portal from 'src/components/commons/utills/Portal/Portal';

const DiaryDeleteOverlay: React.FC<IDiaryDelete> = ({ onOk, onClose }) => {
  const [isDelete, setIsDelete] = useRecoilState(isActiveDeleteModal);
  const navigate = useNavigate();
  const params = useParams();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      navigate('/main');
      setIsDelete(false);
    },
  });

  const onClickDeleteBtn = () => {
    deleteMutation.mutate(params.id);
  };

  return (
    <Portal>
      <S.ContainerDiv>
        <S.Div>
          <S.ContainerDiv className='modal'>
            <Animation3>
              <S.ModalContentDiv>
                <S.TitleBoxDiv>
                  <img
                    src='https://lv4lv4task.s3.ap-northeast-2.amazonaws.com/alert.png'
                    alt='경고'
                    rel='preload'
                  />
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
            </Animation3>
          </S.ContainerDiv>
        </S.Div>
      </S.ContainerDiv>
    </Portal>
  );
};

export default DiaryDeleteOverlay;
