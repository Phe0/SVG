import React, { Component } from 'react'
import NameSVG from '../../components/NameSVG/NameSVG'
import Background from '../../components/Background/Background'
import './LandingPage.css'

class LandingPage extends Component{
    render() {
        return (
            <>
                <div className="landing-section sticky-nav">
                    <NameSVG/>
                    <Background/>
                </div>
                <div className="test-space">

                </div>
            </>
        )
    }
}
export default LandingPage