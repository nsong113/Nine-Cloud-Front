import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

// interface PortalProps {
//   node: HTMLElement | null;
//   children: React.ReactNode; // children이 정의되어 있어야 함
// }

// interface IProps {
//   onClose?: () => void;
//   onOk?: () => void;
// }

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
