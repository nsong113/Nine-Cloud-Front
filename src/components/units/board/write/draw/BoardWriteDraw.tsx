import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import * as S from './BoardWriteDraw.styles';
import { useNavigate } from 'react-router-dom';
// import BoardDrawPaper from './BoardDrawPaper';
import ConfrimModal from 'src/components/commons/modals/confirm/confirmModal';
import { IoIosCheckmark } from 'react-icons/io';
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
  const [isPublic, setIsPublic] = useState<boolean>(true);

  const onClickPrevBtn = () => {
    navigate('/post3');
  };
  const onClickSubmitBtn = () => {
    navigate('/main');
  };
  const onClickMoveToCancel = () => {
    setIsModalOpen((prev) => !prev);
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
      x: event.offsetX,
      y: event.offsetY,
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

  const { startPaint, paint, exitPaint, isPainting } = usePen(
    canvasRef,
    getCoordinates,
    color,
    thickness,
    mousePosition,
    setMousePosition
  );

  const [pen, setPen] = useState(true);
  const [thicknessToggle, setThicknessToggle] = useState(false);
  const [init, setInit] = useState(false);

  const onClickPenToggleHandler = () => {
    setPen(!pen);
    setThicknessToggle(false);
  };

  const onClickEraserToggleHandler = () => {
    colorHandlerWhite();
  };

  const onClickThicknessToggleHandler = () => {
    setThicknessToggle(!thicknessToggle);
    console.log(thicknessToggle);
    setPen(false);
  };

  const [colorPickerValue, setColorPickerValue] = useState<string>();

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
    //다운로드 링크
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
    setPen(!init);
  };

  let [postDiaryItem, setPostDiaryItem] = useState<IpostDiaryItem | null>(null);

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

      console.log('file', file);

      // const formData = new FormData();

      // formData.append('image', file);

      setPostDiaryItem({
        EmotionalStatus: Number(localStorage.getItem('countAverage')),
        content: localStorage.getItem('contents'),
        image: file,
        isPublic: isPublic,
      });
    } else {
      console.log('이미지 불러오기 실패');
    }
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

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

  const onChangeIsPublicHandler = () => {
    setIsPublic(!isPublic);
  };

  const onClickGotoPost2 = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClickGotoMain = () => {
    navigate('/main');
  };

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
                오늘의 이슈를 그림으로 기록해보세요!
              </S.DrawWriteTitleH3>
            </S.DrawTitleBox>
            <div>
              <canvas
                ref={canvasRef}
                height={400}
                width={380}
                style={canvasStyle}
              />
              <S.ToggleBox>
                <S.FirstToggle onClick={onClickPenToggleHandler}>
                  펜
                </S.FirstToggle>
                <S.FirstToggle onClick={onClickThicknessToggleHandler}>
                  굵기
                </S.FirstToggle>
                <S.FirstToggle onClick={onClickEraserToggleHandler}>
                  지우개
                </S.FirstToggle>
                <S.FirstToggle onClick={onClickInitToggleHandler}>
                  초기화
                </S.FirstToggle>
                <S.FirstToggle onClick={onClickSaveToggleHandler}>
                  저장하기
                </S.FirstToggle>
              </S.ToggleBox>
              {pen && (
                <>
                  <S.ArrowDiv></S.ArrowDiv>
                  <S.ColorSettingDiv>
                    <S.ColorPaletteFlexDiv>
                      <S.Palette
                        color={'black'}
                        onClick={colorHandlerBlack}
                      ></S.Palette>
                      <S.Palette
                        color={'#FF2323'}
                        onClick={colorHandlerRed}
                      ></S.Palette>
                      <S.Palette
                        color={'#FFC225'}
                        onClick={colorHandlerOrange}
                      ></S.Palette>
                      <S.Palette
                        color={'#EDFF22'}
                        onClick={colorHandlerYellow}
                      ></S.Palette>
                      <S.Palette
                        color={'#16FF4A'}
                        onClick={colorHandlerGreen}
                      ></S.Palette>
                      <S.Palette
                        color={'#4BA9FF'}
                        onClick={colorHandlerBlue}
                      ></S.Palette>
                      <S.Palette
                        color={'#4E12F6'}
                        onClick={colorHandlerPurple}
                      ></S.Palette>
                      <S.Palette
                        color={'#DB00FF'}
                        onClick={colorHandlerPink}
                      ></S.Palette>
                      <input
                        type='color'
                        id='color'
                        ref={colorPickerRef}
                        onChange={onChangePickColorHandler}
                        value={colorPickerValue}
                      ></input>
                    </S.ColorPaletteFlexDiv>
                  </S.ColorSettingDiv>
                </>
              )}
              {thicknessToggle && (
                <>
                  <S.EraserArrowDiv></S.EraserArrowDiv>
                  <S.ColorSettingDiv>
                    <S.EraserThicknessDiv>
                      <S.EraserThicknessBold
                        onClick={EraserBoldHaneler}
                      ></S.EraserThicknessBold>
                      <S.ThicknessBoldMedium
                        onClick={EraserBoldMediumHandler}
                      ></S.ThicknessBoldMedium>
                      <S.EraserThicknessMedium
                        onClick={EraserMediumHandler}
                      ></S.EraserThicknessMedium>
                      <S.ThicknessMediumThin
                        onClick={EraserMediumThinHandler}
                      ></S.ThicknessMediumThin>
                      <S.EraserThicknessThin
                        onClick={EraserThinHandler}
                      ></S.EraserThicknessThin>
                    </S.EraserThicknessDiv>
                  </S.ColorSettingDiv>
                </>
              )}
            </div>
            <S.ToggleDiv>
              <S.ToggleFlexDiv>
                <S.ToggleP>
                  오늘의 일기를 전체공개로 등록해 <br />
                  사람들과 공유해보세요!
                </S.ToggleP>
                <input
                  type='checkbox'
                  checked={isPublic} // 현재 상태에 따라 체크 여부 결정
                  onChange={onChangeIsPublicHandler}
                />
              </S.ToggleFlexDiv>
            </S.ToggleDiv>
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

const canvasStyle = {
  border: '1px solid #C4C4C4',
  borderRadius: '25px',
  margin: '17px auto',
};
