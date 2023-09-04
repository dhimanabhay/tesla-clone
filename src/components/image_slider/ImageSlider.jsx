import { useEffect, useState } from "react";
import "./ImageSlider.css";

//https://www.youtube.com/watch?v=tXlZCW26bto&t=544s
//12:30/18:28

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoPlay = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  useEffect(() => {
    setTimeout(() => {
      autoPlay();
    }, 5000);
  })



  return (
    <div className="imageSlider-container">
      <div className="imageSlider-top">
        <div className="imageSlider-images">
          <div className="imageSlider-buttons">
            <BsChevronCompactLeft size={30} onClick={prevSlide} />
          </div>
          <div className="imageSlider-image_div"
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
            
          </div>
          <div className="imageSlider-buttons">
            <BsChevronCompactRight size={30} onClick={nextSlide} />
          </div>
        </div>
      </div>
      <div className="imageSlider-bottom">
        <div className="imageSlider-slide">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={
                slideIndex === currentIndex
                  ? "imageSlider-dots dotActive"
                  : "imageSlider-dots"
              }
            >
              <RxDotFilled size={30} />
            </div>
          ))}
        </div>
        <div className="imageSlider-title">
          <h2>{slides[currentIndex].head}</h2>
        </div>
        <div className="imageSlider-description">
          <p>{slides[currentIndex].value}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
