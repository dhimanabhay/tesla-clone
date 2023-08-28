import "./model3.css";

//Home Section
import Homesection from "../../components/homesection/Homesection";
import model3Image from "../../components/images/home_item/model3.jpg";

//Hero Section
import HeroImage from "../../components/heroimage/HeroImage";
import model3Hero from "../../components/images/pages_item/model3-hero.jpg";

//Image Grid
import ImageGrid from "../../components/imagegrid/ImageGrid";

//Car Skeleton
import CarSkeleton from "../../components/car_skeleton/CarSkeleton";
import model3_skeleton from "../../components/images/model3/model3-skeleton.jpg"

//Interior
import Y3Interior from "../../components/Y3_interior/Y3_Interior";
import model3_interior from "../../components/images/model3/model3-interior.jpg"

//Slider
import ImageSlider from "../../components/image_slider/ImageSlider";

const Model3 = () => {

  return (
    <div className="container">
      <section className="section">
        <Homesection
          header="Model 3"
          description="View Inventory"
          backgroundImage={model3Image}
        />
      </section>
      <section className="section">
        <HeroImage backgroundImage={model3Hero} />
      </section>
      <section className="section">
        <ImageGrid
          image1={model3Image}
          image2={model3Hero}
          text1={"Model3 image"}
          text1_description={""}
          text2={"Model 3 hero"}
        />
      </section>
      <section className="section">
        <CarSkeleton
          header="safety-first design"
          subHeader="safety"
          description="Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards."
          backgroundImage={model3_skeleton}
        />
      </section>
      <section className="section">
        <Y3Interior 
        header="Built Around the Driver"
        description="The inside of Model 3 is unlike any other vehicle with unrivaled technology, premium materials and plenty of legroom."
        backgroundImage={model3_interior}
        />
      </section>
      <section className="section">
        <ImageSlider 
        backgroundImage={model3_interior}/>
      </section>
    </div>
  );
};

export default Model3;
