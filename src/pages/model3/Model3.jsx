import "./model3.css";

//Home Section
import Homesection from "../../components/homesection/Homesection";
import model3Image from "../../components/images/model3/model3.jpg";

//Hero Section
import HeroImage from "../../components/heroimage/HeroImage";
import model3Hero from "../../components/images/model3/model3-hero.jpg";

//Image Grid
import ImageGrid from "../../components/imagegrid/ImageGrid";

//Car Skeleton
import CarSkeleton from "../../components/car_skeleton/CarSkeleton";
import model3_skeleton from "../../components/images/model3/model3-skeleton.jpg";

//Interior
import Y3Interior from "../../components/Y3_interior/Y3_Interior";
import model3_interior from "../../components/images/model3/model3-interior.jpg";

//Slider
import ImageSlider from "../../components/image_slider/ImageSlider";
import car1 from "../../components/images/model3/carousel/model3-carousel-1.jpg";
import car2 from "../../components/images/model3/carousel/model3-carousel-2.jpg";
import car3 from "../../components/images/model3/carousel/model3-carousel-3.jpg";
import car4 from "../../components/images/model3/carousel/model3-carousel-4.jpg";

const Model3 = () => {
  const slides = [
    {
      head: "15 inch touchscreen",
      value:
        "A minimal interior aesthetic—with all controls accessible on the central 15-inch touchscreen and the steering wheel.",
      url: car1,
    },

    {
      head: "Spacious Cabin",
      value:
        "The forward-designed instrument panel provides even more legroom in the front, for a spacious passenger cabin.",
      url: car2,
    },

    {
      head: "Storage and Charging",
      value:
        "The premium center console is modern and efficient, with plenty of covered storage and charging for two smartphones.",
      url: car3,
    },

    {
      head: "Max Legroom",
      value:
        "The back seat is very comfortable—with maximum legroom and beautiful views through the all-glass roof.",
      url: car4,
    },
  ];
  
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
        <ImageSlider slides={slides} />
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
    </div>
  );
};

export default Model3;
