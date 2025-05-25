import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Film, FilmsState } from './filmTypes';
import { fetchFilms } from './filmThunks';

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
