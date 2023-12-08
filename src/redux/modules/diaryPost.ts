// import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';
// import { IinitialState } from './modelesType';

// //initial state
// const initialState = {
//   postDiary: {
//     EmotionStatus: 0,
//     content: '',
//     image: '',
//   },
// };

// //reducer
// const postDiarySlice: Slice = createSlice({
//   name: 'postDiaryRTK',
//   initialState,
//   reducers: {
//     // setEmotionStatus: (state: IinitialState, action: PayloadAction<number>) => {
//     //   return {

//     //     state.postDiary.EmotionStatus = action.payload;
//     // };
//     // },

//     setEmotionStatus: (state: IinitialState, action: PayloadAction<number>) => {
//       // ...state.postDiary,
//       state.postDiary.EmotionStatus = action.payload;
//       console.log(state, action.payload);
//     },

//     setContent: (state, action) => {},
//     setImage: (state, action) => {},
//   },
// });

// //export
// const { setEmotionStatus } = postDiarySlice.actions;
// export { setEmotionStatus };
// export default postDiarySlice.reducer;
