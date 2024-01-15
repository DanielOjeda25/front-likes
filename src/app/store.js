import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../componentes/Navbar/Hook/lenguajeSlice';
import InstagramReducer from '../pages/services/Hooks/serviciosInstagram';
import FacebookReducer from '../pages/services/Hooks/serviciosFacebook';
import InstagramCompraReducer from '../componentes/Instagram/Hooks/InstagramSlice'
import FacebookCompraReducer from '../componentes/Facebook/Hooks/FacebookSlice'
export const store = configureStore({
  reducer: {
    language: languageReducer,
    serviciosInstagram: InstagramReducer,
    serviciosFacebook: FacebookReducer,
    instagram: InstagramCompraReducer,
    facebook: FacebookCompraReducer
  },
})