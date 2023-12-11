import { IpostDiaryItem } from 'src/apis/apiesType';

export interface IConfirmMod {
  onClose?: () => void;
  onOk?: () => void;
  modalClose?: () => void;
  // $isModalOpen?: boolean;
  postDiaryItem: IpostDiaryItem | null;
}

export interface IStyled {
  $isModalOpen: boolean;
}
