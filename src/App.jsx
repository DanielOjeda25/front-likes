import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Instagram from "./pages/services/Instagram";
import Facebook from "./pages/services/Facebook";
import Twitter from "./pages/services/Twitter";
import Youtube from "./pages/services/Youtube";
import Preguntas from "./pages/faq";
import ComprarInstagram from "./pages/services/ComprarInstagram";
import Pagos from "./pages/Pagos";
import ComprarFacebbok from "./pages/services/ComprarFacebook";
import ComprarYoutube from "./pages/services/ComprarYoutube";
import ComprarTwitter from "./pages/services/ComprarTwitter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/faq",
    element: <Preguntas />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/services/instagram",
    element: <Instagram />
  },
  {
    path: "/services/instagram/comprar/:serviceId",
    element: <ComprarInstagram />
  },
  {
    path: "/services/facebook",
    element: <Facebook />
  },
  {
    path: "/services/facebook/comprar/:serviceId",
    element: <ComprarFacebbok />
  },
  {
    path: "/services/twitter",
    element: <Twitter />
  },
  {
    path: "/services/twitter/comprar/:serviceId",
    element: <ComprarTwitter />
  },
  {
    path: "/services/youtube",
    element: <Youtube />
  },
  {
    path: "/services/youtube/comprar/:serviceId",
    element: <ComprarYoutube />
  },
  {
    path: "/pagos",
    element: <Pagos />
  }
]);

export default router;