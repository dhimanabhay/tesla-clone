import { useState, useEffect } from "react";
import "./ImageSlider.css";

//https://www.youtube.com/watch?v=tXlZCW26bto&t=544s
//12:30/18:28

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = ({ items }) => {
  const slides = [
    {
      head: "15 inch touchscreen",
      value:
        "A minimal interior aesthetic—with all controls accessible on the central 15-inch touchscreen and the steering wheel.",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },

    {
      head: "Spacious Cabin",
      value:
        "The forward-designed instrument panel provides even more legroom in the front, for a spacious passenger cabin.",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },

    {
      head: "Storage and Charging",
      value:
        "The premium center console is modern and efficient, with plenty of covered storage and charging for two smartphones.",
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },

    {
      head: "Max Legroom",
      value:
        "The back seat is very comfortable—with maximum legroom and beautiful views through the all-glass roof.",
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

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

  // const delay = 1000;

  // useEffect(() => {
  //   setTimeout(
      
  //     () =>
  //       setCurrentIndex((currentIndex) =>
  //         currentIndex === slides.length - 1 ? 0 : currentIndex + 1
        
  //         ),
  //     delay
  //   );
  //   console.log("timeout");
  //   return () => {};
  // }, []);

  return (
    <div className="imageSlider-container">
      <div className="imageSlider-top">
        <div className="imageSlider-images">
          <div className="imageSlider-buttons">
            <BsChevronCompactLeft size={30} onClick={prevSlide} />
          </div>
          <div className="imageSlider-image_div"
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
            {/* <img
              className="imageSlider-image"
              src={slides[currentIndex].url}
              alt="model33"
            /> */}
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
