import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ICanvasProps, ICoordinate } from './BoardWriteDraw.types';
import * as S from './BoardWriteDraw.styles';

const BoardDrawPaper = ({ width, height }: ICanvasProps) => {
  const canvasStyle = {
    width,
    height,
    border: '1px solid #C4C4C4',
    borderRadius: '25px',
    margin: '17px auto',
  };

  //useRef로 canvas (태그) 선택
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //mouse down시, 마우스포인터 (x,y)상태관리
  const [mousePosition, setMousePosition] = useState<ICoordinate | undefined>(
    undefined
  );
  //isPainting 상태관리
  const [isPainting, setIsPainting] = useState(false);

  //좌표 얻는 함수 (MouseEvent로 부터 좌표를 얻음)
  const getCoordinates = (event: MouseEvent): ICoordinate | undefined => {
    //canvasRef에 대한 참조가 안되어 null인 경우 함수 종료
    if (!canvasRef.current) {
      return;
    }
    //캔버스 엘리먼트 추출
    const canvas: HTMLCanvasElement = canvasRef.current;

    //좌표 계산 및 반환
    return {
      //이벤트가 발생했을 때 좌표 구하는 프로퍼티
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    };
  };

  //색 상태 관리
  const [color, setColor] = useState('red');
  //컬러파레트 마우스 클릭 이벤트
  const onClickBlackPaletteHandler = () => {
    setColor('#000000');
  };
  const onClickRedPaletteHandler = () => {
    setColor('#FF2323');
  };
  const onClickBluePaletteHandler = () => {
    setColor('#4BA9FF');
  };
  const onClickGreenPaletteHandler = () => {
    setColor('#16FF4A');
  };
  const onClickOrangePaletteHandler = () => {
    setColor('#FFC225');
  };
  const onClickYellowPaletteHandler = () => {
    setColor('#EDFF22');
  };
  const onClickPurplePaletteHandler = () => {
    setColor('#4E12F6');
  };
  const onClickPinkPaletteHandler = () => {
    setColor('#DB00FF');
  };

  //선 굵기 관리
  const [thickness, setThickness] = useState<number>(5);
  const onCLickThicknessBoldHaneler = () => {
    setThickness(16);
  };
  const onClickThicknessMediumHandler = () => {
    setThickness(10);
  };
  const oonClickThicknessThinHandler = () => {
    setThickness(6);
  };

  //drawLine(originPosition,newPosition) : 선을 그음
  const drawLine = (
    originalMousePosition: ICoordinate,
    newMousePosition: ICoordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }

    //2D context 획득
    const canvas: HTMLCanvasElement = canvasRef.current;
    //getContext: HTML Canvas요소의 2D그래픽 컨텍스트를 얻는 메서드
    const context = canvas.getContext('2d');

    if (context) {
      //선 스타일 설정
      context.strokeStyle = color; // 선 색깔
      context.lineJoin = 'round'; // 선 끄트머리(?)
      context.lineWidth = thickness; // 선 굵기

      //선 그리기
      //새로운 경로 시작
      context.beginPath();
      //moveTo로 선 시작점을 이동
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      //line로 선 그리기
      context.lineTo(newMousePosition.x, newMousePosition.y);
      //경로를 닫고
      context.closePath();
      //실제 선 그리기
      context.stroke();
    }
  };

  //startPaint, paint,exitPaint : MouseEventListner에 사용될 콜백함수
  //렌더링 중에 생성되면 매 렌더링 때마다 새로운 함수가 생성될 수 있어서 useCallback사용.
  const startPaint = useCallback((event: MouseEvent) => {
    //getCoordinates 함수를 사용하여 마우스 이벤트의 좌표 가져오기
    const coordinates = getCoordinates(event);

    //만약 좌표가 유효하다면
    if (coordinates) {
      //setIsPaintinga을 사용해 그림그리기 상태를 true로 변경
      setIsPainting(true);

      //setMousePosition을 이용해 현재 마우스의 좌표를 설정
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
        //함수를 사용하여 현재 마우스 이벤트가 발생한 좌표를 가져와
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

  //EventListner등록, 컴포넌트가 마운트 되면 마우스 이벤트 리스너 등록

  useEffect(() => {
    //캔버스 엘리먼트가 존재하는지 확인하고 없다면 함수 종료
    if (!canvasRef.current) {
      return;
    }

    //존재하는 경우 canvas에 할당
    const canvas: HTMLCanvasElement = canvasRef.current;

    //canvas엘리먼트에 대해 mousedown, move,up,leave에 대응하는 함수 지정
    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);

    return () => {
      // Unmount 시 이벤트 리스너 제거
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    };
  }, [startPaint, paint, exitPaint]);

  //팬, 지우개, 초기화 상태 토글
  const [pen, setPen] = useState(true);
  const [eraser, setEraser] = useState(false);
  const [init, setInit] = useState(false);

  const onClickPenToggleHandler = () => {
    setPen(!pen);
  };

  const onClickEraserToggleHandler = () => {
    setPen(!eraser);
    setColor('white');
  };

  const onClickInitToggleHandler = () => {
    setPen(!init);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        height={height}
        width={width}
        style={canvasStyle}
      />
      <S.ToggleBox>
        <S.FirstToggle onClick={onClickPenToggleHandler}>펜</S.FirstToggle>
        <S.FirstToggle onClick={onClickEraserToggleHandler}>
          지우개
        </S.FirstToggle>
        <S.FirstToggle onClick={onClickInitToggleHandler}>초기화</S.FirstToggle>
      </S.ToggleBox>
      {pen && (
        <>
          <S.ArrowDiv></S.ArrowDiv>
          <S.ColorSettingDiv>
            <S.ThicknessDiv>
              <S.ThicknessBold
                onClick={onCLickThicknessBoldHaneler}
              ></S.ThicknessBold>
              <S.ThicknessMedium
                onClick={onClickThicknessMediumHandler}
              ></S.ThicknessMedium>
              <S.ThicknessThin
                onClick={oonClickThicknessThinHandler}
              ></S.ThicknessThin>
            </S.ThicknessDiv>

            <S.ColorPaletteFlexDiv>
              <S.Palette
                color={'black'}
                onClick={onClickBlackPaletteHandler}
              ></S.Palette>
              <S.Palette
                color={'#FF2323'}
                onClick={onClickRedPaletteHandler}
              ></S.Palette>
              <S.Palette
                color={'#FFC225'}
                onClick={onClickOrangePaletteHandler}
              ></S.Palette>
              <S.Palette
                color={'#EDFF22'}
                onClick={onClickYellowPaletteHandler}
              ></S.Palette>
              <S.Palette
                color={'#16FF4A'}
                onClick={onClickGreenPaletteHandler}
              ></S.Palette>
              <S.Palette
                color={'#4BA9FF'}
                onClick={onClickBluePaletteHandler}
              ></S.Palette>
              <S.Palette
                color={'#4E12F6'}
                onClick={onClickPurplePaletteHandler}
              ></S.Palette>
              <S.Palette
                color={'#DB00FF'}
                onClick={onClickPinkPaletteHandler}
              ></S.Palette>
            </S.ColorPaletteFlexDiv>
          </S.ColorSettingDiv>
        </>
      )}
    </div>
  );
};

export default BoardDrawPaper;
