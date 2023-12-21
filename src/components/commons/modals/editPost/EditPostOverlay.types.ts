export interface IEditPost {
  onClose: () => void;
  content: string | undefined;
  detailedContent: any;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

