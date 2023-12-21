interface IProps {
  title?: string;
  value?: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
  onClose?: () => void;
  onOk?: () => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

