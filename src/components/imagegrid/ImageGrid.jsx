import './ImageGrid.css';

const ImageGrid = ({ image1, image2, text1, text2, text1_description }) => {
    return (<div className="grid-container">
        <div className="grid-item">
            <img src={image1} alt="Image 1" />
            <div className="text">
                <h3>{text1}</h3>
                <p>{text1_description}</p>
            </div>
        </div>
        <div className="grid-item">
            <img src={image2} alt="Image 2" />
            <div className="text">
                {text2}
            </div>
        </div>
    </div>
    );
};
export default ImageGrid;