import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmOverlay from '../modalSetting/overlay/confrimOverlay/ConfirmOverlay';
import { IConfirm } from './confirmModal.types';

const ConfrimModal: React.FC<IConfirm> = ({
  onClickGotoMain,
  onClickGotoPost2,
  postDiaryItem,
}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <ConfirmOverlay
          onClickGotoMain={onClickGotoMain}
          onClickGotoPost2={onClickGotoPost2}
          postDiaryItem={postDiaryItem}
        />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default ConfrimModal;
