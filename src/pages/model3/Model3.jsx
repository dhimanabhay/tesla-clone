import "./model3.css";
import model3Image from "../../components/images/home_item/model3.jpg"
import Homesection from "../../components/homesection/Homesection"

import HeroImage from "../../components/heroimage/HeroImage";
import model3Hero from "../../components/images/pages_item/model3-hero.jpg"
import ImageGrid from "../../components/imagegrid/ImageGrid";

const Model3 = () => {
  return (
    <div className="container">
      <section className="section">
        <Homesection header="Model 3" description="View Inventory" backgroundImage={model3Image} />
      </section>
      <section className="section">
        <HeroImage backgroundImage={model3Hero} />
      </section>
      <section className="section">
        <ImageGrid 
          image1={model3Image}
          image2={model3Hero}
          text1={"Model3 image"}
          text2={"Model 3 hero"}
        />
      </section>
    </div>
  );
};

export default Model3;
