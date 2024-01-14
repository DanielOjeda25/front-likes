// instagramSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedService: null,
  cantidad: '',
};

const instagramSlice = createSlice({
  name: 'instagram',
  initialState,
  reducers: {
    selectService: (state, action) => {
      state.selectedService = action.payload;
    },
    setCantidad: (state, action) => {
      state.cantidad = action.payload;
    },
  },
});

export const { selectService, setCantidad } = instagramSlice.actions;
export const selectSelectedService = (state) => state.instagram.selectedService;
export const selectCantidad = (state) => state.instagram.cantidad;

export default instagramSlice.reducer;
