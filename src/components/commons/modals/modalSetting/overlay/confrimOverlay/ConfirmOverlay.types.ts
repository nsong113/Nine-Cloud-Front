export interface IConfirmMod {
  onClose?: () => void;
  onOk?: () => void;
  modalClose?: () => void;
  // $isModalOpen?: boolean;
}

export interface IStyled {
  $isModalOpen: boolean;
}
