import "./CarSkeleton.css";
import "../../fonts/GothamBook.ttf";

import { motion } from "framer-motion";

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
            <p className="description_p">{description}</p>
          </div>
        </div>
        <div>
          <div className="skeleton-leftButtons">
            <button className="skeleton-leftButton">Order Now</button>
            <button className="skeleton-leftButton">View Inventory</button>
          </div>
        </div>
      </div>
      <div className="skeleton-right">
        <div
          className="skeleton-image_div"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="skeleton-list">
            <motion.ul
              className="skeleton-leftBottom"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <li>Side Impact Protection</li>
              <li>Rigid Structure</li>
              <li>Very Low Rollover Risk </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSkeleton;
