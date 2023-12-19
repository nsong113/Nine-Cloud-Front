import React, { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modalSetting/overlay/alertOverlay/ModalOverlay';
const AlertModal: React.FC<Props> = ({ onClickSubmit, onClickMoveToMain }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <ModalOverlay onOk={onClickSubmit} onClose={onClickMoveToMain} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default AlertModal;
