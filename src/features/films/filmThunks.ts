import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Film } from './filmTypes';

export const fetchFilms = createAsyncThunk<Film[]>(
  'films/fetchFilms',
  async () => {
    const response = await axios.get('https://swapi.py4e.com/api/films/?format=json');
    return response.data.results;
  }
);
