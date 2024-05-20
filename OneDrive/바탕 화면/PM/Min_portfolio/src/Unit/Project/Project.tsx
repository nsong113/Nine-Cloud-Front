import { useState } from 'react';
import { ScrollAnimationContainer } from '../ScrollAnimation/ScrollAnimationContainer';
import * as S from './Project.styles';
import NineCloudModal from '../Modal/NineCloud/NineCloudModal';
import BUSU from '../Modal/BUSU/BUSU';
import Instagram from '../Modal/Instagram/Instagram';
import Portfolio from '../Modal/Portfolio/Portfoilo';

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const [isThirdHovered, setIsThirdHovered] = useState(false);
  const [isFourthHovered, setIsFourthHovered] = useState(false);
  const [isFirstImage, setIsFirstImage] = useState(false);
  const [isSecondImage, setIsSecondImage] = useState(false);
  const [isThirdImage, setIsThirdImage] = useState(false);
  const [isFourthImage, setIsFourthImage] = useState(false);

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

  return (
    <S.Container>
      {isFirstImage && <NineCloudModal onCloseModal={onClickFirstImg} />}
      {isSecondImage && <BUSU onCloseModal={onClickSecondImg} />}
      {isThirdImage && <Instagram onCloseModal={onClickThirdImg} />}
      {isFourthImage && <Portfolio onCloseModal={onClickFourthImg} />}
      <S.TextBox>
        <S.FirstLineTextBox>
          <ScrollAnimationContainer>
            <S.FirstText> 저는 ____를 만들었습니다.</S.FirstText>
          </ScrollAnimationContainer>
        </S.FirstLineTextBox>
      </S.TextBox>
      <S.ProjectBox>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>01 </S.Numbering>
              <S.TitleSpan color='#391D93'>Nine Cloud</S.TitleSpan>
              <S.SubTitleSpan>AI 솔루션 감정 일기 </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onClick={onClickFirstImg}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              src={isHovered ? '/nine-cloud.png' : '/NineCloudBlack.png'}
              alt='나인클라우드'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>02 </S.Numbering>
              <S.TitleSpan color='#FF6A6A'>BUSU</S.TitleSpan>
              <S.SubTitleSpan>중고상품 커뮤니티</S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onClick={onClickSecondImg}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              src={isSecondHovered ? '/BUSUc.png' : '/BUSUb.png'}
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
              <S.TitleSpan>Portfoilo</S.TitleSpan>
              <S.SubTitleSpan>포트폴리오 사이트 </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onClick={onClickFourthImg}
              src={isFourthHovered ? '/portfolioC.png' : '/portfolioB.png'}
              alt='instagram logo'
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>04 </S.Numbering>
              <S.TitleSpan color='#E537C9'>LOADING ... </S.TitleSpan>
              <S.SubTitleSpan>앞으로 제작 될 사이트 </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onClick={onClickThirdImg}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              src={isThirdHovered ? '/LoadingC.png' : '/LoadingB.png'}
              alt='instagram logo'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </S.ProjectBoxDiv>
        <div></div>
        <div></div>
      </S.ProjectBox>
    </S.Container>
  );
};

export default Project;
