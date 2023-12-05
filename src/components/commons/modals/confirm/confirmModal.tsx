import React, { MouseEvent } from 'react';
import * as S from './confirmModal.styles';
import ReactDOM from 'react-dom';
import Backdrop from '../modalSetting/Back/ModalBack';
import ConfirmOverlay from '../modalSetting/overlay/confrimOverlay/ConfirmOverlay';
const ConfrimModal: React.FC<IConfirm> = ({
  onClickMoveToMain,
  onClickSubmitBtn,
}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClickSubmitBtn} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ConfirmOverlay onOk={onClickMoveToMain} onClose={onClickSubmitBtn} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default ConfrimModal;
