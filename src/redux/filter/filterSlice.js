import { createSlice } from '@reduxjs/toolkit';

export const FILTER = 'filter';

export const filterSlice = createSlice({
  name: FILTER,
  initialState: '',
  reducers: {
    setFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
