import "./CarSkeleton.css";
import "../../fonts/GothamBook.ttf"

const CarSkeleton = ({ header, subHeader, description, backgroundImage }) => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-left">
        <div className="skeleton-leftTop">
          <div className="skeleton-headings">
            <h3>{subHeader}</h3>
            <h1>{header}</h1>
          </div>
          <div className="skeleton-text">
            <p>{description}</p>
          </div>
        </div>
        <div className="skeleton-leftBottom">
          <div className="skeleton-leftButtons">
            <button className="skeleton-leftButton">Order Now</button>
            <button className="skeleton-leftButton">View Inventory</button>
          </div>
        </div>
      </div>
      <div className="skeleton-right">
        <img src={backgroundImage} alt="" />
      </div>
    </div>
  );
};

export default CarSkeleton;
