import React from 'react';
import { motion } from 'framer-motion';
import { pageEffect } from './Animation.styles';
import PropTypes from 'prop-types';
// 
const Animation: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
    // 애니메이션 초기 상태
      initial='initial'
      //애니메이션 진행 상태
      animate='in'
      //애니메이션 나가는 상태
      exit='out'
      transition={{ duration: 0.07 }}
      //위에 intial,animate,exit에 대한 애니메이션 효과를 변수에 담아 variants에 할당하면 적용된다.
      variants={pageEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

Animation.propTypes = {
  children: PropTypes.node,
};

export default Animation;
