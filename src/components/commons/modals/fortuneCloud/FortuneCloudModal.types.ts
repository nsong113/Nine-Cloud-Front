export interface ICloudModal {
  goBackFortune: () => void;
  todayRandomSaying: string;
  setTodayRandomSaying: React.Dispatch<React.SetStateAction<string>>;
}
