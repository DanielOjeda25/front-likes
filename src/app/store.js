import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../componentes/Navbar/Hook/lenguajeSlice';
import InstagramReducer from '../pages/services/Hooks/serviciosInstagram';
import FacebookReducer from '../pages/services/Hooks/serviciosFacebook';
import YoutubeReducer from '../pages/services/Hooks/serviciosYoutube';
import InstagramCompraReducer from '../componentes/Instagram/Hooks/InstagramSlice'
import FacebookCompraReducer from '../componentes/Facebook/Hooks/FacebookSlice'
import YoutubeCompraReducer from '../componentes/Youtube/Hooks/YoutubeSlice'
export const store = configureStore({
  reducer: {
    language: languageReducer,
    serviciosInstagram: InstagramReducer,
    serviciosFacebook: FacebookReducer,
    serviciosYouTube: YoutubeReducer,
    instagram: InstagramCompraReducer,
    facebook: FacebookCompraReducer,
    youtube: YoutubeCompraReducer
  },
})