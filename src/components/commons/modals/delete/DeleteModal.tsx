import React from 'react';
import ReactDOM from 'react-dom';
import DeleteOverlay from '../modalSetting/overlay/deleteOverlay/DeleteOverlay';
import { IDelete } from './DeleteModal.types';

const DeleteModal: React.FC<IDelete> = ({ onOk, onClose }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <DeleteOverlay onOk={onOk} onClose={onClose} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default DeleteModal;
