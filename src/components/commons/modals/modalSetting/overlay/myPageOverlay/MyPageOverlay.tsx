import React, {
  ChangeEvent,
  useEffect,
  useState,
  MutableRefObject,
  useRef,
} from 'react';
import styled, { keyframes } from 'styled-components';
import { IMyPage } from './MyPageOverlay.types';
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
  const editMyInfoMutation = useMutation(editMyInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('myInfo');
    },
  });
  const { data } = useQuery('myInfo', getMyInfo);

  console.log('사진', data?.data);
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState<File | null>();
  const [isActive, setIsActive] = useState<boolean>(false);
  const buttonRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [preview, setPreview] = useState<string | null>(''); // Default preview state
  const [selectedImage, setSelectedImage] = useState<string | File>('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const [newPassword, setNewPassword] = useState('');
  const [isEditPW, setIsEditPW] = useState(false);

  const onChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setSelectedImage(event.target.files?.[0]);
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

  const [isEdit, setIsEdit] = useState(false);

  const onClickModalDiv = (e: any) => {
    e.stopPropagation();
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event?.target.value);
  };

  const editMypageMutation = useMutation(editMyInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('myInfo');
      setIsEdit((prev) => !prev);
    },
  });

  const editPasswordMutation = useMutation(editPassword, {
    onSuccess: () => {
      queryClient.invalidateQueries('myPassword');
      setIsEdit((prev) => !prev);
      setIsEditPW((prev) => !prev);
    },
  });

  const onClickEditBtn = () => {
    // setIsEdit((prev) => !prev);
    // if (isEdit && imgFile) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     const result = reader.result as string;
    //     localStorage.setItem('image', result);
    //   };
    //   reader.readAsDataURL(imgFile);
    // }
    // editMyInfoMutation.mutate();
    const newProfile = {
      imgFile: selectedImage,
      username,
    };

    editMypageMutation.mutate(newProfile);

    navigate('/main');
  };

  const onClickPasswordChange = () => {
    editPasswordMutation.mutate({ password, newPassword });
  };
  const profileImage = localStorage.getItem('image');

  const onClickButton = () => {
    buttonRef.current.click();
  };

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const onClickToggle = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickReset = () => {
    setIsEdit((prev) => !prev);
    setIsEditPW((prev) => !prev);
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

  const onClickChangePW = () => {
    setIsEditPW((prev) => !prev);
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
        <S.ContentsBoxDiv>
          <S.HeaderWrapperDiv></S.HeaderWrapperDiv>
          <S.ContentsWrapperDiv>
            <h3>마이프로필</h3>
            <S.ImageBoxDiv>
              <div>
                {!data?.data.profileImg && (
                  <S.PicutureImg
                    src={profileImage || '/avatar.png'}
                    alt='엑박'
                  />
                )}
                {data?.data.profileImg && (
                  <S.PicutureImg src={data?.data.profileImg} alt='엑박' />
                )}
              </div>
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
                <div>
                  {!isEditPW && (
                    <S.ImageButton onClick={onClickButton}>
                      사진 수정
                    </S.ImageButton>
                  )}
                </div>
              )}
            </S.ImagePlustButtonBox>
            <S.ContentsBoxDIv>
              <S.NameBoxDiv>
                <div>
                  {!isEdit && (
                    <div>
                      {!isEditPW && (
                        <S.MyinfoBoxDiv>
                          <span>닉네임 : {data?.data.username} </span>
                          <span>이메일 : {data?.data.email}</span>
                        </S.MyinfoBoxDiv>
                      )}
                    </div>
                  )}

                  {isEditPW && (
                    <div>
                      {isEditPW && (
                        <div
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          현재 비밀번호 :
                          <S.NicknameInput
                            onChange={onChangeNewPassword}
                            type='password'
                          />
                          새로운 비밀번호 :
                          <S.NicknameInput
                            onChange={onChangePassword}
                            type='password'
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {isEdit && (
                  <div>
                    {!isEditPW && (
                      <div>
                        {/* <span>새로운 비번</span>
                    <S.NicknameInput
                      onChange={onChangeNewPassword}
                      type='password'
                    />
                    <span>원래 비번</span>
                    <S.NicknameInput
                      onChange={onChangePassword}
                      type='password'
                    /> */}
                        <span>닉네임</span>
                        <div
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          <S.NicknameInput
                            onChange={onChangeUsername}
                            type='text'
                          />
                          <div></div>
                          <button onClick={onClickChangePW} type='button'>
                            비밀번호를 바꾸시겠습니까?
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </S.NameBoxDiv>
              <div>
                <span></span>
              </div>
            </S.ContentsBoxDIv>
          </S.ContentsWrapperDiv>
          <S.ButtonWrapperDiv>
            {!isEdit && (
              <div>
                <button onClick={onClickToggle}>수정하기</button>
                <button onClick={onClickLogout}>로그아웃</button>
                <button onClick={onClickOpenModal}>회원탈퇴</button>
              </div>
            )}
            {isEdit && (
              <div>
                {!isEditPW && (
                  <div>
                    <button onClick={onClickToggle}>취소하기</button>
                    <button onClick={onClickEditBtn}>등록하기</button>
                  </div>
                )}
                {isEditPW && (
                  <div>
                    <button onClick={onClickReset}>취소하기</button>
                    <button onClick={onClickPasswordChange}>
                      비밀번호 바꾸기
                    </button>
                  </div>
                )}
              </div>
            )}
          </S.ButtonWrapperDiv>
        </S.ContentsBoxDiv>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default MyPageOverlay;
