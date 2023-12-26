export interface IMyPage {
  onOk: () => void;
}

export interface ValidationMessageProps {
  isError: boolean;
}

export interface CheckEdit {
  isEdit: boolean;
}

export interface IMyPost {
  selectedImage?: any;
  username?: string;
}
