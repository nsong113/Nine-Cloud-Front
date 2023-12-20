export interface IAddPost {
  image: string;
  content: string;
  EmotionStatus: number;
}

export interface IAddComment {
  diaryId: string | undefined;
  content: string | undefined;
}

export interface IEditComment {
  commentId: number | undefined;
  message: string | undefined;
}

export interface IDeleteComment {
  commentId: number | undefined;
}

export interface IUpdatePost {
  diaryId: string | undefined;
  myPost: {
    contents?: string | undefined;
    isPublic?: boolean;
  };
}

export interface IGetPosts {
  currentYear: any;
  currentMonth: any;
}
