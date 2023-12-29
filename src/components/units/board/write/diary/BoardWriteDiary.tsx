import React, { useEffect, useRef, useState } from 'react';
import * as S from './BoardWriteDiary.styles';
import { useNavigate } from 'react-router-dom';
import 'react-toggle/style.css';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import FortuneCloudModal from 'src/components/commons/modals/fortuneCloud/FortuneCloudModal';
import { FaCheck } from 'react-icons/fa6';
import ReactQuill from 'react-quill';
import './Quill.snow.css';
import { useRecoilState } from 'recoil';
import { contents } from 'src/states/counter';
import PostBtn from 'src/components/commons/utills/PostBtn/PostBtn';

const BoardWriteDiary = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [contentNow, setContentNow] = useState<string>('');
  const [contentsToday, setContentsToday] = useRecoilState<string>(contents);

  const [todayRandomSaying, setTodayRandomSaying] = useState('');
  let existedSentence: string | null = localStorage.getItem('sentence');

  const [validate, setValidate] = useState(true);
  // const quillRef = useRef();

  const maxCharacters = 200;

  const onChangeContents = (value: string) => {
    // setContentsToday(value === '<p><br></p>' ? '' : value);
    const strippedValue = value.replace(/<[^>]*>/g, '');
    setContentNow(strippedValue);

    if (strippedValue.length <= maxCharacters) {
      setContentsToday(value);
      console.log('200자 작음');
    }

    if (strippedValue.length > maxCharacters) {
      setContentsToday((prev) => prev);
      console.log('200자 넘음');
      alert('200자까지 입력 가능합니다.');
      return;
    }
  };

  // const handleChange = (value: string) => {};

  const onClickPrevPage = () => {
    navigate('/post');
  };
  const onClickNextPageBtn = () => {
    if (contentsToday) {
      navigate('/post2');
    }
    if (!contentsToday) {
      setValidate(false);
    }
  };

  localStorage.setItem('sentence', todayRandomSaying);

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
                  <S.TextAreaCount>{contentNow.length}/200</S.TextAreaCount>
                </S.DiaryTitleDiv>
                <S.InputDiv>
                  <ReactQuill
                    theme='snow'
                    style={ReactQuillStyle}
                    onChange={(e) => {
                      onChangeContents(e);
                    }}
                    defaultValue={contentsToday}
                    modules={quillModules}
                    placeholder='정성스럽게 마음일기를 적어주실 수록 디테일한 AI 감정 솔루션을 받아볼 수 있어요!'
                  />
                  <S.InputFooterBoxDiv></S.InputFooterBoxDiv>
                </S.InputDiv>
              </S.InputBoxDiv>
              <S.DiaryWriteTitleH3 style={{ transform: 'translateX(-55px)' }}>
                오늘의 <S.DiarySpan>포춘쿠키</S.DiarySpan>를 뽑아보세요!
              </S.DiaryWriteTitleH3>
              <S.FortuneContainer>
                <S.FortuneFlexWrapper>
                  <img
                    src={'/fortune_final.png'}
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
                  </S.FortuneBox>
                </S.FortuneFlexWrapper>
              </S.FortuneContainer>
            </S.ContentsWrapperDiv>
            <S.Validate color={contentsToday} fontColor={validate}>
              일기를 작성해야 다음 페이지로 넘어갈 수 있어요.
            </S.Validate>
            <PostBtn
              onClickPrevPage={onClickPrevPage}
              onClickNextPageBtn={onClickNextPageBtn}
              page={'write'}
            />
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
    ['italic', 'underline', 'strike'], // 글자 스타일
    [{ align: [] }], // 정렬
  ],
};

const ReactQuillStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  margin: '0 auto',
  fontSize: '15px',
  borderRadius: '10px',
  zIndex: '100',
  background: '#F5F2FF',
  boxShadow: '0px 4px 20px 0px rgba(80, 53, 166, 0.10) inset',
  backdropFilter: 'blur(15px)',
};
