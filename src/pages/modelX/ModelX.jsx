import "./modelX.css"
import modelXImage from "../../components/images/home_item/modelX.jpg"
import Homesection from "../../components/homesection/Homesection"

import HeroImage from "../../components/heroimage/HeroImage";
import modelXHero from "../../components/images/pages_item/modelX-hero.jpg"

const ModelX = () => {
  return (
    <div className="contaienr">
      <section className="section">
        <Homesection header="Model X" description="View Inventory" backgroundImage={modelXImage} />
      </section>
      <section className="section">
        <HeroImage backgroundImage={modelXHero} />
      </section>
    </div>
  )
}

export default ModelX;