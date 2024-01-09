import React, { useState, MouseEvent } from 'react';
import { IMyPage } from './MyPageOverlay.types';
import * as S from './MyPageOverlay.styles';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { getMyInfo } from 'src/apis/cheolmin-api/apis';
import axiosInstance from 'src/apis/loginapi';
import Portal from 'src/components/commons/utills/Portal/Portal';
import DeleteOverlay from '../deleteOverlay/DeleteOverlay';
import MyPageEdit from './mypageEdit/MyPageEdit';

const MyPageOverlay: React.FC<IMyPage> = ({ onOk, isActiveModal }) => {
  const { data } = useQuery('myInfo', getMyInfo);
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string | null>('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onClickModalDiv = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onClickToggle = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiredTime');
    Swal.fire({
      icon: 'success',
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight : bolder;"> 성공적으로 처리 됐습니다.</span>',
      confirmButtonText: '확인',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  };
  const onClickUnRegister = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axiosInstance.delete(`/signoff`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${accessToken}`,
          Refreshtoken: `${refreshToken}`,
        },
      });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      alert(response.data.message);

      navigate('/login');
    } catch (error: any) {
      console.error('네트워크 오류', error.message);
      alert('네트워크 오류');
    }
  };

  const onClickOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <Portal>
      <S.ContainerDiv onClick={onOk} className='modal'>
        <S.ModalContentDiv
          onClick={onClickModalDiv}
          isActiveModal={isActiveModal}
        >
          {isOpenModal && (
            <DeleteOverlay
              onOk={onClickUnRegister}
              onClose={onClickOpenModal}
            />
          )}
          <S.CancelImgBox>
            <S.StyledHoverTapButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <S.CancelImg
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={onOk}
                src={isHovered ? '/cancel2.png' : '/cancel.png'}
                alt='취소'
              />
            </S.StyledHoverTapButton>
          </S.CancelImgBox>

          <S.ContentsBoxDiv>
            {!isEdit && (
              <div>
                <S.HeaderWrapperDiv></S.HeaderWrapperDiv>
                <S.ContentsWrapperDiv>
                  <S.ImageBoxDiv>
                    <S.PicutureImg
                      src={preview || data?.data.profileImg}
                      alt='엑박'
                    />
                  </S.ImageBoxDiv>
                  <S.ContentsBoxDIv>
                    <S.NameBoxDiv>
                      <S.MyinfoBoxDiv>
                        <S.NicknameSpan>{data?.data.username}</S.NicknameSpan>
                        <S.EmailSpan> {data?.data.email}</S.EmailSpan>
                      </S.MyinfoBoxDiv>
                    </S.NameBoxDiv>
                  </S.ContentsBoxDIv>
                </S.ContentsWrapperDiv>
                <S.ButtonWrapperDiv>
                  <S.ButtonBoxDiv>
                    <S.EditButton onClick={onClickToggle}>
                      수정하기
                    </S.EditButton>
                    <S.SignButtonDiv>
                      <S.SignText onClick={onClickLogout}>로그아웃</S.SignText>
                      <S.SignText onClick={onClickOpenModal}>
                        회원탈퇴
                      </S.SignText>
                    </S.SignButtonDiv>
                  </S.ButtonBoxDiv>
                </S.ButtonWrapperDiv>
              </div>
            )}
            {isEdit && <MyPageEdit data={data} setIsEdit={setIsEdit} />}
          </S.ContentsBoxDiv>
        </S.ModalContentDiv>
      </S.ContainerDiv>
    </Portal>
  );
};
export default MyPageOverlay;
