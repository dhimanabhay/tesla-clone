import "./Homesection.css";

const Homesection = ({ backgroundImage, header, description, features = [] }) => {
  return (
    <div
      className="homeSection-image_background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="homeSection-overlay">
        <div className="top-section">
          <h1>{header}</h1>
          <p>{description}</p>
        </div>
        <div className="bottom-section">
          <button>Order Now</button>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  );
};

export default Homesection;
