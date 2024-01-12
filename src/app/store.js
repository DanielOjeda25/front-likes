import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../componentes/Navbar/Hook/lenguajeSlice';
export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
})