export interface IpostDiaryItem {
  EmotionalStatus?: number | null;
  content?: string | null;
  isPublic?: boolean;
  image: string | File | Blob;
  sentence?: string | null;
  weather?: string | null;
  temperature?: string;
  humid?: string;
  sleep?: string;
}

export interface Iprops {
  prompt: string;
}
