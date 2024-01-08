import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './BoardWriteDraw.styles';
import { useNavigate } from 'react-router-dom';
import { IpostDiaryItem } from 'src/apis/apiesType';
import useSetColor from 'src/components/commons/hooks/useSetColor';
import usePen from 'src/components/commons/hooks/usePen';
import { ICoordinate } from './BoardWriteDraw.types';
import PostBtn from 'src/components/commons/utills/PostBtn/PostBtn';
import Tooltip from 'src/components/commons/utills/tooltip/tooltip';
import { useRecoilState } from 'recoil';
import { image } from 'src/states/counter';
import ColorPalette from './ColorPalette';
import ThicknessPalette from './ThicknessPalette';
import { colorA, eraserModeA, penModeA } from 'src/states/draw';
import PostUpperWrapper from '../PostUpperWrapper';
import ConfirmOverlay from 'src/components/commons/modals/modalSetting/overlay/confrimOverlay/ConfirmOverlay';

const BoardWriteDraw = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState<ICoordinate | undefined>(
    undefined
  );
  let [postDiaryItem, setPostDiaryItem] = useState<IpostDiaryItem | null>(null);
  const [penClickedEmoji, setPenClickedEmoji] = useState('/pen_unclicked.png');
  const [eraserClickedEmoji, setEraserClickedEmoji] = useState(
    '/eraser_unclicked.png'
  );
  const [imageAtom, setImageAtom] = useRecoilState(image);
  const [penMode, setPenMode] = useRecoilState(penModeA);
  const [eraserMode, setEraserMode] = useRecoilState(eraserModeA);

  const { colorHandlerBlack } = useSetColor();
  const [colorAtom, setColorAtom] = useRecoilState<string>(colorA);

  const ClickPenMode = () => setPenMode(!penMode);
  const ClickEraserMode = () => {
    setEraserMode(!eraserMode);
    setColorAtom('white');
  };

  const onClickPrevBtn = () => navigate('/post3');
  const onClickGotoPost2 = () => setIsModalOpen(!isModalOpen);
  const onClickGotoMain = () => navigate('/main');

  useEffect(() => {
    if (penMode === true) {
      setPenClickedEmoji('/pen_clicked.png');
      setEraserMode(false);
      colorHandlerBlack();
    } else {
      setPenClickedEmoji('/pen_unclicked.png');
    }
  }, [penMode]);

  useEffect(() => {
    if (eraserMode === true) {
      setEraserClickedEmoji('/eraser_clicked.png');
      setPenMode(false);
    } else {
      setEraserClickedEmoji('/eraser_unclicked.png');
    }
  }, [eraserMode]);

  useEffect(() => {
    const convertImageToBlob = async () => {
      try {
        if (!imageAtom) return;
        const base64String = imageAtom;
        const blob = await base64ToBlob(base64String, 'image/png');

        setPostDiaryItem({
          image: blob,
        });
      } catch (error) {
        console.error('이미지 변환 오류', error);
      }
    };
    convertImageToBlob();
  }, [imageAtom]);

  const onClickAddBtn = () => {
    if (postDiaryItem !== null) setIsModalOpen((prev) => !prev);
  };

  const getCoordinates = (event: MouseEvent): ICoordinate | undefined => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    return {
      x: event.clientX - canvas.getBoundingClientRect().left,
      y: event.clientY - canvas.getBoundingClientRect().top,
    };
  };

  const { startPaint, paint, exitPaint } = usePen(
    canvasRef,
    getCoordinates,
    mousePosition,
    setMousePosition
  );

  const onClickSaveToggleHandler = () => {
    const image = canvasRef.current?.toDataURL('image/png').split(',')[1];
    if (image) {
      const byteCharacters = atob(image);

      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const u8arr = new Uint8Array(byteNumbers);
      const file = new Blob([u8arr], { type: 'image/png' });

      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(file);
      downloadLink.download = 'drawing.png';
      downloadLink.click();
    }
  };

  const onClickInitToggleHandler = () => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const base64ToBlob = (base64String: string, contentType = 'image/png') => {
    const pureBase64 = base64String.split(',')[1];
    const cleanedBase64 = pureBase64.replace(/\s/g, '');

    const byteCharacters = atob(cleanedBase64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  };

  const startTouch = useCallback((event: TouchEvent) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    let touch = event.touches[0];

    let mouseEvent = new MouseEvent('mousedown', {
      clientX: touch?.clientX,
      clientY: touch?.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }, []);

  const moveTouch = useCallback((event: TouchEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    let touch = event.touches[0];
    let mouseEvent = new MouseEvent('mousemove', {
      clientX: touch?.clientX,
      clientY: touch?.clientY,
    });

    canvas.dispatchEvent(mouseEvent);
  }, []);

  const endTouch = useCallback((event: TouchEvent) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    let touch = event.touches[0];
    let mouseUpEvent = new MouseEvent('mouseup', {
      clientX: touch?.clientX,
      clientY: touch?.clientY,
    });
    let mouseLeaveEvent = new MouseEvent('mouseleave', {
      clientX: touch?.clientX,
      clientY: touch?.clientY,
    });
    canvas.dispatchEvent(mouseUpEvent);
    canvas.dispatchEvent(mouseLeaveEvent);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);
    canvas.addEventListener('touchstart', startTouch);
    canvas.addEventListener('touchmove', moveTouch);
    canvas.addEventListener('touchend', endTouch);

    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
      canvas.removeEventListener('touchstart', startTouch);
      canvas.removeEventListener('touchmove', moveTouch);
      canvas.removeEventListener('touchend', endTouch);
    };
  }, [startPaint, paint, exitPaint]);

  return (
    <>
      {isModalOpen && (
        <ConfirmOverlay
          onClickGotoMain={onClickGotoMain}
          onClickGotoPost2={onClickGotoPost2}
          postDiaryItem={postDiaryItem}
        />
      )}
      <S.DrawContainerDiv>
        <PostUpperWrapper
          first={'checked'}
          firstWord={'Emotion'}
          second={'checked'}
          secondWord={'Text'}
          third={'now'}
          thirdWord={'Drawing'}
          progress={'150px'}
        />
        <S.DrawWrapperDOWNdiv>
          <S.ContainerDiv>
            <S.DrawTitleBox>
              <S.DrawWriteTitleH3>
                오늘의 마음 날씨는 어떤지
                <br />
                그림으로 그려볼까요?
              </S.DrawWriteTitleH3>
              <S.DrawTitleFlexIcon>
                <Tooltip message='초기화'>
                  <S.TrashcanDiv onClick={onClickInitToggleHandler} />
                </Tooltip>
                <Tooltip message='다운로드'>
                  <S.DownloadDiv onClick={onClickSaveToggleHandler} />
                </Tooltip>
              </S.DrawTitleFlexIcon>
            </S.DrawTitleBox>
            <S.CanvasContainer>
              <S.DrawCanvas ref={canvasRef} height={365} width={365} />
              <S.ToggleBox>
                {/* eslint-disable-next-line */}
                <img
                  src={penClickedEmoji}
                  alt='펜 클릭하기'
                  onClick={ClickPenMode}
                  style={cursor}
                />
                {/* eslint-disable-next-line */}
                <img
                  src={eraserClickedEmoji}
                  alt='지우개 클릭하기'
                  onClick={() => {
                    ClickEraserMode();
                  }}
                  style={cursor}
                />
                <ThicknessPalette />
              </S.ToggleBox>
              <ColorPalette />
            </S.CanvasContainer>
            <S.ButtonWrapperDiv>
              <PostBtn
                onClickPrevBtn={onClickPrevBtn}
                onClickAddBtn={onClickAddBtn}
                page={'draw'}
              />
            </S.ButtonWrapperDiv>
          </S.ContainerDiv>
        </S.DrawWrapperDOWNdiv>
      </S.DrawContainerDiv>
    </>
  );
};

export default BoardWriteDraw;

const cursor = {
  cursor: 'pointer',
};
