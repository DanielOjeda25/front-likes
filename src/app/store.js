import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../componentes/Navbar/Hook/lenguajeSlice';
import InstagramReducer from '../pages/services/Hooks/serviciosInstagram';
import FacebookReducer from '../pages/services/Hooks/serviciosFacebook';
import YoutubeReducer from '../pages/services/Hooks/serviciosYoutube';
import TwitterReducer from '../pages/services/Hooks/serviciosTwitter';
import InstagramCompraReducer from '../componentes/Instagram/Hooks/InstagramSlice'
import FacebookCompraReducer from '../componentes/Facebook/Hooks/FacebookSlice'
import YoutubeCompraReducer from '../componentes/Youtube/Hooks/YoutubeSlice'
import TwitterCompraReducer from '../componentes/Twitter/Hooks/twitterSlice'
export const store = configureStore({
  reducer: {
    language: languageReducer,
    serviciosInstagram: InstagramReducer,
    serviciosFacebook: FacebookReducer,
    serviciosYouTube: YoutubeReducer,
    serviciosTwitter: TwitterReducer,
    instagram: InstagramCompraReducer,
    facebook: FacebookCompraReducer,
    youtube: YoutubeCompraReducer,
    twitter: TwitterCompraReducer
  },
})