export interface PostBtnPropsI {
  onClickMoveToMain?: () => void;
  onClickNextPage?: () => void;
  page: string;
  onClickPrevPage?: () => void;
  onClickNextPageBtn?: () => void;
  onClickPrevBtn?: () => void;
  onClickAddBtn?: () => void;
  makeImageFile?: () => void;
  onClose?: () => void;
  onOk?: () => void;
  onClickPostHandler?: () => void;
  onClickGotoPost2?: () => void;
  contentsToday?: string;
}
