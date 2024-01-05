/*eslint-disable*/
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardWriteEmotion from 'src/components/units/board/write/emotion/BoardWriteEmotion';

describe('BoardWriteEmotion 컴포넌트', () => {
  it('제대로 렌더링이 되나?', () => {
    render(<BoardWriteEmotion />);

    expect(
      screen.getByText('오늘의 마음 온도는 어땠나요?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('오늘의 마음 습도는 어땠나요?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('오늘의 마음 일출을 떠올려볼까요?')
    ).toBeInTheDocument();
    expect(screen.getByText('오늘의 날씨는 어땠나요?')).toBeInTheDocument();
  });

  it('슬라이더 움직일 때 state 변경 되나?', () => {
    const { container } = render(<BoardWriteEmotion />);
    const happySlider = container.querySelector('input[type="range"]');
    if (happySlider === null) return;
    fireEvent.change(happySlider, { target: { value: 3 } });

    expect(container.textContent).toContain('그냥그래요');
  });

  it('모달이 닫힐 때 onClickMoveToMain함수 실행하나?', () => {
    render(<BoardWriteEmotion />);

    const mockOnClickMoveToMain = jest.fn();
    fireEvent.click(screen.getByTestId('close-modal-button'));
    expect(mockOnClickMoveToMain).toHaveBeenCalled();
  });
});
