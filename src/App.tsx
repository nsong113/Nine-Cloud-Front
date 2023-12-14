import React from 'react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
// import {
//   Provider,
//   TypedUseSelectorHook,
//   useDispatch,
//   useSelector,
// } from 'react-redux';
// import store from './redux/config/configStore';
// import type { RootState, AppDispatch } from './redux/config/configStore';

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const queryClient = new QueryClient();

export default function App() {
  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
    // </Provider>
  );
}
