// EventCard.jsx
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiDollarSign } from 'react-icons/fi'; // Import icons from react-icons
import './EventCard.css'; // Import the CSS file for styling

const EventCard = ({
  userId,
  eventId,
  eventName,
  eventCategory,
  eventDate,
  registrationFee,
  eventTime,
  previewImageUrl,
  coverImageUrl,
}) => {
  return (
    <div className='EventsPageCont'>
    <Link to={`/event-details/${eventId}`} className="event-card-link">
      <div className="event-card">
        <img src={previewImageUrl} alt="Event Preview" />
        <div className="event-details">
          <h3>{eventName}</h3>
          <p>
            <strong>Category:</strong> {eventCategory}
          </p>
          <p>
            <strong>Date:</strong> {moment(eventDate).format('MMMM D, YYYY')}
            <FiCalendar className="icon" /> {/* Calendar icon */}
          </p>
          <p>
            <strong>Time:</strong> {eventTime}
            <FiClock className="icon" /> {/* Clock icon */}
          </p>
          <p>
            <strong>Registration Fee:</strong> {registrationFee}
            <FiDollarSign className="icon" /> {/* Dollar sign icon */}
          </p>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default EventCard;
