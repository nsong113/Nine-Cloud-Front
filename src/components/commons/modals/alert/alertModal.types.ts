interface Props {
  title?: string;
  value?: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
  onClickMoveToMain?: () => void;
  onClickSubmit?: () => void;

  // onClickMoveToMain?: (e: React.FormEvent<HTMLButtonElement>) => void;
}
