import React from 'react';
import ReactDOM from 'react-dom';
import EditOverlay from '../modalSetting/overlay/editOverlay/EditOverlay';
import { IEditPost } from './EditPostOverlay.types';

const EditPostOverlay: React.FC<IEditPost> = ({
  content,
  onClose,
  detailedContent,
  setIsEdit,
  setIsClickedPencil,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <EditOverlay
          detailedContent={detailedContent}
          content={content}
          onClose={onClose}
          setIsEdit={setIsEdit}
          setIsClickedPencil={setIsClickedPencil}
        />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default EditPostOverlay;
