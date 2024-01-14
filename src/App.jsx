import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Instagram from "./pages/services/Instagram";
import Facebook from "./pages/services/Facebook";
import Twitter from "./pages/services/Twitter";
import Youtube from "./pages/services/Youtube";
import Faq from "./pages/faq";

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
    element: <Faq />
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
    path: "/services/facebook",
    element: <Facebook />
  },
  {
    path: "/services/twitter",
    element: <Twitter />
  },
  {
    path: "/services/youtube",
    element: <Youtube />
  },
]);

export default router;