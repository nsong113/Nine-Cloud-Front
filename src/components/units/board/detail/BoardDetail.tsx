/* eslint-disable */
import { useEffect, useState } from 'react';
import * as S from './BoardDetail.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import {
  getComments,
  getMyInfo,
  getOnePostInfo,
} from 'src/apis/cheolmin-api/apis';

import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import Loading from 'src/components/commons/utills/loading/Loading';
import EditPostOverlay from 'src/components/commons/modals/editPost/EditPostOverlay';
import { Tooltip } from 'src/components/commons/utills/tooltip/tooltip';
import DiaryDeleteModal from 'src/components/commons/modals/diaryDelete/diaryDelete';
import { useRecoilState } from 'recoil';
import { arrowNavigate } from 'src/states/navigate';
import KakaoShare from '../../kakaoshare/KakaoShare';
import BoardDetailContents from './boardDetailContents/BoardDetailContents';
import { isActiveDeleteModal, isActiveEditModal } from 'src/states/detailedPageModal';

const BoardDetail = () => {
  const queryClient = useQueryClient();
  const [isGoingToMain, setIsGoingToMain] = useRecoilState(arrowNavigate);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useRecoilState(isActiveEditModal);
  const [isHeart, setIsHeart] = useState(false);
  const [isClickedPencil, setIsClickedPencil] = useState(false);
  const [isDelete, setIsDelete] = useRecoilState(isActiveDeleteModal);

  useEffect(() => {
    return () => {
      // 컴포넌트가 언마운트될 때 쿼리를 삭제하는 로직
      queryClient.removeQueries(['post']);
    };
  }, []);

  const onClickEdit = () => {
    setIsActiveModal((prev) => !prev);
  };

  const { data: comment } = useQuery('comment', () => getComments(params.id));
  const { data: profile } = useQuery('profile', getMyInfo);
  const { data, isLoading } = useQuery(['post'], () =>
    getOnePostInfo(params.id)
  );
  const detailedContent = data?.data;
  const params = useParams();
  useEffect(() => {
    if (data?.like !== null) {
      if (data?.like?.likeExist === true) {
        setIsHeart(true);
      }
    } else {
      setIsHeart(false);
    }
  }, [params.id, detailedContent?.likeExist]);

  if (isLoading) {
    return <Loading />;
  }

  const onClickMoveToMain = () => {
    if (isGoingToMain === true) {
      navigate('/main');
    } else if (isGoingToMain === false) {
      navigate('/community');
    }
  };

  const onClickDeleteBtn = () => {
    setIsDelete((prev) => !prev);
  };

  const createdAtDate = detailedContent?.createdAt
    ? new Date(detailedContent.createdAt)
    : null;

  if (createdAtDate) {
    createdAtDate.setHours(createdAtDate.getHours() - 9);
  }

  const formattedDate = createdAtDate
    ? createdAtDate.toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

    

  return (
    <S.ContainerDiv>
      {isActiveModal && (
        <EditPostOverlay
          content={detailedContent?.content}
          onClose={onClickEdit}
          detailedContent={detailedContent}
          setIsEdit={setIsEdit}
          setIsClickedPencil={setIsClickedPencil}
        />
      )}

      <div key={data?.id}>
        {isDelete && <DiaryDeleteModal onClose={onClickDeleteBtn} />}
        <Animation3>
          <S.HeaderWrapperDiv>
            <S.HeaderLeftBoxDiv>
              <S.BackImg onClick={onClickMoveToMain} />
              <S.TitleTextSpan>{formattedDate}</S.TitleTextSpan>
            </S.HeaderLeftBoxDiv>
            <S.HearderRightBoxDiv>
              <div style={{ marginRight: '10px' }}>
                <KakaoShare />
              </div>
              <Tooltip message='공개'>
                {detailedContent?.isPublic === true && (
                  <S.PublicPrivateImg src='/people.png' alt='공개' />
                )}
              </Tooltip>
              <Tooltip message='비공개'>
                {detailedContent?.isPublic === false && (
                  <S.PublicPrivateImg src='/person.png' alt='비공개' />
                )}
              </Tooltip>
            </S.HearderRightBoxDiv>
          </S.HeaderWrapperDiv>
          <S.ImgBoxDiv>
            <S.MainImg src={detailedContent?.image} alt='엑박' />
          </S.ImgBoxDiv>
        </Animation3>
        <BoardDetailContents
          detailedContent={detailedContent}
          comment={comment}
          data={data}
          profile = {profile}
        />
      </div>
    </S.ContainerDiv>
  );
};

export default BoardDetail;
