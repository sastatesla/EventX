// Updated Navbar.js
import React, { useState } from "react";
import { FaHome, FaBriefcase, FaUsers, FaNetworkWired } from "react-icons/fa";
import { RiUserLine, RiMoreLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { MdHomeFilled } from "react-icons/md";


import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`container ${isMenuOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar">
      <div className="LogoCont">
        <div className="Fiddle">F</div>
        <div className="logo">iddle</div>
        </div> 
        <ul className="sidebar-links">
          <li>
            <NavLink to="/" className="link" activeClassName="active">
              <div className="links-div">
              <div className="NavIcon">
                <MdHomeFilled className="icon" />
              </div>
              <div className="Navname">Home</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Opportunities" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <TbTargetArrow className="icon" />
              </div>
              <div className="Navname">Opportunities</div>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Community" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <FaUsers className="icon" />
              </div>
              <div className="Navname">Community</div>
            </div>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/network" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <FaNetworkWired className="icon" />
              </div>
              <div className="Navname">Network</div>
            </div>
            </NavLink>
          </li> */}
          <hr className="divider"></hr>
        </ul>
      </div>
    
      <div className="content">
        {/* Rest of your content goes here */}
      </div>
    </div>
  );
};

export default Navbar;
