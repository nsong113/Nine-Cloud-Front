import React from 'react';
import { motion } from 'framer-motion';
import { pageEffect } from './Animation.styles';
import PropTypes from 'prop-types';

const Animation1: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      transition={{ duration: 0.3 }}
      variants={pageEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

Animation1.propTypes = {
  children: PropTypes.node,
};

export default Animation1;
