import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
  const response = await axios.get('https://swapi.py4e.com/api/films/?format=json');
  return response.data.results;
});

type Film = {
  episode_id: number;
  title: string;
  release_date: string;
  // add more fields if needed
};

type FilmsState = {
  items: Film[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  selected: Film | null;
};

const initialState: FilmsState = {
  items: [],
  status: 'idle',
  selected: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    selectFilm: (state, action: PayloadAction<Film>) => {
      state.selected = action.payload;
    },
    clearSelectedFilm: (state) => {
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilms.fulfilled, (state, action: PayloadAction<Film[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { selectFilm, clearSelectedFilm } = filmsSlice.actions;
export default filmsSlice.reducer;