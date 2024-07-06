import React from 'react';
import Slider from 'react-slick';
import './PhoneFrame.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phoneImage from './phoneframe.png'; // Update with the correct path

const PhoneFrame = ({ screenshots }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="phone-frame">
      <img src={phoneImage} alt="Phone Frame" className="phone-frame-image" />
      <div className="screenshots">
        <Slider {...settings}>
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-container">
              <img
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="screenshot"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhoneFrame;
