import "./ImageGrid.css";

const ImageGrid = ({
  image1,
  image2,
  text1,
  text2,
  text1_description,
  text2_description,
}) => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div
          className="grid-images"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>
        <div className="text">
          <h3>{text1}</h3>
          <p>{text1_description}</p>
        </div>
      </div>
      <div className="grid-item">
        <div
          className="grid-images"
          style={{ backgroundImage: `url(${image2})` }}
        ></div>
        <div className="text">
          <h3>{text2}</h3>
          <p>{text2_description}</p>
        </div>
      </div>
    </div>
  );
};
export default ImageGrid;
