import "./modelX.css"

//Home Section
import Homesection from "../../components/homesection/Homesection"
import modelXImage from "../../components/images/home_item/modelX.jpg"

//Hero Section
import HeroImage from "../../components/heroimage/HeroImage";
import modelXHero from "../../components/images/pages_item/modelX-hero.jpg"

//Image Grid
import ImageGrid from "../../components/imagegrid/ImageGrid";

//Car Skeleton
import CarSkeleton from "../../components/car_skeleton/CarSkeleton";
import modelX_skeleton from "../../components/images/modelX/modelX-skeleton.jpg"

const ModelX = () => {
  return (
    <div className="container">
      <section className="section">
        <Homesection header="Model X" description="View Inventory" backgroundImage={modelXImage} />
      </section>
      <section className="section">
        <HeroImage backgroundImage={modelXHero} />
      </section>
      <section className="section">
        <ImageGrid
          image1={modelXImage}
          image2={modelXHero}
          text1={"Model X image"}
          text1_description={""}
          text2={"Model X hero"}
        />
      </section>
      <section className="section">
        <CarSkeleton
          header="safety-first design"
          subHeader="safety"
          description="Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards."
          backgroundImage={modelX_skeleton}
        />
      </section>
    </div>
  );
};

export default ModelX