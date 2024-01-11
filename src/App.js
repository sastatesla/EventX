import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Opportunities from './components/Opportunities.js';
import Home from './components/Home.js';
import LandingPage from './components/LandingPage.js';
import SignupForm from './components/Signup.js';
import SigninForm from './components/Signin.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Updated imports
import TopBar from './components/Topbar.js';
import EventDetail from './components/eventdetail.js';
import OpportunityPage from './components/OpportunityPage.js';
import EventsPage from './components/EventPage.js';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            user ? (
              <>
                <Navbar />
                <TopBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Opportunities" element={<OpportunityPage />} />
                  <Route path="/EventDetail" element={<EventDetail />} />
                  <Route path='/Events' element={<EventsPage/>}/>
                  {/* Add more authenticated routes as needed */}
                </Routes>
              </>
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
