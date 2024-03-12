/* eslint-disable */
import * as S from './Introduction.style';
import { ScrollAnimationContainer } from '../ScrollAnimation/ScrollAnimationContainer';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import { useState } from 'react';

interface IProps {
  isActiveFireWork: boolean;
  setIsActiveFireWork: React.Dispatch<React.SetStateAction<boolean>>;
}

const canvasStyles: React.CSSProperties = {
  position: 'fixed',
  width: '800px',
  height: '100vh',
  zIndex: '3',
};

const Introduction: React.FC<IProps> = ({ isActiveFireWork }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const decorateOptions = (originalOptions: any) => {
    return {
      ...originalOptions,
      particleCount: 300,
      spread: 300,
      startVelocity: 50,
      angle: -20,
      ticks: 200,
      origin: { x: -0.2, y: 0.3 },
      shapes: ['circle', 'circle', 'square'],
      color: ['red'],
      gravity: 0.5,
    };
  };
  return (
    <S.Container>
      {isActiveFireWork && (
        <Fireworks
          autorun={{ speed: 0.1, duration: 500 }}
          style={canvasStyles}
          decorateOptions={decorateOptions} // 함수 실행을 위해 괄호를 추가
        />
      )}
      <S.TextBox>
        <S.SecondText>안녕하세요.</S.SecondText>
        <S.FirstLineTextBox>
          <ScrollAnimationContainer>
            <S.HightLightText>돌파하는</S.HightLightText>
          </ScrollAnimationContainer>
        </S.FirstLineTextBox>
        <S.SecondText>개발자 주철민 입니다.</S.SecondText>
      </S.TextBox>

      <S.ProfileImg
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={isHovered ? '/JJC.png' : '/JJB.png'}
        alt='프로필이미지'
      />
    </S.Container>
  );
};
export default Introduction;
