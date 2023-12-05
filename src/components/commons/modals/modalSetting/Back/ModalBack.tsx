import * as S from './ModalBack.styles';

const Backdrop: React.FC<IProp> = ({ onClose }) => {
  return <S.ContainerDiv onClick={onClose}></S.ContainerDiv>;
};

export default Backdrop;
