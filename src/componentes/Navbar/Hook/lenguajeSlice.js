// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'es', // Establece el idioma predeterminado
  reducers: {
    toggleLanguage: (state) => (state === 'es' ? 'en' : 'es'),
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
