import React, { useState, useEffect } from "react";
import './Home.css';
import Landing from '../images/LandingRight.png';
import EventCarousel from "./EventCarousel";
import Carousel from "./Carousel";
import Opportunity from "./Opportunity";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
  const [user, setUser] = useState(null);
  const [dynamicTexts, setDynamicTexts] = useState(['Explore Singing Competition', 'Discover Art Exhibitions', 'Join Coding Challenges']);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => {
      unsubscribe();
      clearInterval(textInterval);
    };
  }, [dynamicTexts]);

  return (
    <div className="Main">
      <div className="MainCont">
        <div className="Landing-Cont">
          <div className="LeftCont">
            <h3>Welcome</h3>
            <h1 className="LandingHeading">{user ? user.displayName || 'User' : 'User'}!</h1>
            <hr />
          </div>
          <div className="MiddleCont">
            <h2>Explore</h2>
            <h3>{dynamicTexts[currentTextIndex]}</h3>
          </div>
          <div className="RightCont">
            <img className="LandingImg" src={Landing} alt="Landing Image" />
          </div>
        </div>
      </div>

      <div className="Carousel">
        <div className="OppHeading">
          <h2>| Featured Opportunities</h2>
        </div>
        <Carousel />
      </div>

      <div className="Opportunities">
        <div className="OppHeading">
          <h2>| Opportunities </h2>
          {/* <h4>| Showcase your skills by participating in various opportunities of your interest.</h4> */}
        </div>
        <EventCarousel />
      </div>

      <div className="OpportunityCont">
        <Opportunity />
      </div>
    </div>
  );
}

export default Home;
