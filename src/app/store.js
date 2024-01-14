import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../componentes/Navbar/Hook/lenguajeSlice';
import InstagramReducer from '../pages/services/Hooks/serviciosInstagram';
export const store = configureStore({
  reducer: {
    language: languageReducer,
    serviciosInstagram: InstagramReducer
  },
})