export interface IAddPost {
  image: string;
  content: string;
  EmotionStatus: number;
}


export interface IAddComment {
  diaryId : string | undefined,
  comment : string | undefined,
}