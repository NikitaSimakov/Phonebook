import { filterState } from './state';
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    setFilterState(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterState } = filterSlice.actions;
