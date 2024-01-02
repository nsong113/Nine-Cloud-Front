import React, { useState } from 'react';
import * as S from './BoardWriteDiary.styles';
import { useNavigate } from 'react-router-dom';
import 'react-toggle/style.css';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import FortuneCloudModal from 'src/components/commons/modals/fortuneCloud/FortuneCloudModal';
import ReactQuill from 'react-quill';
import './Quill.snow.css';
import { useRecoilState } from 'recoil';
import { contents, sentence } from 'src/states/counter';
import PostBtn from 'src/components/commons/utills/PostBtn/PostBtn';
import PostUpperWrapper from '../PostUpperWrapper';

const BoardWriteDiary = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [contentNow, setContentNow] = useState<string>('');
  const [contentsToday, setContentsToday] = useRecoilState<string>(contents);
  const [sentenceAtom, setSentence] = useRecoilState(sentence);
  const [validate, setValidate] = useState(true);
  const [alreadyTook, setAlreadyTook] = useState('');

  const maxCharacters = 200;

  const onChangeContents = (value: string) => {
    const strippedValue = value.replace(/<[^>]*>/g, '');
    setContentNow(strippedValue);

    if (strippedValue.length <= maxCharacters) {
      setContentsToday(value);
    } else {
      setContentsToday((prev) => prev);
      return;
    }
  };

  const onClickPrevPage = () => navigate('/post');

  const onClickNextPageBtn = () => {
    if (contentsToday) navigate('/post2');
    if (!contentsToday) setValidate(false);
  };

  const onClickOpenFortune = () => {
    if (sentenceAtom) {
      setAlreadyTook(
        '오늘 이미 포춘 클라우드를 뽑았습니다! 내일 다시 뽑아주세요'
      );
    } else {
      setIsModalOpen(true);
    }
  };

  const goBackFortune = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Animation2>
        {isModalOpen && <FortuneCloudModal goBackFortune={goBackFortune} />}
        <S.DiaryContainerDiv>
          <PostUpperWrapper
            first={'checked'}
            firstWord={'Emotion'}
            second={'now'}
            secondWord={'Text'}
            third={'yet'}
            thirdWord={'Drawing'}
            progress={'75px'}
          />
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
                    value={contentsToday.substring(0, 200)}
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
                  {/* eslint-disable */}
                  <img
                    src={'/fortune_final.png'}
                    alt='fortune cookie'
                    style={cookieStyle}
                    onClick={onClickOpenFortune}
                  />
                  {/* eslint-enable */}
                  <S.FortuneBox>
                    <S.FortuneGoDiv onClick={onClickOpenFortune}>
                      열어보기
                    </S.FortuneGoDiv>

                    {!sentenceAtom && (
                      <S.FortuneP>
                        포춘 클라우드는 하루에 한 번만 뽑을 수 있어요.
                      </S.FortuneP>
                    )}

                    {sentenceAtom && <S.FortuneP>{sentenceAtom}</S.FortuneP>}
                    <S.AlreadyTookFortune>{alreadyTook}</S.AlreadyTookFortune>
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
