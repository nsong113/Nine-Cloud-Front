import React from 'react';
import ReactDOM from 'react-dom';
import GPTOverlay from '../modalSetting/overlay/GPTOverlay/GPTOverlay';
import { IGPTprops } from './GPTModal.types';
//
const GPTModal: React.FC<IGPTprops> = ({ onOk, onGo }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <GPTOverlay onOk={onOk} onGo={onGo} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default GPTModal;
