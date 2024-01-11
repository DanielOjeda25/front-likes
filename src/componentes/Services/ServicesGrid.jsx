import { buttonsInstagram, instagram } from "../Svgs/Instagram";
import { buttonsDataTwitter, twitter } from "../Svgs/Twitter";
import { buttonsDatayoutube, youtube } from "../Svgs/Youtube";
import { buttonsDatafacebook, facebook } from "../Svgs/facebook";
import ServicesCards from "./ServicesCards";

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 p-4" id="services">
      <ServicesCards
        to={'/services/instagram'}
        svg={instagram}
        title="Instagram"
        buttons={buttonsInstagram}
      />
      <ServicesCards
        to={'/services/facebook'}
        svg={facebook}
        title="Facebook"
        buttons={buttonsDatafacebook}
      />
      <ServicesCards
        to={'/services/youtube'}
        svg={youtube}
        title="Youtube"
        buttons={buttonsDatayoutube}
      />
      <ServicesCards
        to={'/services/twitter'}
        svg={twitter}
        title="X-Twitter"
        buttons={buttonsDataTwitter}
      />
    </div>
  );
};

export default ServicesGrid;
