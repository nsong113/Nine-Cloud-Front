import React from 'react';
import ReactDOM from 'react-dom';
import FortuneOverlay from '../modalSetting/overlay/fortuneOverlay/FortuneOverlay';
import { ICloudModal } from './FortuneCloudModal.types';

const FortuneCloudModal: React.FC<ICloudModal> = ({ goBackFortune }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <FortuneOverlay goBackFortune={goBackFortune} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default FortuneCloudModal;
