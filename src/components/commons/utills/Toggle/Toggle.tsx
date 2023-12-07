/* eslint-disable */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: fixed;
  left: 53.7%;
  cursor: pointer;
  top: 11%;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: pink;
  }

  > .toggle--checked {
    background-color: rgb(0, 200, 102);
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
  }

  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

const Desc = styled.div`
  text-align: center;
  margin: 20px;
`;

interface ToggleProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // 이 부분 수정
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleHandler = () => {
    setIsOn(!isOn);
    onChange({} as React.ChangeEvent<HTMLInputElement>); // 인자 없이 호출
  };

  return (
    <ToggleContainer onClick={toggleHandler}>
      <div className={`toggle-container ${isOn ? 'toggle--checked' : null}`} />
      <div className={`toggle-circle ${isOn ? 'toggle--checked' : null}`} />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
