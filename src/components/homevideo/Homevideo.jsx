import "./Homevideo.css";
import home_vid from "../images/home_item/home.mp4"

const Homevideo = () => {
    return (
        <div >
            <video id="vid" className="homeVideo-background" autoPlay muted loop>
                <source src={home_vid} type="video/mp4" />
            </video>

            <div className="homeVideo_overlay">
                <div>
                    <h1>Experience Tesla</h1>
                    <h4>Schedule a demo drive today</h4>
                </div>
                <div className="homeVideo_button_div">
                    <button>Demo Drive</button>
                </div>
            </div>
        </div>
    );
};
export default Homevideo;
