import "./modelS.css"
import modelSImage from "../../components/images/home_item/modelS.jpg"
import Homesection from "../../components/homesection/Homesection"

import HeroImage from "../../components/heroimage/HeroImage";
import modelSHero from "../../components/images/pages_item/modelS-hero.jpg"

const ModelS = () => {
  return (
    <div className="container">
      <section className="section">
        <Homesection header="Model S" description="View Inventory" backgroundImage={modelSImage} />
      </section>
      <section className="section">
        <HeroImage backgroundImage={modelSHero} />
      </section>
    </div>
  );
};

export default ModelS