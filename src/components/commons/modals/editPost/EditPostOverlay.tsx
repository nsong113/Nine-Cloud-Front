import React from 'react';
import ReactDOM from 'react-dom';
import EditOverlay from '../modalSetting/overlay/editOverlay/EditOverlay';
import { IEditPost } from './EditPostOverlay.types';

const EditPostOverlay: React.FC<IEditPost> = ({
  content,
  onClose,
  detailedContent,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <EditOverlay
          detailedContent={detailedContent}
          content={content}
          onClose={onClose}
        />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default EditPostOverlay;
