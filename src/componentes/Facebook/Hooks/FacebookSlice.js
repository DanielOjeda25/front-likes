// facebookSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_CALCULAR } from '../../../config';

const initialState = {
  selectedService: null,
  cantidad: '',
  finalPrice: null,
};

const facebookSlice = createSlice({
  name: 'facebook',
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

export const { selectService, setCantidad, setFinalPrice } = facebookSlice.actions;
export const selectSelectedService = (state) => state.facebook.selectedService;
export const selectCantidad = (state) => state.facebook.cantidad;
export const selectFinalPrice = (state) => state.facebook.finalPrice;

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

export default facebookSlice.reducer;
