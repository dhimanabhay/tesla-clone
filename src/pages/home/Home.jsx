import Homesection from "../../components/homesection/Homesection";
import Homevideo from "../../components/homevideo/Homevideo";
import modelSImage from "../../components/images/modelS/modelS.jpg";
import model3Image from "../../components/images/model3/model3.jpg";
import modelXImage from "../../components/images/modelX/modelX.jpg";
import cyberImage from "../../components/images/cybertruck/cybertruck.jpg";

import "./home.css";


const Home = () => {
  return (
    <div className="container">
      <section className="section">
        <Homevideo />
      </section>
      <section className="section">
        <Homesection
          header="Model 3"
          description="View Inventory"
          backgroundImage={model3Image}
        />
      </section>
      <section className="section">
        <Homesection
          header="Model S"
          description="View Inventory"
          backgroundImage={modelSImage}
        />
      </section>
      <section className="section">
        <Homesection
          header="Model X"
          description="View Inventory"
          backgroundImage={modelXImage}
        />
      </section>
      <section className="section">
        <Homesection
          header="Cyber Truck"
          description="View Inventory"
          backgroundImage={cyberImage}
        />
      </section>
    </div>
  );
};

export default Home;
