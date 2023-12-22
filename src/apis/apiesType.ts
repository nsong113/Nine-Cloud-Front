export interface IpostDiaryItem {
  EmotionalStatus?: number | null;
  content?: string | null;
  isPublic?: boolean;
  image: File | Blob;
  sentence?: string | null;
  weather?: string | null;
  temperature?: string;
  humid?: string;
  sleep?: string;
}

// export interface IpostDiaryItem {
//   file?: Blob | null;
// }

// export interface IpostFinal {
//   EmotionalStatus?: number;
//   content?: string;
//   isPublic?: boolean;
//   image?: File | null;
// }

export interface Iprops {
  prompt: string;
}
