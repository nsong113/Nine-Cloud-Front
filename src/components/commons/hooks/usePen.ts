import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IpostDiaryItem } from 'src/apis/apiesType';
import { ICoordinate } from 'src/components/units/board/write/draw/BoardWriteDraw.types';
import imageCompression from 'browser-image-compression';
import { useRecoilState } from 'recoil';
import { image } from 'src/states/counter';
import { colorA, thicknessA } from 'src/states/draw';

const usePen = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  getCoordinates: (event: MouseEvent) => ICoordinate | undefined,
  mousePosition: ICoordinate | undefined,
  setMousePosition: React.Dispatch<
    React.SetStateAction<ICoordinate | undefined>
  >
) => {
  const [isPainting, setIsPainting] = useState<boolean>(false);
  const [imageAtom, setImageAtom] = useRecoilState(image);
  const [colorAtom, setColorAtom] = useRecoilState<string>(colorA);
  const [thicknessAtom, setThicknessAtom] = useRecoilState(thicknessA);

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
      context.strokeStyle = colorAtom;
      context.lineJoin = 'round';
      context.lineWidth = thicknessAtom;

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

  const makeImageFile = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, 'image/png')
      );
      if (!blob) return;
      const file = new File([blob], 'image.png', { type: 'image/png' });
      const compressedImage = await compressImage(file);
      const base64String = await imageToBase64(compressedImage);
      setImageAtom(base64String as string);
    } catch (error) {
      console.error('이미지 파일 생성 오류', error);
    }
  };

  const timerIdRef = useRef<number | null>(null);
  useEffect(() => {
    if (isPainting === false) {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }

      timerIdRef.current = setTimeout(() => {
        makeImageFile();
      }, 1000) as unknown as number;
    }
    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, [isPainting]);

  const imageToBase64 = async (image: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(image);
    });
  };

  const compressImage = async (image: File): Promise<Blob> => {
    const options = {
      maxSizeMB: 0.01,
      maxWidthOrHeight: 550,
      useWebWorker: true,
    };

    try {
      const compressedBlob = await imageCompression(image, options as any);
      return new File([compressedBlob], 'compressedImage.png', {
        type: 'image/png',
      });
    } catch (error) {
      console.error('이미지 압축 오류', error);
      throw error;
    }
  };

  return {
    startPaint,
    paint,
    exitPaint,
    isPainting,
  };
};

export default usePen;
