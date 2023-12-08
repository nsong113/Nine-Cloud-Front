export interface IProfile {
  name: string;
  age: number | string;
  country: string;
  hobby: string;
}

export type ValuePiece = Date | null;

export type ValueI = ValuePiece | [ValuePiece, ValuePiece];

export interface IdateOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: any;
}

export interface ItileContent {
  date?: any;
  view?: any;
}

export interface IMatchingDay {
  EmotionStatus: number;
  date: string;
  id: number;
}

export interface IemotionSetting {
  matchDDD: number;
  matchEmotionStatus: number;
}

export interface IViewAllProps {
  item: {
    diaryId: number;
    UserId: number;
    EmotionStatus: number;
    image: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
    isPrivate: boolean;
  };
}
