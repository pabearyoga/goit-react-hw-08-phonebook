import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filters: '',
  isOpen: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setFilter, setIsOpen } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
