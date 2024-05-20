/* eslint-disable */
import { useState } from 'react';
import * as S from './Cheolmin.styles';
import Velog from '../Modal/Velog/Velog';
import UserTest from '../Modal/UserTest/UserTest';
import Together from '../Modal/Together/Together';
import Challenge from '../Modal/Challenge/Challenge';
import { ScrollAnimationContainer } from '../ScrollAnimation/ScrollAnimationContainer';

const Cheolmin = () => {
  const [isFirstImage, setIsFirstImage] = useState(false);
  const [isSecondImage, setIsSecondImage] = useState(false);
  const [isThirdImage, setIsThirdImage] = useState(false);
  const [isFourthImage, setIsFourthImage] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const [isThirdHovered, setIsThirdHovered] = useState(false);
  const [isFourthHovered, setIsFourthHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter2 = () => {
    setIsSecondHovered(true);
  };

  const handleMouseLeave2 = () => {
    setIsSecondHovered(false);
  };

  const handleMouseEnter3 = () => {
    setIsThirdHovered(true);
  };

  const handleMouseLeave3 = () => {
    setIsThirdHovered(false);
  };

  const handleMouseEnter4 = () => {
    setIsFourthHovered(true);
  };

  const handleMouseLeave4 = () => {
    setIsFourthHovered(false);
  };

  const onClickFirstImg = () => {
    setIsFirstImage((prev) => !prev);
  };

  const onClickSecondImg = () => {
    setIsSecondImage((prev) => !prev);
  };

  const onClickThirdImg = () => {
    setIsThirdImage((prev) => !prev);
  };

  const onClickFourthImg = () => {
    setIsFourthImage((prev) => !prev);
  };

  return (
    <S.Container>
      {isFirstImage && <Velog onCloseModal={onClickFirstImg} />}
      {isSecondImage && <UserTest onCloseModal={onClickSecondImg} />}
      {isThirdImage && <Together onCloseModal={onClickThirdImg} />}
      {isFourthImage && <Challenge onCloseModal={onClickFourthImg} />}
      <S.TextBox>
        <S.FirstLineTextBox>
          <ScrollAnimationContainer>
            <S.FirstText> 저는 ____ 하는 사람입니다. </S.FirstText>
          </ScrollAnimationContainer>
        </S.FirstLineTextBox>
      </S.TextBox>
      <S.ProjectBox>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>01 </S.Numbering>
              <S.TitleSpan color='#A1248D'>"꾸준히"</S.TitleSpan>
              <S.SubTitleSpan>
                주 5회 TIL , 93번의 런닝{' '}
              </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={onClickFirstImg}
              src={isHovered ? '/velog.png' : '/BVelog.png'}
              alt='포럼'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>02 </S.Numbering>
              <S.TitleSpan color='#4B37C4'>"UX 관점에서 접근"</S.TitleSpan>
              <S.SubTitleSpan>구글폼을 통해 사용자 테스트 진행</S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              onClick={onClickSecondImg}
              src={isSecondHovered ? '/userTest.png' : '/BlackUserTest.png'}
              alt='BUSU Logo'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>03 </S.Numbering>
              <S.TitleSpan color='#2438A1'>"다 같이 함께"</S.TitleSpan>
              <S.SubTitleSpan>99일, 4개의 팀 프로젝트 </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              onClick={onClickThirdImg}
              src={isThirdHovered ? '/togetherC.png' : '/togetherB.png'}
              alt='instagram logo'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>04 </S.Numbering>
              <S.TitleSpan>"성장"</S.TitleSpan>
              <S.SubTitleSpan>
                익숙한 것과 새로운 것의 조화 추구{' '}
              </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              onClick={onClickFourthImg}
              src={isFourthHovered ? '/growth.png' : '/BlackGrowth.png'}
              alt='instagram logo'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
      </S.ProjectBox>
    </S.Container>
  );
};

export default Cheolmin;
