import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import * as S from './BoardWriteDraw.styles';
import { useNavigate } from 'react-router-dom';
import ConfrimModal from 'src/components/commons/modals/confirm/confirmModal';
import { IpostDiaryItem } from 'src/apis/apiesType';
import useSetColor from 'src/components/commons/hooks/useSetColor';
import useThickness from 'src/components/commons/hooks/useThickness';
import usePen from 'src/components/commons/hooks/usePen';
import { ICoordinate } from './BoardWriteDraw.types';
import { FaCheck } from 'react-icons/fa6';
import { IoMdHeart, IoIosHeartHalf } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import {
  contents,
  countAverage,
  happyA,
  isPublic,
  sadA,
  sleep,
  weather,
} from 'src/states/counter';

const BoardWriteDraw = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const [mousePosition, setMousePosition] = useState<ICoordinate | undefined>(
    undefined
  );
  const [isPublicToday, setIsPublicToday] = useRecoilState<boolean>(isPublic);
  const [isChecked, setIsChecked] = useState(true); //토글 체크 여부
  const [countAverageToday, setCountAverageToday] =
    useRecoilState(countAverage);
  const [weatherToday, setWeatherToday] = useRecoilState(weather);
  const [contentsToday, setContentsToday] = useRecoilState(contents);
  const [temperatureAtom, setTemperature] = useRecoilState<string>(happyA);
  const [humidAtom, setHumid] = useRecoilState<string>(sadA);
  const [sleepAtom, setSleep] = useRecoilState<string>(sleep);

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
  const [colorPickerValue, setColorPickerValue] = useState<string>();

  const onClickPenToggleHandler = () => {
    setPen(!pen);
    setThicknessToggle(false);
  };

  const onClickEraserToggleHandler = () => {
    colorHandlerWhite();
  };

  const onClickThicknessToggleHandler = () => {
    setThicknessToggle(!thicknessToggle);
    setPen(false);
  };

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
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const onChangeIsPublicHandler = () => {
    setIsPublicToday(!isPublicToday);
    setIsChecked(!isChecked);
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

      setPostDiaryItem({
        EmotionalStatus: countAverageToday,
        content: contentsToday,
        image: file,
        isPublic: isPublicToday,
        sentence: localStorage.getItem('sentence'),
        weather: weatherToday,
        temperature: temperatureAtom,
        humid: humidAtom,
        sleep: sleepAtom,
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
                <S.FirstPenToggle onClick={onClickPenToggleHandler}>
                  펜
                </S.FirstPenToggle>
                <S.FirstEraserToggle
                  onClick={onClickEraserToggleHandler}
                ></S.FirstEraserToggle>
                <S.ThicknessBoxDiv>
                  <S.SecondToggle
                    onClick={onClickThicknessToggleHandler}
                  ></S.SecondToggle>
                  <S.ColorEraserSettingDiv>
                    <S.EraserThicknessDiv>
                      <S.EraserThicknessThin
                        onClick={EraserThinHandler}
                      ></S.EraserThicknessThin>
                      <S.ThicknessMediumThin
                        onClick={EraserMediumThinHandler}
                      ></S.ThicknessMediumThin>
                      <S.EraserThicknessMedium
                        onClick={EraserMediumHandler}
                      ></S.EraserThicknessMedium>
                      <S.ThicknessBoldMedium
                        onClick={EraserBoldMediumHandler}
                      ></S.ThicknessBoldMedium>
                      <S.EraserThicknessBold
                        onClick={EraserBoldHaneler}
                      ></S.EraserThicknessBold>
                    </S.EraserThicknessDiv>
                  </S.ColorEraserSettingDiv>
                </S.ThicknessBoxDiv>
              </S.ToggleBox>

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
            </S.CanvasContainer>
            <S.ToggleDiv>
              <S.ToggleFlexDiv>
                <S.ToggleP>
                  오늘의 일기를 전체공개로 등록해 <br />
                  사람들과 공유해보세요!
                </S.ToggleP>
                <S.DiaryToggleTitleDiv>
                  <S.CustomToggle
                    id='customToggle'
                    checked={isChecked}
                    icons={{
                      checked: <IoMdHeart />,
                      unchecked: <IoIosHeartHalf />,
                    }}
                    onChange={onChangeIsPublicHandler}
                  />
                </S.DiaryToggleTitleDiv>
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
