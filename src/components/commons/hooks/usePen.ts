import React, { useCallback, useState } from 'react';
import { ICoordinate } from 'src/components/units/board/write/draw/BoardWriteDraw.types';

const usePen = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  getCoordinates: (event: MouseEvent) => ICoordinate | undefined,
  color: string,
  thickness: number,
  mousePosition: ICoordinate | undefined,
  setMousePosition: React.Dispatch<
    React.SetStateAction<ICoordinate | undefined>
  >
) => {
  const [isPainting, setIsPainting] = useState<boolean>(false);
  const drawLine = (
    originalMousePosition: ICoordinate,
    newMousePosition: ICoordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }
    
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      context.strokeStyle = color;
      context.lineJoin = 'round';
      context.lineWidth = thickness;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  //startPaint, paint,exitPaint : MouseEventListner에 사용될 콜백함수
  //렌더링 중에 생성되면 매 렌더링 때마다 새로운 함수가 생성될 수 있어서 useCallback사용.
  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);

    //만약 좌표가 유효하다면
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const paint = useCallback(
    (event: MouseEvent) => {
      //이벤트 전파 중단
      event.preventDefault(); // drag 방지
      event.stopPropagation(); // drag 방지

      //그림 그리는 중이면..
      if (isPainting) {
        const newMousePosition = getCoordinates(event);

        //만약 mousePosition이랑 new랑 둘 다 있으면 drawLine함수 실행, mousePosition을 new로 바꿔
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  return {
    startPaint,
    paint,
    exitPaint,
    isPainting,
  };
};

export default usePen;
