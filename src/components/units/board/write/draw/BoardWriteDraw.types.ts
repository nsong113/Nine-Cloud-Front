export interface ICanvasProps {
  width: number;
  height: number;
}

export interface ICoordinate {
  x: number;
  y: number;
}

export interface IPalette {
  color: string;
}

export interface ILine {
  start: ICoordinate;
  end: ICoordinate;
}
