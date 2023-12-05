import React, { MouseEvent } from 'react';
import * as S from './alertModal.styles';
import ReactDOM from 'react-dom';
import Backdrop from '../modalSetting/Back/ModalBack';
import ModalOverlay from '../modalSetting/overlay/alertOverlay/ModalOverlay';
const AlertModal: React.FC<Props> = ({ onClickSubmit, onClickMoveToMain }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClickMoveToMain} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onOk={onClickSubmit} onClose={onClickMoveToMain} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default AlertModal;
