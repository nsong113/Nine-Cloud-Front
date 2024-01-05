import React from 'react';
import { motion } from 'framer-motion';
import { pageEffect } from './Animation.styles';
import PropTypes from 'prop-types';

const Animation: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      transition={{ duration: 0.07 }}
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
