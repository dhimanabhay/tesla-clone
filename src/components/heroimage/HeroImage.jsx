// import "./Homesection.css";

const HeroImage = ({ backgroundImage }) => {
    return (
        <div
            className="homeSection-image_background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        />
    );
};

export default HeroImage;
