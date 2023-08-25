import "./Y3_Interior.css";

const InteriorIntro = ({ backgroundImage, header, description }) => {
  return (
    <div className="intro-container">
      <div
        className="intro-top"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="intro-list">
          <ul>
            <li>15 inch display</li>
            <li>Over the air software updates</li>
            <li>Expansive glass roof gives more headroom and UV protection</li>
          </ul>
        </div>
      </div>
      <div className="intro-bottom">
        <div className="intro-left">
          <h1>{header}</h1>
        </div>
        <div className="intro-right">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InteriorIntro;
