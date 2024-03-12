import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { windEffect } from './Animation.styles';

const Animation5: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      transition={{ duration: 50, repeat: Infinity }}
      variants={windEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

Animation5.propTypes = {
  children: PropTypes.node,
};

export default Animation5;
