import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import Landing from '../images/Landing.png';

const Card = ({ imageSrc }) => {
  return (
    <div className="Carouselcard">
      <img src={imageSrc} alt="Carousel-Card Image" />
    </div>
  );
};

const Carousel = () => {
  const cardData = [
    Landing,
    Landing,
    Landing,
    Landing,
    Landing,
    Landing,
    Landing,
    Landing,

  ];

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed:500,
    autoplay: true,
      autoplaySpeed: 2000
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cardData.map((imageSrc, index) => (
          <Card key={index} imageSrc={imageSrc} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
