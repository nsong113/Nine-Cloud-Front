import React, {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import * as S from './BoardWriteDiary.styles';
import { useNavigate } from 'react-router-dom';
import { IoMdHeart, IoIosHeartHalf } from 'react-icons/io';
import 'react-toggle/style.css';
import { IoIosCheckmark } from 'react-icons/io';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import AlertModal from 'src/components/commons/modals/alert/alertModal';
import FortuneCloudModal from 'src/components/commons/modals/fortuneCloud/FortuneCloudModal';
import { FaCheck } from 'react-icons/fa6';
import ReactQuill from 'react-quill';
import './Quill.snow.css';

const BoardWriteDiary = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(true); //이걸로 나중에 점수 확 높히기
  const [contents, setContents] = useState<string>('');
  const [todayRandomSaying, setTodayRandomSaying] = useState('');

  // const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
  // // const onChangeContents = (event: any) => {
  //   if (event.target.value.length < 201) {
  //     setContents(event.target.value);
  //   }
  // };

  const onChangeContents = (value: string) => {
    setContents(value === '<p><br></p>' ? '' : value);
    if (contents.length > 199) {
      alert('200자 이상 입력 불가합니다');
      return;
    }
  };

  //
  let existedSentence: string | null = localStorage.getItem('sentence');

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
    if (existedSentence) {
      alert('오늘 이미 포춘 클라우드를 뽑았습니다! 내일 다시 뽑아주세요');
    }
  };

  const goBackFortune = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <Animation2>
        {!existedSentence && isModalOpen && (
          <FortuneCloudModal
            goBackFortune={goBackFortune}
            todayRandomSaying={todayRandomSaying}
            setTodayRandomSaying={setTodayRandomSaying}
          />
        )}
        <S.DiaryContainerDiv>
          <S.DiaryWrapperUPDiv>
            <S.HeaderButtonBoxDiv>
              <S.HeaderLineDone></S.HeaderLineDone>
              <S.HeaderLine></S.HeaderLine>
              <S.HeaderFlexBox>
                <S.SelectBox>
                  <FaCheck
                    style={{
                      position: 'absolute',
                      zIndex: '17',
                      color: '#5035A6',
                    }}
                  />
                  <S.OneBlackSpan />
                  <S.SelectP2>Emotion</S.SelectP2>
                </S.SelectBox>
                <S.SelectBox>
                  <S.ThreeFilledSpan></S.ThreeFilledSpan>
                  <S.SelectP>Text</S.SelectP>
                </S.SelectBox>
                <S.SelectBox>
                  <S.OneBlackSpan />
                  <S.SelectP3>Drawing</S.SelectP3>
                </S.SelectBox>
              </S.HeaderFlexBox>
            </S.HeaderButtonBoxDiv>
          </S.DiaryWrapperUPDiv>
          <S.DiaryWrapperDOWNdiv>
            <S.ContentsWrapperDiv>
              <S.InputBoxDiv>
                <S.DiaryTitleDiv>
                  <S.DiaryWriteTitleH3>
                    오늘의 <S.DiarySpan>일기</S.DiarySpan>를 작성해보세요!
                  </S.DiaryWriteTitleH3>
                  <S.TextAreaCount>{contents.length}/200</S.TextAreaCount>
                </S.DiaryTitleDiv>
                <S.InputDiv>
                  {/* //////////////////////// */}

                  <ReactQuill
                    theme='snow'
                    style={ReactQuillStyle}
                    onChange={onChangeContents}
                    defaultValue={contents}
                    modules={quillModules}
                    placeholder='정성스럽게 마음일기를 적어주실 수록 디테일한 AI 감정 솔루션을 받아볼 수 있어요!'
                  />
                  {/* <S.ContentsTextarea
                    onChange={onChangeContents}
                    value={contents}
                  /> */}
                  <S.InputFooterBoxDiv></S.InputFooterBoxDiv>
                </S.InputDiv>
              </S.InputBoxDiv>
              <S.DiaryWriteTitleH3 style={{ transform: 'translateX(-55px)' }}>
                오늘의 <S.DiarySpan>포춘쿠키</S.DiarySpan>를 뽑아보세요!
              </S.DiaryWriteTitleH3>
              <S.FortuneContainer>
                <S.FortuneFlexWrapper>
                  <img
                    src={'/cookie.png'}
                    alt='fortune cookie'
                    style={cookieStyle}
                  />
                  <S.FortuneBox>
                    <S.FortuneGoDiv onClick={onClickOpenFortune}>
                      열어보기
                    </S.FortuneGoDiv>

                    {!todayRandomSaying && !existedSentence && (
                      <S.FortuneP>
                        포춘 클라우드는 하루에 한 번만 뽑을 수 있어요.
                      </S.FortuneP>
                    )}

                    {(todayRandomSaying || existedSentence) && (
                      <S.FortuneP>
                        {todayRandomSaying || existedSentence}
                      </S.FortuneP>
                    )}
                    {/* {existedSentence && (
                      <S.FortuneP>{existedSentence}</S.FortuneP>
                    )} */}
                  </S.FortuneBox>
                </S.FortuneFlexWrapper>
              </S.FortuneContainer>
              {/* <S.DiaryToggleTitleDiv> */}
              {/* <S.DiaryToggleP>
                  오늘 하루
                  <S.DiarySpan> 만족 </S.DiarySpan>
                  하시나요?
                </S.DiaryToggleP> */}
              {/* <S.CustomToggle
                  id='customToggle'
                  checked={isChecked}
                  icons={{
                    checked: <IoMdHeart />,
                    unchecked: <IoIosHeartHalf />,
                  }}
                  onChange={onChangeToggleHandler}
                /> */}
              {/* </label> */}
              {/* </S.DiaryToggleTitleDiv> */}
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
  width: '40%',
  transform: 'scale(0.7)',
};

const quillModules = {
  toolbar: [
    // [{ size: ['small', false, 'large', 'huge'] }], // 글꼴 크기
    ['italic', 'underline', 'strike'], // 글자 스타일
    // ['blockquote', 'code-block'], // 인용구 및 코드 블록
    // [{ header: 1 }, { header: 2 }], // 헤더
    // [{ list: 'ordered' }, { list: 'bullet' }], // 순서 있는 목록 및 순서 없는 목록
    // [{ script: 'sub' }, { script: 'super' }], // 아래 첨자 및 위 첨자
    // [{ indent: '-1' }, { indent: '+1' }], // 들여쓰기
    // [{ direction: 'rtl' }], // 오른쪽에서 왼쪽으로 작성
    // [{ header: [1, 2, 3, 4, 5, 6, false] }], // 헤더 크기
    // [{ font: [] }], // 글꼴
    // [{ color: [] }, { background: [] }], // 글자색 및 배경색
    [{ align: [] }], // 정렬
    // ['clean'], // 포맷 제거
    // ['link', 'image', 'video'], // 링크, 이미지, 동영상 삽입
  ],
};

const ReactQuillStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  margin: '0 auto',
  fontSize: '15px',
  borderRadius: '10px',

  // border: '1px solid rgba(239, 170, 173, 0.7) !important',
  zIndex: '100',
  background: '#F5F2FF',
  boxShadow: '0px 4px 20px 0px rgba(80, 53, 166, 0.10) inset',
  backdropFilter: 'blur(15px)',

  // '& .ql-editor': {
  //   border: '1px solid rgba(239, 170, 173, 0.7)',
  // },
};
