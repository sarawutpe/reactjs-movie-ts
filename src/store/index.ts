import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import movieSlice from './features/movie/movieSlice';

const reducer = {
  movieSlice
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development'
});

export type RootState = ReturnType<typeof store.getState>;
// export type use for ts
export type Dispatch = typeof store.dispatch;
// option
export const useAppDispatch = () => useDispatch<Dispatch>();
