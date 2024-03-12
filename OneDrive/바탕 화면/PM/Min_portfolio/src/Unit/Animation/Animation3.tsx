import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { moveEffect } from './Animation.styles';

const Animation3: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      transition={{ duration: 0.5 }}
      variants={moveEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

Animation3.propTypes = {
  children: PropTypes.node,
};

export default Animation3;
