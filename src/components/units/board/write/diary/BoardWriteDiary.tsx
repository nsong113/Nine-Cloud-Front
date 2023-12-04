import React, {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import * as S from './BoardWriteDiary.styles';
import { checkValidationFile } from 'src/components/commons/utills/imageValidation';
import { useNavigate } from 'react-router-dom';

const BoardWriteDiary = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [imgFile, setImgFile] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>('');
  const buttonRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  const [contents, setContents] = useState<string>('');
  // 2
  const onChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
        setImgFile(file);
        setIsActive(true);
      } else {
        setImgFile(null);
        setIsActive(true);
      }
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickButton = () => {
    buttonRef.current.click();
  };

  const onClickPrevPage = () => {
    navigate('/post');
  };

  const onClickSubmitBtn = () => {
    navigate('/main');
  };

  // 3
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
  return (
    <S.DiaryContainerDiv>
      <S.HeaderButtonBoxDiv>
        <S.AddEmotionButton>감정 등록하기</S.AddEmotionButton>
        <S.PlusDiaryButton>일기 작성하기</S.PlusDiaryButton>
      </S.HeaderButtonBoxDiv>
      <S.ContentsWrapperDiv>
        <h3>오늘을 대표하는 사진</h3>
        <S.ImageBoxDiv>
          <div>
            {!isActive && <S.PicutureImg src='/avatar.png' alt='엑박' />}
            {isActive && <S.PicutureImg src={preview as string} alt='엑박' />}
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
          <S.ImageButton onClick={onClickButton}>사진 추가</S.ImageButton>
        </S.ImagePlustButtonBox>
        <S.InputBoxDiv>
          <h3>오늘의 일기</h3>
          <S.InputDiv>
            <S.ContentsTextarea onChange={onChangeContents} />
            <S.InputFooterBoxDiv>
              <S.TextAreaCount>{contents.length}/200</S.TextAreaCount>
            </S.InputFooterBoxDiv>
          </S.InputDiv>
        </S.InputBoxDiv>
      </S.ContentsWrapperDiv>
      <S.FooterButtonBoxDiv>
        <S.PrevButton onClick={onClickPrevPage}>이전</S.PrevButton>
        <S.SubmitButton onClick={onClickSubmitBtn}>등록</S.SubmitButton>
      </S.FooterButtonBoxDiv>
    </S.DiaryContainerDiv>
  );
};

export default BoardWriteDiary;
