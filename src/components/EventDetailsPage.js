import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db, auth } from './firebase';
import './EventDetailsPage.css';


const EventDetailsPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventCategory: '',
    eventDate: '',
    registrationFee: '',
    eventTime: '',
    previewImageUrl: '',
    coverImageUrl: '',
  });

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const user = auth.currentUser;
        const userId = user.uid;
        const eventDoc = await getDoc(doc(db, 'events', eventId)); 
        if (eventDoc.exists()) {
          setEventDetails(eventDoc.data());
        }
      } catch (error) {
        console.error('Error fetching event details: ', error);
      }
    };
  
    fetchEventDetails();
  }, [eventId]);
  
  const handleEditClick = () => {
    navigate(`/EventsListingForm/${eventId}`);
  };

  const handleUpdateClick = async () => {
    const eventRef = doc(db, 'events', eventId);
    try {
      await updateDoc(eventRef, {
        eventName: eventDetails.eventName,
        eventCategory: eventDetails.eventCategory,
        eventDate: eventDetails.eventDate,
        registrationFee: eventDetails.registrationFee,
        eventTime: eventDetails.eventTime,
        previewImageUrl: eventDetails.previewImageUrl,
        coverImageUrl: eventDetails.coverImageUrl,
      });
      alert('Event details updated successfully!');
    } catch (error) {
      console.error('Error updating event details: ', error);
    }
  };

  return (
    <div className="event-details-page">
      {/* <h2>Event Details</h2> */}
      <form>
        <div className="form-group">
        <div className="form-group">
          {/* <label>Cover Image</label> */}
          <img src={eventDetails.coverImageUrl} alt="Cover" />
        </div>
        <div className="category-dropdown">
          <label htmlFor="eventCategory">Event Category</label>
          <select
            id="eventCategory"
            value={eventDetails.eventCategory}
            onChange={(e) => setEventDetails(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Conference">Conference</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        </div>
        {/* <div className="form-group">
          <label>Preview Image</label>
          <img src={eventDetails.previewImageUrl} alt="Preview" />
        </div> */}
        

        <div className="form-group">
          {/* <label>Event Name</label> */}
          <h1> {eventDetails.eventName} </h1>
        </div>
        <div className="form-group">
          <label>Date Time</label>
          <h3>{eventDetails.eventDate} </h3>
        </div>
        <div className="form-group">
          <label>Fee</label>
          <h3>{eventDetails.registrationFee} </h3>
        </div>
        <div className="form-group">
          <label>Event Time</label>
          <h3>{eventDetails.eventTime} </h3>
        </div>

        <div className="form-buttons">
          {/* <button type="button" onClick={handleEditClick}>
            Edit
          </button> */}
          <button type="button" onClick={handleUpdateClick}>
            RegisterNow
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventDetailsPage;
