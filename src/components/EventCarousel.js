import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventCarousel.css';

import Landing from '../images/Landing.png';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends, FaShare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import moment from 'moment';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const EventCard = ({ imageSrc, date, title, venue, price, linkTo }) => {
  return (
    <Link to={linkTo} className="EventCarouselCardLink">
      <div className="EventCarouselCard">
        <img src={imageSrc} alt="Event Card Image" />
        <div className="CardDetails">
        <div className="DateTime">
          <IconContext.Provider value={{ style: { fontSize: '12px', marginRight: '5px' } }}>
            <div>
              <FaCalendarAlt />
            </div>
          </IconContext.Provider>
          {moment(date).format('MMMM D, YYYY')}
        </div>
        <h3 className="Title">{title}</h3>
        <div className="Venue">{venue}</div>
        <div className="CardFooter">
          <span className="Price">{price}</span>
          <IconContext.Provider value={{ style: { fontSize: '14px', marginLeft: '5px', marginRight: '5px' } }}>
            <div>
              <FaUserFriends />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ style: { fontSize: '14px' } }}>
            <div>
              <FaShare />
            </div>
          </IconContext.Provider>
        </div>        </div>
      </div>
    </Link>
  );
};

const EventCarousel = () => {
  const cardData = [
    { imageSrc: Landing, date: new Date(), title: 'Event 1', venue: 'Venue 1', price: '$10', linkTo: '/EventDetail' },
    { imageSrc: Landing, date: new Date(), title: 'Event 2', venue: 'Venue 2', price: '$15', linkTo: '/event2' },
    { imageSrc: Landing, date: new Date(), title: 'Event 3', venue: 'Venue 3', price: 'Free', linkTo: '/event3' },
    { imageSrc: Landing, date: new Date(), title: 'Event 4', venue: 'Venue 4', price: 'Free', linkTo: '/event4' },
    // Add more event data as needed
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Event-carousel-container">
      <Slider {...settings} className="eventcard">
        {cardData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </Slider>
    </div>
  );
};

export default EventCarousel;
