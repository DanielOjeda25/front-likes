// instagramSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_CALCULAR } from '../../../config';

const initialState = {
  selectedService: null,
  cantidad: '',
  finalPrice: null,
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
    setFinalPrice: (state, action) => {
      state.finalPrice = action.payload;
    },
  },
});

export const { selectService, setCantidad, setFinalPrice } = instagramSlice.actions;
export const selectSelectedService = (state) => state.instagram.selectedService;
export const selectCantidad = (state) => state.instagram.cantidad;
export const selectFinalPrice = (state) => state.instagram.finalPrice;

// Thunk para realizar la petición
export const calcularPrecioAsync = (service, cantidad) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `${API_CALCULAR}/calculated-price?id-service=${service}&quantity=${cantidad}`
    );

    dispatch(setFinalPrice(response.data.price));
  } catch (error) {
    console.error('Error al calcular el precio:', error);
  }
};

export default instagramSlice.reducer;
