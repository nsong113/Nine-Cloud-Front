import { IpostDiaryItem } from 'src/apis/apiesType';

export interface IConfirm {
  onClickGotoMain: () => void;
  onClickGotoPost2: () => void;
  postDiaryItem: IpostDiaryItem | null;
}
