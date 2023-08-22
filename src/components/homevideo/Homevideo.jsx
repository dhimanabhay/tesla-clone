import "./Homevideo.css";
import home_vid from "../images/home_item/home.mp4"

const Homevideo = () => {
    return (
        <div >
            {/* <video className="homeVideo-background" autoPlay muted loop playsinline> */}
            <video className="homeVideo-background">
                <source src={home_vid} type="video/mp4" />
            </video>

            <div className="homeVideo-overlay">
                <div>
                    <h1>Experience Tesla</h1>
                    <h4>Schedule a demo drive today</h4>
                </div>
                <div className="homeVideo-button_div">
                    <button>Demo Drive</button>
                </div>
            </div>
        </div>
    );
};
export default Homevideo;
