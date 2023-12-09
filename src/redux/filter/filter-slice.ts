import { createSlice } from '@reduxjs/toolkit';

export const filterState = '';

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
