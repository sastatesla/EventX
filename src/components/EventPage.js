// EventsPage.jsx
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import EventCard from './EventCard'; // Import the EventCard component
import { auth } from './firebase';

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const userId = auth.currentUser.uid;
        const eventsCollection = collection(db, 'users', userId, 'Events');
        const eventsSnapshot = await getDocs(eventsCollection);

        const data = eventsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEventsData(data);
      } catch (error) {
        console.error('Error fetching events data: ', error);
      }
    };

    fetchEventsData();
  }, [db]);

  return (
    <div className="public-events-page">
      <h2>Public Events</h2>
      <div className="events-list">
        {eventsData.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
