import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { rollingSquere } from './Animation.styles';

const Animation4: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      transition={{ duration: 3 }}
      variants={rollingSquere}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

Animation4.propTypes = {
  children: PropTypes.node,
};

export default Animation4;
