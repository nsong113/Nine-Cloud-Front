import React from 'react';
import ReactDOM from 'react-dom';
import FortuneOverlay from '../modalSetting/overlay/fortuneOverlay/FortuneOverlay';
import { ICloudModal } from './FortuneCloudModal.types';

const FortuneCloudModal: React.FC<ICloudModal> = ({
  goBackFortune,
  todayRandomSaying,
  setTodayRandomSaying,
}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <FortuneOverlay
          goBackFortune={goBackFortune}
          todayRandomSaying={todayRandomSaying}
          setTodayRandomSaying={setTodayRandomSaying}
        />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
};

export default FortuneCloudModal;

