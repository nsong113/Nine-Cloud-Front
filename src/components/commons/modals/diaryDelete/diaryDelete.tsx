import React, { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modalSetting/overlay/alertOverlay/ModalOverlay';
import DiaryDeleteOverlay from '../modalSetting/overlay/diaryDeleteOverlay/DiaryDeleteOverlay';
import { IDiaryDeleteModal } from './diatyDelete.types';
const DiaryDeleteModal: React.FC<IDiaryDeleteModal> = ({
  onClose,
}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <DiaryDeleteOverlay  onClose={onClose} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default DiaryDeleteModal;
