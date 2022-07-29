import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import httpClient from '../../../utils/httpClient';
import { InitialState } from './type';

export const getMovieByTrending = createAsyncThunk('movie/getMovieByTrending', async () => {
  const { data } = await httpClient.get('/trending/all/day?api_key=95b9f4200a3da3ec47e1bd53d8044028');
  return data;
});

export const getMovieBySearch = createAsyncThunk('movie/getMovieBySearch', async (payload: string) => {
  const { data } = await httpClient.get('/search/movie?api_key=95b9f4200a3da3ec47e1bd53d8044028&query=' + payload);
  return data;
});

const initialState: InitialState = {
  trendingMovie: null,
  searchMovie: null
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get movie by trending
    builder.addCase(getMovieByTrending.fulfilled, (state, action) => {
      state.trendingMovie = action.payload;
    });
    // get movie by trending
    builder.addCase(getMovieBySearch.fulfilled, (state, action) => {
      state.searchMovie = action.payload;
    });
  }
});

export const movieSelector = (store: RootState) => store.movieSlice;
export default movieSlice.reducer;
