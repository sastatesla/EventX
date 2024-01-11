import React from 'react';
import './LandingPage.css';
import LandingRight from '../images/LandingRight.png';


function LandingPage(){
    return(
        <div className="SignUpCont">
            <div className="SLeftCont">
                <h1>Opportunitites are waiting for you</h1>
                <h3>Explore Opportunitite such as competiton, workshops, giggs, artist performances</h3>
                <div className='SignUpInBtn'>
                <a href='/Signup'>                
                <button className="SignUpBtn">Sign Up</button>
                </a>

                <a href='/Signin'>
                <button className="SignInBtn">Sign In</button>
                </a>
                </div>
            </div>
            <div className="SRightCont">
            <img className="RightLandImg" src={LandingRight} alt="Right Landing img"/>


            </div>

        </div>
    )
}

export default LandingPage