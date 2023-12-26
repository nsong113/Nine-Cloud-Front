import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './BoardWriteDraw.styles';
import { useNavigate } from 'react-router-dom';
import ConfrimModal from 'src/components/commons/modals/confirm/confirmModal';
import { IpostDiaryItem } from 'src/apis/apiesType';
import useSetColor from 'src/components/commons/hooks/useSetColor';
import useThickness from 'src/components/commons/hooks/useThickness';
import usePen from 'src/components/commons/hooks/usePen';
import { ICoordinate } from './BoardWriteDraw.types';
import { FaCheck } from 'react-icons/fa6';

const BoardWriteDraw = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const [mousePosition, setMousePosition] = useState<ICoordinate | undefined>(
    undefined
  );
  const [colorPickerValue, setColorPickerValue] = useState<string>();
  let [postDiaryItem, setPostDiaryItem] = useState<IpostDiaryItem | null>(null);
  const [penClickedEmoji, setPenClickedEmoji] = useState('/pen_unclicked.png');
  const [eraserClickedEmoji, setEraserClickedEmoji] = useState(
    '/eraser_unclicked.png'
  );
  const [penMode, setPenMode] = useState(true);
  const [eraserMode, setEraserMode] = useState(false);

  const ClickPenMode = () => {
    setPenMode(!penMode);
  };

  const ClickEraserMode = () => {
    setEraserMode(!eraserMode);
  };

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

  const onClickPrevBtn = () => {
    navigate('/post3');
  };

  const onClickAddBtn = () => {
    setIsModalOpen((prev) => !prev);
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

  const {
    color,
    setColor,
    colorHandlerBlack,
    colorHandlerRed,
    colorHandlerBlue,
    colorHandlerGreen,
    colorHandlerOrange,
    colorHandlerYellow,
    colorHandlerPurple,
    colorHandlerPink,
    colorHandlerWhite,
  } = useSetColor();

  const {
    thickness,
    EraserBoldHaneler,
    EraserBoldMediumHandler,
    EraserMediumHandler,
    EraserMediumThinHandler,
    EraserThinHandler,
  } = useThickness();

  const { startPaint, paint, exitPaint } = usePen(
    canvasRef,
    getCoordinates,
    color,
    thickness,
    mousePosition,
    setMousePosition
  );

  useEffect(() => {
    setColorPickerValue(color);
  }, [
    colorHandlerBlack,
    colorHandlerRed,
    colorHandlerOrange,
    colorHandlerYellow,
    colorHandlerGreen,
    colorHandlerBlue,
    colorHandlerPurple,
    colorHandlerPink,
  ]);

  const onChangePickColorHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const colorPicker = colorPickerRef.current;
    if (colorPicker) {
      setColor(event.target.value);
      setColorPickerValue(event.target.value);
    }
  };

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

  const makeImageFile = () => {
    const image = canvasRef.current?.toDataURL('image/png').split(',')[1];

    if (image) {
      const byteCharacters = atob(image);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const u8arr = new Uint8Array(byteNumbers);
      const file = new Blob([u8arr], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(file);

      setPostDiaryItem({
        image: file,
      });
    }
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
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);
    canvas.addEventListener('touchstart', startTouch);
    canvas.addEventListener('touchmove', moveTouch);
    canvas.addEventListener('touchend', endTouch);

    return () => {
      // Unmount 시 이벤트 리스너 제거
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
      canvas.removeEventListener('touchstart', startTouch);
      canvas.removeEventListener('touchmove', moveTouch);
      canvas.removeEventListener('touchend', endTouch);
    };
  }, [startPaint, paint, exitPaint]);

  const onClickGotoPost2 = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClickGotoMain = () => {
    navigate('/main');
  };

  const colors = [
    { color: 'black', handler: colorHandlerBlack },
    { color: '#FF2323', handler: colorHandlerRed },
    { color: '#FFC225', handler: colorHandlerOrange },
    { color: '#EDFF22', handler: colorHandlerYellow },
    { color: '#16FF4A', handler: colorHandlerGreen },
    { color: '#4BA9FF', handler: colorHandlerBlue },
    { color: '#4E12F6', handler: colorHandlerPurple },
    { color: '#DB00FF', handler: colorHandlerPink },
  ];

  const thicknessOptions = [
    { size: 13, handler: EraserThinHandler },
    { size: 18, handler: EraserMediumThinHandler },
    { size: 23, handler: EraserMediumHandler },
    { size: 28, handler: EraserBoldMediumHandler },
    { size: 33, handler: EraserBoldHaneler },
  ];

  return (
    <>
      {isModalOpen && (
        <ConfrimModal
          onClickGotoMain={onClickGotoMain}
          onClickGotoPost2={onClickGotoPost2}
          postDiaryItem={postDiaryItem}
        />
      )}
      <S.DrawContainerDiv>
        <S.DrawWrapperUPDiv>
          <S.HeaderButtonBoxDiv>
            <S.HeaderLine></S.HeaderLine>
            <S.HeaderFlexBox>
              <S.SelectBox>
                <FaCheck
                  style={{
                    position: 'absolute',
                    zIndex: '17',
                    color: '#5035A6',
                  }}
                />
                <S.OneBlackSpan />
                <S.SelectP2>Emotion</S.SelectP2>
              </S.SelectBox>
              <S.SelectBox>
                <FaCheck
                  style={{
                    position: 'absolute',
                    zIndex: '17',
                    color: '#5035A6',
                  }}
                />
                <S.OneBlackSpan />
                <S.SelectP2>Text</S.SelectP2>
              </S.SelectBox>
              <S.SelectBox>
                <S.ThreeFilledSpan></S.ThreeFilledSpan>
                <S.SelectP>Drawing</S.SelectP>
              </S.SelectBox>
            </S.HeaderFlexBox>
          </S.HeaderButtonBoxDiv>
        </S.DrawWrapperUPDiv>
        <S.DrawWrapperDOWNdiv>
          <S.ContainerDiv>
            <S.DrawTitleBox>
              <S.DrawWriteTitleH3>
                오늘의 마음 날씨는 어떤지
                <br />
                그림으로 그려볼까요?
              </S.DrawWriteTitleH3>
              <S.DrawTitleFlexIcon>
                <S.TrashcanDiv onClick={onClickInitToggleHandler} />
                <S.DownloadDiv onClick={onClickSaveToggleHandler} />
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
                    colorHandlerWhite();
                  }}
                  style={cursor}
                />
                <S.ThicknessBoxDiv>
                  <S.SecondToggle></S.SecondToggle>
                  <S.ColorEraserSettingDiv>
                    <S.EraserThicknessDiv>
                      {thicknessOptions.map((option, index) => (
                        <S.ThicknessOption
                          key={index}
                          size={option.size}
                          onClick={option.handler}
                        ></S.ThicknessOption>
                      ))}
                    </S.EraserThicknessDiv>
                  </S.ColorEraserSettingDiv>
                </S.ThicknessBoxDiv>
              </S.ToggleBox>

              <S.ColorSettingDiv>
                <S.ColorPaletteFlexDiv>
                  {colors.map((palette, index) => (
                    <S.Palette
                      key={index}
                      color={palette.color}
                      onClick={palette.handler}
                    ></S.Palette>
                  ))}
                  <input
                    type='color'
                    id='color'
                    ref={colorPickerRef}
                    onChange={onChangePickColorHandler}
                    value={colorPickerValue}
                  ></input>
                </S.ColorPaletteFlexDiv>
              </S.ColorSettingDiv>
            </S.CanvasContainer>
            <S.ButtonWrapperDiv>
              <S.PrevButton onClick={onClickPrevBtn}>이전</S.PrevButton>
              <S.NextButton
                onClick={() => {
                  onClickAddBtn();
                  makeImageFile();
                }}
              >
                등록하기
              </S.NextButton>
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
