import React, { useState, useEffect } from 'react';
import './EventsPage.css';
import { collection, getDocs, where, query, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from './firebase';
import { FaPlus, FaTrash } from 'react-icons/fa'; // Import the delete icon
import { useNavigate } from 'react-router-dom';
import EventDetailsPage from './EventDetailsPage';

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [deleteEventId, setDeleteEventId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userId = auth.currentUser.uid; 
          const eventsQuery = query(collection(db, 'events'));
          const querySnapshot = await getDocs(eventsQuery);

          const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setEventsData(data);
        }
      } catch (error) {
        console.error('Error fetching events data: ', error);
      }
    };

    fetchData();
  }, [deleteEventId]); 

  const handleEventCardClick = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  const handlePlusClick = () => {
    navigate('/EventsListingForm');
  };

  const handleDeleteIconClick = async (eventId) => {
    try {
      const eventRef = doc(db, 'events', eventId);
      await deleteDoc(eventRef);
      setDeleteEventId(eventId); // Trigger re-fetch after deletion
    } catch (error) {
      console.error('Error deleting event: ', error);
    }
  };

  return (
    <div className="events-page">
      <div className="page-header">
        <h2>Events </h2>
        {/* <div className="total-events-card">
          <h3>Total Events</h3>
          <p>{eventsData.length}</p>
        </div> */}
        {/* <div className="total-registrations-card">
          <h3>Total Registrations</h3>
          <p>{eventsData.reduce((total, event) => total + parseInt(event.registrations), 0)}</p>
        </div> */}
        {/* <div className="fab" onClick={handlePlusClick}>
          <FaPlus />
        </div> */}
      </div>
      <div className="event-cards">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="event-card"

          >
            {/* <div className="delete-icon" onClick={() => handleDeleteIconClick(event.id)}>
              <FaTrash />
            </div> */}
            <img src={event.previewImageUrl} alt="Event Preview" />
            <h2>{event.eventName}</h2>
            <div className="registration-icon">
              <h3>{event.registrations}</h3>
            </div>
            <p>Date: {event.registrationDate}</p>
            <p>Time: {event.eventDate}</p>
            <div className='DetailsBtnCont'>
              <button className='DetailsBtn' onClick={() => handleEventCardClick(event.id)}>
                View Details
              </button>
              {/* <button className='DetailsBtn'>View Participants</button> */}
            </div>
          </div>
        ))}
      </div>
      
      {selectedEventId && (
        <EventDetailsPage
          eventId={selectedEventId}
          onClose={() => setSelectedEventId(null)}
        />
      )}
    </div>
  );
};

export default EventsPage;
