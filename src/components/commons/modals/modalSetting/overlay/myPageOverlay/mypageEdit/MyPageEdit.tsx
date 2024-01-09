import React, {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './MyPageEdit.styles';
import { checkValidationFile } from 'src/components/commons/utills/imageValidation';
import alertUnit from 'src/components/commons/utills/Alert/alertUnit';
import { useMutation, useQueryClient } from 'react-query';
import { editMyInfo } from 'src/apis/cheolmin-api/apis';
import { useNavigate } from 'react-router-dom';
import { IMyPageEdit, IMyPost } from './MyPageEdit.types';
const MyPageEdit: React.FC<IMyPageEdit> = ({ data, setIsEdit }) => {
  const [selectedImage, setSelectedImage] = useState<string | File>('');
  const buttonRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [preview, setPreview] = useState<string | null>('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState<File | null>();
  const [username, setUsername] = useState(data?.data.username);
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

  const onClickButton = () => {
    buttonRef.current.click();
  };
  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event?.target.value);
  };

  const onClickToggle = () => {
    setIsEdit((prev) => !prev);
  };

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

  const editMypageMutation = useMutation(editMyInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('myInfo');
      setIsEdit((prev) => !prev);
    },
    onError: () => {
      alert('에러입니다');
    },
  });

  return (
    <S.ContentsBoxDiv>
      <S.ProfileTitleSpan>프로필 수정</S.ProfileTitleSpan>
      <S.HeaderWrapperDiv></S.HeaderWrapperDiv>
      <S.ContentsWrapperDiv>
        <S.ImageBoxDiv>
          <S.ProfileImg src={preview || data?.data.profileImg} alt='엑박' />
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
        </S.ImagePlustButtonBox>
        <S.ContentsBoxDiv>
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
        </S.ContentsBoxDiv>
      </S.ContentsWrapperDiv>
      <S.ButtonWrapperDiv>
        <S.ButtonDiv>
          <S.CancelButton onClick={onClickToggle}>취소</S.CancelButton>
          <S.SubmitButton onClick={onClickEditBtn}>등록하기</S.SubmitButton>
        </S.ButtonDiv>
      </S.ButtonWrapperDiv>
    </S.ContentsBoxDiv>
  );
};

export default MyPageEdit;
