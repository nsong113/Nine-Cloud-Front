import React, {
  ChangeEvent,
  useEffect,
  useState,
  MutableRefObject,
  useRef,
} from 'react';
import styled, { keyframes } from 'styled-components';
import { IMyPage, IMyPost } from './MyPageOverlay.types';
import * as S from './MyPageOverlay.styles';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  editMyInfo,
  editPassword,
  getMyInfo,
} from 'src/apis/cheolmin-api/apis';
import axios from 'axios';
import DeleteModal from '../../../delete/DeleteModal';

const MyPageOverlay: React.FC<IMyPage> = ({ onOk }) => {
  const queryClient = useQueryClient();
  const { data } = useQuery('myInfo', getMyInfo);

  console.log('사진', data?.data);
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState<File | null>();
  const buttonRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [preview, setPreview] = useState<string | null>(''); // Default preview state
  const [selectedImage, setSelectedImage] = useState<string | File>('');
  const [username, setUsername] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const [isEditPW, setIsEditPW] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setSelectedImage(event.target.files?.[0]);
      const file: File = event.target.files?.[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); // 선택된 파일을 데이터 URL로 변환시킨다.
      fileReader.onload = (event) => {
        // 파일 읽기 작업 후, state에 url 추가
        if (typeof event.target?.result === 'string')
          setPreview(event.target?.result);
      };
    }
  };

  console.log('selectedImage', selectedImage);
  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(imgFile);
    } else {
      setPreview(null);
    }
  }, [imgFile]);

  const onClickModalDiv = (e: any) => {
    e.stopPropagation();
  };

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event?.target.value);
  };

  const editMypageMutation = useMutation(editMyInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('myInfo');
      setIsEdit((prev) => !prev);
    },
    onError: () => {
      alert('에러입니다');
    },
  });

  const onClickEditBtn = () => {
    if (username === '') {
      alert('바꿀 닉네임을 입력하세요');
      return;
    }
    const myPost: IMyPost = {};
    if (username) myPost.username = username;
    const newProfile = {
      imgFile: selectedImage,
    };

    editMypageMutation.mutate({ myPost, newProfile });

    navigate('/main');
  };

  const profileImage = localStorage.getItem('image');

  const onClickButton = () => {
    buttonRef.current.click();
  };

  const onClickToggle = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiredTime');
    alert('로그아웃이 완료되었습니다.');
    navigate('/login');
  };
  const onClickUnRegister = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.delete(`${BASE_URL}/signoff`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${accessToken}`,
          Refreshtoken: `${refreshToken}`,
        },
      });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expiredTime');
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
    <S.ContainerDiv onClick={onOk} className='modal'>
      <S.ModalContentDiv onClick={onClickModalDiv}>
        {isOpenModal && (
          <DeleteModal onOk={onClickUnRegister} onClose={onClickOpenModal} />
        )}
        <S.CancelImgBox>
          <S.CancelImg
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onOk}
            src={isHovered ? '/cancel2.png' : '/cancel.png'}
            alt='취소'
          />
        </S.CancelImgBox>

        <S.ContentsBoxDiv>
          {isEdit && <S.ProfileTitleSpan>프로필 수정</S.ProfileTitleSpan>}
          <S.HeaderWrapperDiv></S.HeaderWrapperDiv>
          <S.ContentsWrapperDiv>
            <S.ImageBoxDiv>
              <S.ImageBoxDiv>
                {/* {!data?.data.profileImg && ( */}
                <S.PicutureImg
                  src={preview || data?.data.profileImg}
                  alt='엑박'
                  isEdit={isEdit}
                />
                {/* )} */}
                {/* {data?.data.profileImg && (
                  <S.ImageBoxDiv>
                    <S.PicutureImg src={data?.data.profileImg} alt='엑박' />
                  </S.ImageBoxDiv>
                )} */}
              </S.ImageBoxDiv>
            </S.ImageBoxDiv>
            <S.ImagePlustButtonBox>
              <S.HiddenInput
                name='img'
                type='file'
                accept='image/*'
                onChange={onChangeImg}
                className='hidden'
                ref={buttonRef}
              />
              {isEdit && (
                <S.UploadBoxDiv>
                  <S.ImageButton onClick={onClickButton}>
                    사진 불러오기
                  </S.ImageButton>
                </S.UploadBoxDiv>
              )}
            </S.ImagePlustButtonBox>
            <S.ContentsBoxDIv>
              <S.NameBoxDiv>
                <div>
                  {!isEdit && (
                    <div>
                      <S.MyinfoBoxDiv>
                        <S.NicknameSpan>{data?.data.username}</S.NicknameSpan>
                        <S.EmailSpan> {data?.data.email}</S.EmailSpan>
                      </S.MyinfoBoxDiv>
                    </div>
                  )}
                </div>
                {isEdit && (
                  <S.NewNameWrapperDiv>
                    <S.UsernameSpan>사용자 이름</S.UsernameSpan>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <S.NameInput
                        onChange={onChangeUsername}
                        type='text'
                        placeholder={data?.data.username}
                      />
                    </div>
                  </S.NewNameWrapperDiv>
                )}
              </S.NameBoxDiv>
              <div>
                <span></span>
              </div>
            </S.ContentsBoxDIv>
          </S.ContentsWrapperDiv>
          <S.ButtonWrapperDiv>
            {!isEdit && (
              <S.ButtonBoxDiv>
                <S.EditButton onClick={onClickToggle}>수정하기</S.EditButton>
                <S.SignButtonDiv>
                  <S.SignText onClick={onClickLogout}>로그아웃</S.SignText>
                  <S.SignText onClick={onClickOpenModal}>회원탈퇴</S.SignText>
                </S.SignButtonDiv>
              </S.ButtonBoxDiv>
            )}
            {isEdit && (
              <S.ButtonDiv>
                <S.CancelButton onClick={onClickToggle}>
                  취소하기
                </S.CancelButton>
                <S.SubmitButton onClick={onClickEditBtn}>
                  등록하기
                </S.SubmitButton>
              </S.ButtonDiv>
            )}
          </S.ButtonWrapperDiv>
        </S.ContentsBoxDiv>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};
export default MyPageOverlay;
