import "./modelS.css"

//Home Section
import modelSImage from "../../components/images/modelS/modelS.jpg"
import Homesection from "../../components/homesection/Homesection"

//Hero Section
import HeroImage from "../../components/heroimage/HeroImage";
import modelSHero from "../../components/images/modelS/modelS-hero.jpg"

//Image Grid
import ImageGrid from "../../components/imagegrid/ImageGrid";

//Car Skeleton
import CarSkeleton from "../../components/car_skeleton/CarSkeleton";
import modelS_skeleton from "../../components/images/modelS/modelS-skeleton.jpg"

const ModelS = () => {
  return (
    <div className="container">
      <section className="section">
        <Homesection header="Model S" description="View Inventory" backgroundImage={modelSImage} />
      </section>
      <section className="section">
        <HeroImage backgroundImage={modelSHero} />
      </section>
      <section className="section">
        <ImageGrid
          image1={modelSImage}
          image2={modelSHero}
          text1={"Model S image"}
          text1_description={""}
          text2={"Model S hero"}
        />
      </section>
      <section className="section">
        <CarSkeleton
          header="safety-first design"
          subHeader="safety"
          description="Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards."
          backgroundImage={modelS_skeleton}
        />
      </section>
    </div>
  );
};

export default ModelS