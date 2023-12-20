export interface IProfile {
  name: string;
  age: number | string;
  country: string;
  hobby: string;
}

export interface ValidationMessageProps {
  isError: boolean;
}
