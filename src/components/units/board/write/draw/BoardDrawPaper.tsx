// import React, {
//   ChangeEventHandler,
//   useCallback,
//   useEffect,
//   useRef,
//   useState,
// } from 'react';
// import { ICanvasProps, ICoordinate } from './BoardWriteDraw.types';
// import * as S from './BoardWriteDraw.styles';
// import { IpostDiaryItem } from 'src/apis/apiesType';
// import { useMutation } from 'react-query';
// import { getDiary, postDiary } from 'src/apis/diary';
// import useSetColor from 'src/components/commons/hooks/useSetColor';
// import useThickness from 'src/components/commons/hooks/useThickness';
// import usePen from 'src/components/commons/hooks/usePen';
// import StaticDrawing from '../../../../commons/hooks/useStaticDrawing';

// const BoardDrawPaper = ({ width, height }: ICanvasProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const colorPickerRef = useRef<HTMLInputElement>(null);
//   const [mousePosition, setMousePosition] = useState<ICoordinate | undefined>(
//     undefined
//   );

//   const getCoordinates = (event: MouseEvent): ICoordinate | undefined => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas: HTMLCanvasElement = canvasRef.current;
//     return {
//       x: event.offsetX,
//       y: event.offsetY,
//     };
//   };

//   const {
//     color,
//     setColor,
//     colorHandlerBlack,
//     colorHandlerRed,
//     colorHandlerBlue,
//     colorHandlerGreen,
//     colorHandlerOrange,
//     colorHandlerYellow,
//     colorHandlerPurple,
//     colorHandlerPink,
//     colorHandlerWhite,
//   } = useSetColor();

//   const {
//     thickness,
//     EraserBoldHaneler,
//     EraserBoldMediumHandler,
//     EraserMediumHandler,
//     EraserMediumThinHandler,
//     EraserThinHandler,
//   } = useThickness();

//   const { startPaint, paint, exitPaint, isPainting } = usePen(
//     canvasRef,
//     getCoordinates,
//     color,
//     thickness,
//     mousePosition,
//     setMousePosition
//   );

//   const [pen, setPen] = useState(true);
//   const [thicknessToggle, setThicknessToggle] = useState(false);
//   const [init, setInit] = useState(false);

//   const onClickPenToggleHandler = () => {
//     setPen(!pen);
//     setThicknessToggle(false);
//   };

//   const onClickEraserToggleHandler = () => {
//     colorHandlerWhite();
//   };

//   const onClickThicknessToggleHandler = () => {
//     setThicknessToggle(!thicknessToggle);
//     console.log(thicknessToggle);
//     setPen(false);
//   };

//   const [colorPickerValue, setColorPickerValue] = useState<string>();

//   useEffect(() => {
//     setColorPickerValue(color);
//   }, [
//     colorHandlerBlack,
//     colorHandlerRed,
//     colorHandlerOrange,
//     colorHandlerYellow,
//     colorHandlerGreen,
//     colorHandlerBlue,
//     colorHandlerPurple,
//     colorHandlerPink,
//   ]);

//   const onChangePickColorHandler: ChangeEventHandler<HTMLInputElement> = (
//     event
//   ) => {
//     const colorPicker = colorPickerRef.current;
//     if (colorPicker) {
//       setColor(event.target.value);
//       setColorPickerValue(event.target.value);
//     }
//   };
//   // useEffect(() => {
//   //   if (!canvasRef.current) {
//   //     return;
//   //   }
//   //   const canvas: HTMLCanvasElement = canvasRef.current;

//   //   canvas.addEventListener('mousedown', startStaticPaint);
//   //   canvas.addEventListener('mousemove', StaticPaint);
//   //   canvas.addEventListener('mouseup', exitStaticPaint);
//   //   canvas.addEventListener('mouseleave', exitStaticPaint);

//   //   return () => {
//   //     // Unmount 시 이벤트 리스너 제거
//   //     canvas.removeEventListener('mousedown', startStaticPaint);
//   //     canvas.removeEventListener('mousemove', StaticPaint);
//   //     canvas.removeEventListener('mouseup', exitStaticPaint);
//   //     canvas.removeEventListener('mouseleave', exitStaticPaint);
//   //   };
//   // }, [startStaticPaint, StaticPaint, exitStaticPaint]);

//   useEffect(() => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas: HTMLCanvasElement = canvasRef.current;

//     canvas.addEventListener('mousedown', startPaint);
//     canvas.addEventListener('mousemove', paint);
//     canvas.addEventListener('mouseup', exitPaint);
//     canvas.addEventListener('mouseleave', exitPaint);

//     return () => {
//       // Unmount 시 이벤트 리스너 제거
//       canvas.removeEventListener('mousedown', startPaint);
//       canvas.removeEventListener('mousemove', paint);
//       canvas.removeEventListener('mouseup', exitPaint);
//       canvas.removeEventListener('mouseleave', exitPaint);
//     };
//   }, [startPaint, paint, exitPaint]);

//   const onClickSaveToggleHandler = () => {
//     //다운로드 링크
//     const image = canvasRef.current?.toDataURL('image/png').split(',')[1];
//     if (image) {
//       const byteCharacters = atob(image);

//       const byteNumbers = new Array(byteCharacters.length);
//       for (let i = 0; i < byteCharacters.length; i++) {
//         byteNumbers[i] = byteCharacters.charCodeAt(i);
//       }
//       const u8arr = new Uint8Array(byteNumbers);
//       const file = new Blob([u8arr], { type: 'image/png' });

//       const downloadLink = document.createElement('a');
//       downloadLink.href = URL.createObjectURL(file);
//       downloadLink.download = 'drawing.png';
//       downloadLink.click();
//     }
//   };

//   //////////////////////////////////////////////////////////////////

//   const onClickInitToggleHandler = () => {
//     saveImg();
//     // setPen(!init);
//     // const canvas = canvasRef.current;
//     // if (canvas) {
//     //   const ctx = canvas.getContext('2d');
//     //   if (ctx) {
//     //     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     //   }
//     // }
//   };

//   ////데이터 post
//   // postDiaryMutation 함수 정의
//   // const { data } = useQuery('getDiary', getDiary);

//   // const postDiaryMutation = useMutation<void, Error, IpostDiaryItem, unknown>(
//   //   postDiary
//   // );

//   const saveImg = () => {
//     const image = canvasRef.current?.toDataURL('image/png').split(',')[1];

//     if (image) {
//       const byteCharacters = atob(image);
//       const byteNumbers = new Array(byteCharacters.length);
//       for (let i = 0; i < byteCharacters.length; i++) {
//         byteNumbers[i] = byteCharacters.charCodeAt(i);
//       }
//       const u8arr = new Uint8Array(byteNumbers);
//       const file = new Blob([u8arr], { type: 'image/png' });
//       const imageUrl = URL.createObjectURL(file);

//       console.log('imageUrl', imageUrl);

//       const formData = new FormData();
//       console.log('file', file);
//       formData.append('picture', file);

//       console.log('formData', formData);
//     } else {
//       console.log('이미지 불러오기 실패');
//     }
//   };

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         height={height}
//         width={width}
//         style={canvasStyle}
//       />
//       <S.ToggleBox>
//         <S.FirstToggle onClick={onClickPenToggleHandler}>펜</S.FirstToggle>
//         <S.FirstToggle onClick={onClickThicknessToggleHandler}>
//           굵기
//         </S.FirstToggle>
//         <S.FirstToggle onClick={onClickEraserToggleHandler}>
//           지우개
//         </S.FirstToggle>
//         <S.FirstToggle onClick={onClickInitToggleHandler}>초기화</S.FirstToggle>
//         <S.FirstToggle onClick={onClickSaveToggleHandler}>
//           저장하기
//         </S.FirstToggle>
//       </S.ToggleBox>
//       {pen && (
//         <>
//           <S.ArrowDiv></S.ArrowDiv>
//           <S.ColorSettingDiv>
//             <S.ColorPaletteFlexDiv>
//               <S.Palette
//                 color={'black'}
//                 onClick={colorHandlerBlack}
//               ></S.Palette>
//               <S.Palette
//                 color={'#FF2323'}
//                 onClick={colorHandlerRed}
//               ></S.Palette>
//               <S.Palette
//                 color={'#FFC225'}
//                 onClick={colorHandlerOrange}
//               ></S.Palette>
//               <S.Palette
//                 color={'#EDFF22'}
//                 onClick={colorHandlerYellow}
//               ></S.Palette>
//               <S.Palette
//                 color={'#16FF4A'}
//                 onClick={colorHandlerGreen}
//               ></S.Palette>
//               <S.Palette
//                 color={'#4BA9FF'}
//                 onClick={colorHandlerBlue}
//               ></S.Palette>
//               <S.Palette
//                 color={'#4E12F6'}
//                 onClick={colorHandlerPurple}
//               ></S.Palette>
//               <S.Palette
//                 color={'#DB00FF'}
//                 onClick={colorHandlerPink}
//               ></S.Palette>
//               <input
//                 type='color'
//                 id='color'
//                 ref={colorPickerRef}
//                 onChange={onChangePickColorHandler}
//                 value={colorPickerValue}
//               ></input>
//             </S.ColorPaletteFlexDiv>
//           </S.ColorSettingDiv>
//         </>
//       )}
//       {thicknessToggle && (
//         <>
//           <S.EraserArrowDiv></S.EraserArrowDiv>
//           <S.ColorSettingDiv>
//             <S.EraserThicknessDiv>
//               <S.EraserThicknessBold
//                 onClick={EraserBoldHaneler}
//               ></S.EraserThicknessBold>
//               <S.ThicknessBoldMedium
//                 onClick={EraserBoldMediumHandler}
//               ></S.ThicknessBoldMedium>
//               <S.EraserThicknessMedium
//                 onClick={EraserMediumHandler}
//               ></S.EraserThicknessMedium>
//               <S.ThicknessMediumThin
//                 onClick={EraserMediumThinHandler}
//               ></S.ThicknessMediumThin>
//               <S.EraserThicknessThin
//                 onClick={EraserThinHandler}
//               ></S.EraserThicknessThin>
//             </S.EraserThicknessDiv>
//           </S.ColorSettingDiv>
//         </>
//       )}
//     </div>
//   );
// };

// export default BoardDrawPaper;

//     const byteNumbers = new Array(byteCharacters.length);
//     for (let i = 0; i < byteCharacters.length; i++) {
//       byteNumbers[i] = byteCharacters.charCodeAt(i);
//     }
//     const u8arr = new Uint8Array(byteNumbers);
//     const file = new Blob([u8arr], { type: 'image/png' });

//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(file);
//     downloadLink.download = 'drawing.png';
//     downloadLink.click();
//   }
// };

//   const onClickInitToggleHandler = () => {
//     saveImg();
//     // setPen(!init);
//     // const canvas = canvasRef.current;
//     // if (canvas) {
//     //   const ctx = canvas.getContext('2d');
//     //   if (ctx) {
//     //     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     //   }
//     // }
//   };

//   ////데이터 post
//   // postDiaryMutation 함수 정의
//   // const { data } = useQuery('getDiary', getDiary);
//   const postDiaryMutation = useMutation<void, Error, IpostDiaryItem, unknown>(
//     postDiary
//   );

//   const saveImg = () => {
//     const image = canvasRef.current?.toDataURL('image/png').split(',')[1];

//     // console.log('image', image);
//     // const imageArray = [];
//     if (image) {
//       // const toBinaryIMG = Buffer.from(image, 'base64').toString('binary');
//       // for (let i = 0; i < toBinaryIMG.length; i += 1) {
//       //   imageArray.push(toBinaryIMG.charCodeAt(i));
//       // }
//       const byteCharacters = atob(image);
//       // console.log('byteCharacters', byteCharacters);

//       const byteNumbers = new Array(byteCharacters.length);
//       for (let i = 0; i < byteCharacters.length; i++) {
//         byteNumbers[i] = byteCharacters.charCodeAt(i);
//       }

//       // console.log('byteNumbers', byteNumbers);

//       const u8arr = new Uint8Array(byteNumbers);

//       // console.log('u8arr', u8arr);

//       const file = new Blob([u8arr], { type: 'image/png' });

//       const imageUrl = URL.createObjectURL(file);

//       console.log('imageUrl', imageUrl);

//       const formData = new FormData();
//       console.log('file', file);
//       formData.append('picture', file);
//       // formData.append('EmotionStatus',  Number(localStorage.getItem('countAverage')));
//       // formData.append('content',  localStorage.getItem('contents'));

//       console.log('formData', formData);

//       const postDiaryItem: IpostDiaryItem = {
//         EmotionStatus: Number(localStorage.getItem('countAverage')),
//         content: localStorage.getItem('contents'),
//         image: formData,
//       };

//       //블롭데이터를 어떻ㅇ게 전송할지/ 보여줄지
//       postDiaryMutation.mutate(postDiaryItem);

//       //다운로드 링크
//       const downloadLink = document.createElement('a');
//       downloadLink.href = URL.createObjectURL(file);
//       downloadLink.download = 'drawing.png';
//       downloadLink.click();

//       // postDiary 함수 호출
//     } else {
//       console.log('이미지 불러오기 실패');
//     }

//     // $.ajax({
//     //   type: 'post',
//     //   url: '/saveImage',
//     //   data: formData,
//     //   processData: false,
//     //   contentType: false,
//     //   success: function (data: any) {
//     //     console.log('이미지 post 성공');
//     //   },
//     // });
//   };

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         height={height}
//         width={width}
//         style={canvasStyle}
//       />
//       <S.ToggleBox>
//         <S.FirstToggle onClick={onClickPenToggleHandler}>펜</S.FirstToggle>
//         <S.FirstToggle onClick={onClickEraserToggleHandler}>
//           지우개
//         </S.FirstToggle>
//         <S.FirstToggle onClick={onClickInitToggleHandler}>초기화</S.FirstToggle>
//         <S.FirstToggle onClick={onClickSaveToggleHandler}>
//           저장하기
//         </S.FirstToggle>
//       </S.ToggleBox>
//       {pen && (
//         <>
//           <S.ArrowDiv></S.ArrowDiv>
//           <S.ColorSettingDiv>
//             <S.ThicknessDiv>
//               <S.ThicknessBold
//                 onClick={onCLickThicknessBoldHaneler}
//               ></S.ThicknessBold>
//               <S.ThicknessMedium
//                 onClick={onClickThicknessMediumHandler}
//               ></S.ThicknessMedium>
//               <S.ThicknessThin
//                 onClick={oonClickThicknessThinHandler}
//               ></S.ThicknessThin>
//             </S.ThicknessDiv>

//             <S.ColorPaletteFlexDiv>
//               <S.Palette
//                 color={'black'}
//                 onClick={onClickBlackPaletteHandler}
//               ></S.Palette>
//               <S.Palette
//                 color={'#FF2323'}
//                 onClick={onClickRedPaletteHandler}
//               ></S.Palette>
//               <S.Palette
//                 color={'#FFC225'}
//                 onClick={onClickOrangePaletteHandler}
//               ></S.Palette>
//               <S.Palette
//                 color={'#EDFF22'}
//                 onClick={onClickYellowPaletteHandler}
//               ></S.Palette>
//               <S.Palette
//                 color={'#16FF4A'}
//                 onClick={onClickGreenPaletteHandler}
//               ></S.Palette>
//               <S.Palette
//                 color={'#4BA9FF'}
//                 onClick={onClickBluePaletteHandler}
//               ></S.Palette>
//               <S.Palette
//                 color={'#4E12F6'}
//                 onClick={onClickPurplePaletteHandler}
//               ></S.Palette>
//               <S.Palette
//                 color={'#DB00FF'}
//                 onClick={onClickPinkPaletteHandler}
//               ></S.Palette>
//             </S.ColorPaletteFlexDiv>
//           </S.ColorSettingDiv>
//         </>
//       )}
//       {eraser && (
//         <>
//           <S.EraserArrowDiv></S.EraserArrowDiv>
//           <S.ColorSettingDiv>
//             <S.EraserThicknessDiv>
//               <S.EraserThicknessBold
//                 onClick={onCLickEraserThicknessBoldHaneler}
//               ></S.EraserThicknessBold>
//               <S.ThicknessBoldMedium
//                 onClick={onCLickThicknessBoldMediumHaneler}
//               ></S.ThicknessBoldMedium>
//               <S.EraserThicknessMedium
//                 onClick={onClickEraserThicknessMediumHandler}
//               ></S.EraserThicknessMedium>
//               <S.ThicknessMediumThin
//                 onClick={onClickThicknessMediumThinHandler}
//               ></S.ThicknessMediumThin>
//               <S.EraserThicknessThin
//                 onClick={oonClickEraserThicknessThinHandler}
//               ></S.EraserThicknessThin>
//             </S.EraserThicknessDiv>
//           </S.ColorSettingDiv>
//         </>
//       )}
//     </div>
//   );
// };

// export default BoardDrawPaper;
