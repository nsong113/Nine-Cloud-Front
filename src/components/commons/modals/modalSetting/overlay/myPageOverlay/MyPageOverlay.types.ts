export interface IMyPage {
  onOk: () => void;
  isActiveModal?: boolean;
}

export interface ValidationMessageProps {
  isError: boolean;
}

export interface CheckEdit {
  isEdit: boolean;
}

export interface IMyPost {
  selectedImage?: File | string;
  username?: string;
}

export interface ActiveModal {
  isActiveModal?: boolean;
}
