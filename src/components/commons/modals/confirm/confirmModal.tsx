import React, { MouseEvent } from 'react';
import * as S from './confirmModal.styles';
import ReactDOM from 'react-dom';
import ConfirmOverlay from '../modalSetting/overlay/confrimOverlay/ConfirmOverlay';
import { IConfirm } from './confirmModal.types';
const ConfrimModal: React.FC<IConfirm> = ({
  onClickMoveToMain,
  onClickSubmitBtn,
}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <ConfirmOverlay onOk={onClickMoveToMain} onClose={onClickSubmitBtn} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default ConfrimModal;
