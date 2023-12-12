import { IpostDiaryItem } from 'src/apis/apiesType';

// export interface IConfirm {
//   onClickMoveToCancel?: () => void;
//   onClickSubmitBtn?: () => void;
//   onClickMoveToMain?: () => void;
//   postDiaryItem?: IpostDiaryItem | null;
// }

export interface IConfirm {
  onClickGotoMain: () => void;
  onClickGotoPost2: () => void;
  postDiaryItem: IpostDiaryItem | null;
}
