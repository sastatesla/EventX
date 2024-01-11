import React, { useEffect, useState } from 'react';
import './Topbar.css';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; // Updated imports

const TopBar = () => {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth(); // Add this line to get the authentication instance
    try {
      await signOut(auth); // Use the signOut function from the Firebase Auth SDK
    } catch (error) {
      console.error('Error during sign out:', error.message);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='topBarCont'>
      <div className="top-bar">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="profile-icon" onClick={toggleDropdown}>
          <IoIosSearch/>
        </div>
        <div className="notification-icon"><IoMdNotificationsOutline/></div>

        {user ? (
          <div className="user-profile">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="profile-image"
                onClick={toggleDropdown}
              />
            ) : (
              <div className="profile-icon" onClick={toggleDropdown}>
                {/* Default icon or placeholder */}
                <IoIosSearch />
              </div>
            )}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="menu-item" onClick={() => console.log('User Info Clicked')}>
                  User Info
                </div>
                <div className="menu-item" onClick={handleSignOut}>
                  Sign Out
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            {/* Add your authentication buttons (e.g., sign-in with Google) here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
