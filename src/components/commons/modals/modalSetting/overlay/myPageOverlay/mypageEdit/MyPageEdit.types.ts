export interface CheckEdit {
  isEdit: boolean;
}

export interface IMyPost {
  selectedImage?: File | string;
  username?: string;
}

export interface IMyPageEdit {
  data: any;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
