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

export interface ViewAllInfiniteProps {
  item: IViewAllProps;
}

export interface IViewAllProps {
  data: [
    {
      diaryId: number;
      UserId: number;
      EmotionStatus: number;
      image: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: null | string;
      isPublic: boolean;
    }
  ];
}

export interface IViewAllPropsPure {
  item: {
    data: [
      {
        diaryId: number;
        UserId: number;
        EmotionStatus: number;
        image: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: null | string;
        isPublic: boolean;
      }
    ];
  };
}

export interface IViewAllPropsEach {
  diaryId: number;
  UserId: number;
  EmotionStatus: number;
  image: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  isPublic: boolean;
}

export interface ITableCellProps {
  isToday?: boolean;
}

export interface IDateSpanProps {
  isToday?: boolean;
}

export interface IProps {
  EmotionStatus: number;
  UserId: number;
  createdAt: string;
  deletedAt: string | null;
  image: string;
  isPublic: boolean;
  updatedAt: string;
}
