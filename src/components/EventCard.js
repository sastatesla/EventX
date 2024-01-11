// EventCard.jsx
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

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
    <Link to={`/EventDetailsPage/${userId}/${eventId}`} className="event-card-link">
      <div className="event-card">
        <img src={previewImageUrl} alt="Event Preview" />
        <div className="event-details">
          <h3>{eventName}</h3>
          <p>
            <strong>Category:</strong> {eventCategory}
          </p>
          <p>
            <strong>Date:</strong> {moment(eventDate).format('MMMM D, YYYY')}
          </p>
          <p>
            <strong>Time:</strong> {eventTime}
          </p>
          <p>
            <strong>Registration Fee:</strong> {registrationFee}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
