// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: localStorage.getItem('language') || 'es', // Obtener del almacenamiento local o establecer como 'es'
  reducers: {
    toggleLanguage: (state) => {
      const newLanguage = state === 'es' ? 'en' : 'es';
      localStorage.setItem('language', newLanguage); // Almacenar en el almacenamiento local
      return newLanguage;
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
