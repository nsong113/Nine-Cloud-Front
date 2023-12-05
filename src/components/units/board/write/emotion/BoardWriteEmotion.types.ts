interface PortalProps {
  node: HTMLElement | null;
  children: React.ReactNode; // children이 정의되어 있어야 함
}

interface IProps {
  onClose?:() => void;
  onOk?: () => void;
}
