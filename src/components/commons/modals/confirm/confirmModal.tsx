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

//정리:
//라이브러리: react-dom사용 - react애플리케이션을 브라우저 환경에서 렌더링하기 위한 기능을 제공
//ReactDOM.render() / ReactDOM.createPortal()

//document.getElementById('overlay-root'):이 부분은 모달을 포털할 대상이 되는 DOM 요소를 선택 (index.html에 있는 overlay-root를 선택)
