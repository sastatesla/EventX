import React, { useState } from 'react';
import './EventDetails.css';
import Landing from '../images/Landing.png';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoGiftOutline } from 'react-icons/io5';
import { CiCalendarDate } from 'react-icons/ci';

function EventDetail() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formValues, setFormValues] = useState({
    leaderName: '',
    teamName: '',
    collegeName: '',
  });

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., send data to Firestore)
    // Reset form values or close the popup after submission
    setShowRegistrationForm(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="EventDetailMain">
      <div className="CoverContainer">
        <img src={Landing} alt="Cover Image" />
      </div>
      <div className="EventInfoContBelowCover">
        <div className="DetailContainerLeft">
          <div className="EventDet">
            <h2>Event Title</h2>

            <div className="IconsContainerWithTitile">
              <div className="titleIcons">
                <HiOutlineLocationMarker />
              </div>
              <div className="IconTitle">
                <p>Location</p>
                <h4>Sector 34, Exhibition Ground, Chandigarh, India</h4>
              </div>
            </div>

            <div className="IconsContainerWithTitile">
              <div className="titleIcons">
                <IoGiftOutline />
              </div>
              <div className="IconTitle">
                <p>Prize Pool</p>
                <h4>Sector 34, Exhibition Ground, Chandigarh, India</h4>
              </div>
            </div>

            <div className="IconsContainerWithTitile">
              <div className="titleIcons">
                <CiCalendarDate />
              </div>
              <div className="IconTitle">
                <p>Date & Time</p>
                <h4>Sector 34, Exhibition Ground, Chandigarh, India</h4>
              </div>
            </div>
          </div>
          <div className="EventDetAbout">
            <h3>All About the event</h3>
            <hr></hr>
          </div>
        </div>

        {/* Popup for Registration Form */}
        {showRegistrationForm && (
          <div className="RegistrationPopup">
            <form onSubmit={handleFormSubmit}>
              <label>
                Leader Name:
                <input
                  type="text"
                  name="leaderName"
                  value={formValues.leaderName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Team Name:
                <input
                  type="text"
                  name="teamName"
                  value={formValues.teamName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                College Name:
                <input
                  type="text"
                  name="collegeName"
                  value={formValues.collegeName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              {/* Add more fields for team members (name, email, college) here */}

              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setShowRegistrationForm(false)}>Close</button>
          </div>
        )}

        <div className="EventDetailContRight">
          <div className="EventInfo">
            <div className="IconsContainerWithTitile">
              <div className="titleIcons">
                <IoGiftOutline />
              </div>
              <div className="IconTitle">
                <p>Team Size</p>
                <h4>1-3</h4>
              </div>
            </div>
            <div className="IconsContainerWithTitile">
              <div className="titleIcons">
                <IoGiftOutline />
              </div>
              <div className="IconTitle">
                <p>Registration Deadline</p>
                <h4>05 Feb</h4>
              </div>
            </div>
            <div className="IconsContainerWithTitile">
              <div className="titleIcons">
                <IoGiftOutline />
              </div>
              <div className="IconTitle">
                <p>Fee</p>
                <h4>Rs 130</h4>
              </div>
            </div>
            <hr></hr>
            <button className="Register-Btn" onClick={handleRegisterClick}>
              Register Now
            </button>
          </div>
          <div className="EventOrgInfo">
            <h3>Opportunity Creator</h3>
            <hr></hr>
            <div className="UserImg">
              <div className="UserProfileImg">
                <img className="ProfileImg" src={Landing} alt="Cover Image" />
              </div>
              <div>
                <div>
                  <h3>Opportunity Creator Name</h3>
                </div>
                <button className="Follow-Btn"> Follow </button>
              </div>
            </div>
            <p>
              Indian Space Research Organisation (ISRO) is the space agency of India. The organisation is involved in
              science, engineering and technology
            </p>
          </div>

          <div className="EventPrizeInfo">
            <h3>Prizes</h3>
            <hr></hr>

            <div className="PrizeInfoCont">
              <div className="IconsContainerWithTitile">
                <div className="titleIcons">
                  <h4>1</h4>
                </div>
                <div className="IconTitle">
                  <p>1st Prize</p>
                  <h4>Rs 130</h4>
                </div>
              </div>

              <div className="IconsContainerWithTitile">
                <div className="titleIcons">
                  <h4>2</h4>
                </div>
                <div className="IconTitle">
                  <p>1st Prize</p>
                  <h4>Rs 130</h4>
                </div>
              </div>

              <div className="IconsContainerWithTitile">
                <div className="titleIcons">
                  <h4>3</h4>
                </div>
                <div className="IconTitle">
                  <p>1st Prize</p>
                  <h4>Rs 130</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
