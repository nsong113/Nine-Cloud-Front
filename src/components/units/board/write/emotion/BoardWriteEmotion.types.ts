import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ISliderInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  min: number;
  max: number;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}