import ReactDom from 'react-dom';
import { IPortal } from './Portal.types';

const Portal : React.FC<IPortal> = ({ children }) => {
  const overlayRoot = document.getElementById('overlay-root')!;
  return ReactDom.createPortal(children, overlayRoot);
};

export default Portal;
