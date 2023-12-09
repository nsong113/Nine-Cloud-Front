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

const MyPageOverlay: React.FC<IMyPage> = ({ onOk }) => {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState<File | null>();
  const [isActive, setIsActive] = useState<boolean>(false);
  const buttonRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [preview, setPreview] = useState<string | null>(''); // Default preview state

  const onChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
        setImgFile(file);
        setIsActive(true);
      } else {
        setImgFile(null);
        setIsActive(false);
      }
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

  const [isEdit, setIsEdit] = useState(false);

  const onClickModalDiv = (e: any) => {
    e.stopPropagation();
  };

  const onClickEditBtn = () => {
    setIsEdit((prev) => !prev);
    if (isEdit && imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        localStorage.setItem('image', result);
      };
      reader.readAsDataURL(imgFile);
    }
    navigate('/main');
  };

  const profileImage = localStorage.getItem('image');

  const onClickButton = () => {
    buttonRef.current.click();
  };

  return (
    <S.ContainerDiv onClick={onOk} className='modal'>
      <S.ModalContentDiv onClick={onClickModalDiv}>
        <S.ContentsBoxDiv>
          <S.HeaderWrapperDiv></S.HeaderWrapperDiv>
          <S.ContentsWrapperDiv>
            <h3>마이프로필</h3>
            <S.ImageBoxDiv>
              <div>
                {!isActive && (
                  <S.PicutureImg
                    src={profileImage || '/avatar.png'}
                    alt='엑박'
                  />
                )}
                {isActive && (
                  <S.PicutureImg src={preview as string} alt='엑박' />
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
                  <span>닉네임 : </span>
                  {!isEdit && <span>주철민 </span>}
                </div>
                {isEdit && <S.NicknameInput type='text' />}
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
                <button onClick={onClickEditBtn}>수정하기</button>
              </div>
            )}
            {isEdit && (
              <div>
                <button onClick={onClickEditBtn}>취소하기</button>
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
