import { IpostDiaryItem } from 'src/apis/apiesType';

export interface IConfirmMod {
  onClickGotoPost2: () => void;
  onClickGotoMain: () => void;
  postDiaryItem: IpostDiaryItem | null;
}

export interface IStyled {
  $isModalOpen: boolean;
}
