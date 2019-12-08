import React from 'react'
import './Background.css'

const Background = () => (
    <svg className="background-svg" preserveAspectRatio="none" viewBox="0 0 1440 1024" xmlns="http://www.w3.org/2000/svg">
        <g id="background-group">
            <path id="front" d="M0 0H1440V1024L0 910.5V0Z" fill="#1B0D43"/>
            <path id="back" d="M0 0V1024L1440 727.5V0H0Z" fill="#2A1270"/>
        </g>
    </svg>
)
export default Background