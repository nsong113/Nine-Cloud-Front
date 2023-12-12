import React, {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import * as S from './BoardWriteDiary.styles';
// import { checkValidationFile } from 'src/components/commons/utills/imageValidation';
import { useNavigate } from 'react-router-dom';
import { IoMdHeart, IoIosHeartHalf } from 'react-icons/io';
// import ConfrimModal from 'src/components/commons/modals/confirm/confirmModal';
import 'react-toggle/style.css';
import { IoIosCheckmark } from 'react-icons/io';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import AlertModal from 'src/components/commons/modals/alert/alertModal';
import FortuneCloudModal from 'src/components/commons/modals/fortuneCloud/FortuneCloudModal';

const BoardWriteDiary = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(true); //이걸로 나중에 점수 확 높히기
  const [contents, setContents] = useState<string>('');

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  //토글버튼
  setIsChecked;
  const onChangeToggleHandler = () => {
    setIsChecked(!isChecked);
  };

  //onClickNextBtn
  const onClickPrevPage = () => {
    navigate('/post');
  };
  const onClickNextBtn = () => {
    navigate('/post2');
  };

  console.log(isChecked);
  //로컬스토리지에 저장
  localStorage.setItem('contents', contents);

  useEffect(() => {
    if (isChecked === true) {
      const countAverage = localStorage.getItem('countAverage');
      if (countAverage) {
        const parsedValue = JSON.parse(countAverage);
        if (typeof parsedValue === 'string') {
          let plusAverage = Number(parsedValue) + 1;
          let newValue = plusAverage.toString();
          localStorage.setItem('countAverage', JSON.stringify(newValue));
        }
      }
    }
    if (isChecked === false) {
      const countAverage = localStorage.getItem('countAverage');
      if (countAverage) {
        const parsedValue = JSON.parse(countAverage);
        if (typeof parsedValue === 'string') {
          let plusAverage = Number(parsedValue) - 1;
          let newValue = plusAverage.toString();
          localStorage.setItem('countAverage', JSON.stringify(newValue));
        }
      }
    }
  }, [isChecked]);

  const onClickOpenFortune = () => {
    setIsModalOpen(true);
  };

  const goBackFortune = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <Animation2>
        {isModalOpen && <FortuneCloudModal goBackFortune={goBackFortune} />}
        <S.DiaryContainerDiv>
          <S.DiaryWrapperUPDiv>
            <S.HeaderButtonBoxDiv>
              <S.HeaderLine></S.HeaderLine>
              <S.HeaderFlexBox>
                <S.DoneCheckBox>
                  <IoIosCheckmark style={{ fontSize: '21px' }} />
                  <S.OneBlackSpan />
                </S.DoneCheckBox>
                <S.ThreeFilledSpan>Text</S.ThreeFilledSpan>
                <S.TwoBlankSpan />
              </S.HeaderFlexBox>
            </S.HeaderButtonBoxDiv>
          </S.DiaryWrapperUPDiv>
          <S.DiaryWrapperDOWNdiv>
            <S.ContentsWrapperDiv>
              <S.InputBoxDiv>
                <S.DiaryTitleDiv>
                  <S.DiaryWriteTitleH3>
                    오늘의 일기를 작성해보세요
                  </S.DiaryWriteTitleH3>
                  <S.TextAreaCount>{contents.length}/200</S.TextAreaCount>
                </S.DiaryTitleDiv>
                <S.InputDiv>
                  <S.ContentsTextarea onChange={onChangeContents} />
                  <S.InputFooterBoxDiv></S.InputFooterBoxDiv>
                </S.InputDiv>
              </S.InputBoxDiv>
              <S.FortuneContainer>
                <S.FortuneFlexWrapper>
                  <img
                    src={'/cookie.png'}
                    alt='fortune cookie'
                    style={cookieStyle}
                  />
                  <S.FortuneBox>
                    <S.FortuneP>
                      오늘의 글그,,, 어쩌구를 <br />
                      뽑아주세요
                    </S.FortuneP>
                    <S.FortuneGoDiv onClick={onClickOpenFortune}>
                      포춘 클라우드 뽑기
                    </S.FortuneGoDiv>
                  </S.FortuneBox>
                </S.FortuneFlexWrapper>
              </S.FortuneContainer>
              <S.DiaryToggleTitleDiv>
                <S.DiaryToggleP>오늘 하루 만족 하시나요?</S.DiaryToggleP>
                {/* <label htmlFor='customToggle'> */}
                <S.CustomToggle
                  id='customToggle'
                  checked={isChecked}
                  icons={{
                    checked: <IoMdHeart />,
                    unchecked: <IoIosHeartHalf />,
                  }}
                  onChange={onChangeToggleHandler}
                />
                {/* </label> */}
              </S.DiaryToggleTitleDiv>
            </S.ContentsWrapperDiv>

            <S.FooterButtonBoxDiv>
              <S.PrevButton onClick={onClickPrevPage}>이전</S.PrevButton>
              <S.NextButton onClick={onClickNextBtn}>다음</S.NextButton>
            </S.FooterButtonBoxDiv>
          </S.DiaryWrapperDOWNdiv>
        </S.DiaryContainerDiv>
      </Animation2>
    </div>
  );
};

export default BoardWriteDiary;

const cookieStyle = {
  transform: 'scale(0.6)',
};
