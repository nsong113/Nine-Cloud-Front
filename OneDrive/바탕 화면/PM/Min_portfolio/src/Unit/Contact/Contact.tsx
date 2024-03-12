/* eslint-disable */
import { useEffect } from 'react';
import { ScrollAnimationContainer } from '../ScrollAnimation/ScrollAnimationContainer';
import * as S from './Contact.styles';
import Animation3 from '../Animation/Animation3';

interface IProps {
  isActiveFireWork: boolean;
  setIsActiveFireWork: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact: React.FC<IProps> = ({
  isActiveFireWork,
  setIsActiveFireWork,
}) => {

  useEffect(() => {
    if (isActiveFireWork) {
      const timeoutId = setTimeout(() => {
        setIsActiveFireWork(false);
      }, 10000);
      return () => clearTimeout(timeoutId);
    }
  }, [isActiveFireWork]);


  return (
    <S.Container>
      <Animation3>
        <S.TextBox>
          <S.FirstLineTextBox>
            <ScrollAnimationContainer>
              <S.Title> Contact ME !</S.Title>
            </ScrollAnimationContainer>
          </S.FirstLineTextBox>
        </S.TextBox>
      </Animation3>
      <S.ProjectBox>
        <S.ContentsBox>
          <S.RelativeDiv>
            <S.Title>Github : </S.Title>
            <S.FirstText target='_blank' href='https://github.com/cheolminJOO'>
              https://github.com/cheolminJOO
            </S.FirstText>
          </S.RelativeDiv>
          <S.RelativeDiv>
            <S.Title>E-mail : </S.Title>
            <S.FirstText href='mailto:cheolmin.joo@gmail.com'>
              cheolmin.joo@gmail.com
            </S.FirstText>
          </S.RelativeDiv>
        </S.ContentsBox>
      </S.ProjectBox>
    </S.Container>
  );
};

export default Contact;
