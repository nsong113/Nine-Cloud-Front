import React, { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import MyPageOverlay from '../modalSetting/overlay/myPageOverlay/MyPageOverlay';
import { IConfirm } from './myPageModal.types';

const MyPageModal: React.FC<IConfirm> = ({ onClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <MyPageOverlay onOk={onClick} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default React.memo(MyPageModal);
