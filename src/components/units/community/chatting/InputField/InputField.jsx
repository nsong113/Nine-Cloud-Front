import React from 'react';
import PropTypes from 'prop-types'; // 추가: PropTypes 불러오기
import { Input } from '@mui/base/Input';
import { Button } from '@mui/base/Button';
import './InputField.css';

const InputField = ({ message, setMessage, sendMessage }) => {
  return (
    <div className='input-area'>
      <div className='plus-button'>+</div>
      <form onSubmit={sendMessage} className='input-container'>
        <Input
          placeholder='Type in here…'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          multiline={false}
          rows={1}
        />

        <Button disabled={message === ''} type='submit' className='send-button'>
          전송
        </Button>
      </form>
    </div>
  );
};

// 추가: PropTypes 정의
InputField.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default InputField;
