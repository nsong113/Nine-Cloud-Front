import React, { ReactNode } from 'react';
import * as S from './tooltip.styles';
import { TooltipProps } from './tooltip.types';

export const Tooltip: React.FC<TooltipProps> = ({ children, message }) => {
  return (
    <S.Container>
      {children}
      <S.Content className='tooltip'>{message}</S.Content>
    </S.Container>
  );
};
