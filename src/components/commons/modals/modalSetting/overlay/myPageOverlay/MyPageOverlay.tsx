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
import { editMyInfo, getMyInfo } from 'src/apis/cheolmin-api/apis';
import axios from 'axios';

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
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const [newPassoword, setNewPassword] = useState('');

  const onChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setSelectedImage(event.target.files?.[0]);
      const file = event.target.files[0];

      // if (file && file.type.substring(0, 5) === 'image') {
      //   setImgFile(file);
      //   setIsActive(true);
      // } else {
      //   setImgFile(null);
      //   setIsActive(false);
      // }

      // console.log('file', file);
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
      password,
      newPassoword,
    };

    editMypageMutation.mutate(newProfile);

    navigate('/main');
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

  console.log('newPassword', newPassoword);

  return (
    <S.ContainerDiv onClick={onOk} className='modal'>
      <S.ModalContentDiv onClick={onClickModalDiv}>
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
                <S.ImageButton onClick={onClickButton}>사진 수정</S.ImageButton>
              )}
            </S.ImagePlustButtonBox>
            <S.ContentsBoxDIv>
              <S.NameBoxDiv>
                <div>
                  {!isEdit && (
                    <S.MyinfoBoxDiv>
                      <span>닉네임 : {data?.data.username} </span>
                      <span>이메일 : {data?.data.email}</span>
                    </S.MyinfoBoxDiv>
                  )}
                </div>
                {isEdit && (
                  <div>
                    <span>새로운 비번</span>
                    <S.NicknameInput
                      onChange={onChangeNewPassword}
                      type='password'
                    />
                    <span>원래 비번</span>
                    <S.NicknameInput
                      onChange={onChangePassword}
                      type='password'
                    />
                    <span>넥니엠</span>
                    <S.NicknameInput onChange={onChangeUsername} type='text' />
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
                <button onClick={onOk}>메인으로</button>
                <button onClick={onClickToggle}>수정하기</button>
              </div>
            )}
            {isEdit && (
              <div>
                <button onClick={onClickToggle}>취소하기</button>
                <button onClick={onClickEditBtn}>등록하기</button>
              </div>
            )}
          </S.ButtonWrapperDiv>
        </S.ContentsBoxDiv>
      </S.ModalContentDiv>
    </S.ContainerDiv>
  );
};

export default MyPageOverlay;
