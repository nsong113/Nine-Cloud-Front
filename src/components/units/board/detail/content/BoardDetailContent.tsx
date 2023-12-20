import React from 'react';
import { IProps } from './BoardDetailContent.types';

const BoardDetailContent = (props: any) => {
  console.log('props', props);
  return <div>{props.date}</div>;
};

export default BoardDetailContent;
