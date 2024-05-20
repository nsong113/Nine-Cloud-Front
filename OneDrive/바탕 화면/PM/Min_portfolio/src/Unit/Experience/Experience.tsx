import { useState } from 'react';
import * as S from './Experience.styles';
import WorldForum from '../Modal/WorldForum/WorldForum';
import YouthForum from '../Modal/YouthForum/YouthForum';
import Kistep from '../Modal/KISTEP/Kistep';
import Epis from '../Modal/EPIS/Epis';

const Experience = () => {
  const [isWorldForum, setIsWorldForum] = useState(false);
  const [isYouthForum, setIsYouthForum] = useState(false);
  const [isKistep, setIsKistep] = useState(false);
  const [isEpis, setIsEpis] = useState(false);
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
    setIsWorldForum((prev) => !prev);
  };

  const onClickSecondImg = () => {
    setIsYouthForum((prev) => !prev);
  };

  const onClickThirdImg = () => {
    setIsEpis((prev) => !prev);
  };

  const onClickFourthImg = () => {
    setIsKistep((prev) => !prev);
  };

  return (
    <S.Container>
      {isWorldForum && <WorldForum onCloseModal={onClickFirstImg} />}
      {isYouthForum && <YouthForum onCloseModal={onClickSecondImg} />}
      {isKistep && <Kistep onCloseModal={onClickFourthImg} />}
      {isEpis && <Epis onCloseModal={onClickThirdImg} />}
      <S.TextBox>
        <S.FirstLineTextBox>
          <S.TextStyle> 저는 ____를 </S.TextStyle>
          <S.FirstText> 경험 </S.FirstText> <S.TextStyle>했습니다.</S.TextStyle>
        </S.FirstLineTextBox>
      </S.TextBox>
      <S.ProjectBox>
        <S.ProjectBoxDiv>
          <S.TitleAndNumberBox>
            <S.TitleAndNumber>
              <S.Numbering>01 </S.Numbering>
              <S.TitleSpan color='#5D35FE'>2022 ICH World Forum</S.TitleSpan>
              <S.SubTitleSpan>포럼 홈페이지 제작 업무 참여 </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={onClickFirstImg}
              src={isHovered ? '/ICHWORLDFORUM.png' : '/BLACKICHWORLDFORUM.png'}
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
              <S.TitleSpan color='#6952B5'>2022 ICH Youth Forum</S.TitleSpan>
              <S.SubTitleSpan>ZEP 맵 기획 및 운영</S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              onClick={onClickSecondImg}
              src={
                isSecondHovered ? '/ICHYOUTHFORUM.png' : '/BICHYOUTHFORUM.png'
              }
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
              <S.TitleSpan color='#6952B5'>EPIS Intern</S.TitleSpan>
              <S.SubTitleSpan>사회적 기업 홍보 컨텐츠 제작 </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              onClick={onClickThirdImg}
              src={isThirdHovered ? '/EPIS.png' : '/BlackEPIS.png'}
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
              <S.TitleSpan color='#FF0707'>KISTEP</S.TitleSpan>
              <S.SubTitleSpan>컨텐츠 기획 및 제작 </S.SubTitleSpan>
            </S.TitleAndNumber>
          </S.TitleAndNumberBox>
          <div>
            <S.ProjectImg
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              onClick={onClickFourthImg}
              src={isFourthHovered ? '/KISTEP.png' : '/BKISTEP.png'}
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

export default Experience;
