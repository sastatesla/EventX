import React from "react";
import './Home.css';
import Landing from '../images/Landing.png';

function Opportunities(){
    return(
        <div className="Main">
        <div className="MainCont">
            <div className="Landing-Cont">
            <div className="LeftCont">
                <h1 className="LandingHeading">Opportunities </h1>
                <hr></hr>
                <h3>A online platform for students, professionals, artists to participate in competitions, guest lectures and to discuss & share knowledge amongst your community</h3>
                <button className="SignBtn">Sign Up</button>
            </div>
            <div className="RightCont">
                <img className="LandingImg" src={Landing} alt="Landing Image"/>
            </div>

            </div>
        </div>
        </div>
    )
}

export default Opportunities;