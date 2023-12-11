import { IpostDiaryItem } from 'src/apis/apiesType';

export interface IConfirm {
  onClickMoveToCancel: () => void;
  onClickSubmitBtn: () => void;
  postDiaryItem: IpostDiaryItem | null;
}
