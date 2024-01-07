export interface IMyPost {
  contents?: string;
  isPublic?: boolean;
}

export interface IEditPost {
  onClose: () => void;
  content: string | undefined;
  detailedContent: any;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClickedPencil: React.Dispatch<React.SetStateAction<boolean>>;
}
