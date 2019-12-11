import React, { Component } from 'react'
import './LandingPage.css'

import NameSVG from '../../components/NameSVG/NameSVG'
import Bicycle from '../../components/Bicycle/Bicycle'

class LandingPage extends Component{
    render() {
        return (
            <>
                <div className="landing-section sticky-nav">
                    <div className="nav-logo">
                        <NameSVG/>
                    </div>
                    <svg className="background-svg" id="back" preserveAspectRatio="none" viewBox="0 0 1440 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H1440V1024L0 910.5V0Z" fill="#1B0D43"/>
                    </svg>
                    <svg className="background-svg" id="front" preserveAspectRatio="none" viewBox="0 0 1440 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V1024L1440 727.5V0H0Z" fill="#2A1270"/>
                    </svg>
                </div>
                <div className="test-space">
                    <Bicycle/>
                </div>
            </>
        )
    }
}
export default LandingPage