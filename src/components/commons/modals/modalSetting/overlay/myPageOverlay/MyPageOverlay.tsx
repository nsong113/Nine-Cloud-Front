import React, {
  ChangeEvent,
  useEffect,
  useState,
  MutableRefObject,
  useRef,
  MouseEvent,
} from 'react';
import { IMyPage, IMyPost } from './MyPageOverlay.types';
import * as S from './MyPageOverlay.styles';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Swal from 'sweetalert2';
import { editMyInfo, getMyInfo } from 'src/apis/cheolmin-api/apis';
import axiosInstance from 'src/apis/loginapi';
import { checkValidationFile } from 'src/components/commons/utills/imageValidation';
import alertUnit from 'src/components/commons/utills/Alert/alertUnit';
import Portal from 'src/components/commons/utills/Portal/Portal';
import DeleteOverlay from '../deleteOverlay/DeleteOverlay';

const MyPageOverlay: React.FC<IMyPage> = ({ onOk, isActiveModal }) => {
  const queryClient = useQueryClient();
  const { data } = useQuery('myInfo', getMyInfo);

  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState<File | null>();
  const buttonRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [preview, setPreview] = useState<string | null>('');
  const [selectedImage, setSelectedImage] = useState<string | File>('');
  const [username, setUsername] = useState(data?.data.username);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
      if (checkValidationFile(file) === false) {
        return;
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === 'string')
          setPreview(event.target?.result);
      };
    }
  };

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

  const onClickModalDiv = (e: MouseEvent<HTMLDivElement>) => {
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
    const nameCheck = /^[가-힣a-zA-Z0-9]{2,10}$/;

    if (username.length < 2) {
      alertUnit(
        '<span style="font-size: 20px; font-weight : bolder;"> 두 글자 이상 닉네임만 사용 가능합니다.</span>'
      );
      return;
    }

    if (!nameCheck.test(username)) {
      alertUnit(
        '<span style="font-size: 20px; font-weight : bolder;"> 자음 또는 모음으로만 구성된 닉네임은</span> </br><span style="font-size: 20px; font-weight : bolder;">사용 불가능 합니다.</span>'
      );
      return;
    }

    const myPost: IMyPost = {};
    if (username) myPost.username = username;
    if (selectedImage !== undefined) myPost.selectedImage = selectedImage;
    editMypageMutation.mutate(myPost);

    navigate('/main');
  };

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
            <DeleteOverlay onOk={onClickUnRegister} onClose={onClickOpenModal} />
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
            {isEdit && <S.ProfileTitleSpan>프로필 수정</S.ProfileTitleSpan>}
            <S.HeaderWrapperDiv></S.HeaderWrapperDiv>
            <S.ContentsWrapperDiv>
              <S.ImageBoxDiv>
                <S.ImageBoxDiv>
                  <S.PicutureImg
                    src={preview || data?.data.profileImg}
                    alt='엑박'
                    isEdit={isEdit}
                  />
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
                    <S.StyledHoverTapButton
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <S.ImageButton onClick={onClickButton}>
                        사진 불러오기
                      </S.ImageButton>
                    </S.StyledHoverTapButton>
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
                          defaultValue={data?.data.username}
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
    </Portal>
  );
};
export default MyPageOverlay;
