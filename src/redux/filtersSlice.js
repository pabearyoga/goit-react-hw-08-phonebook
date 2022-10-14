import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filters: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
