import { useScrollAnimation } from '../hooks/useScrollAnimation/useScrollAnimation';
import { Container } from './ScrollAnimationContainer.styles';

type PropsType = {
  children: React.ReactNode;
};

export const ScrollAnimationContainer = ({ children }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container ref={ref} className={isInViewport ? 'frame-in' : ''}>
      {children}
    </Container>
  );
};
