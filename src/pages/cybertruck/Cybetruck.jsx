import "./cybertruck.css"
import Homesection from "../../components/homesection/Homesection"
import cyberImage from "../../components/images/home_item/cybertruck.jpg"

import HeroImage from "../../components/heroimage/HeroImage";
import cyberHero from "../../components/images/pages_item/cyber-hero.jpg"
const Cybetruck = () => {
  return (
    <div className="container">
      <section className="section">
        <Homesection header="Cyber Truck" description="View Inventory" backgroundImage={cyberImage} />
      </section>
      <section className="section">
        <HeroImage backgroundImage={cyberHero} />
      </section>
    </div>
	
  )
}

export default Cybetruck