import React from 'react'
import './Bicycle.css'

const Bicycle = () => (
    <div className="bicycle-area">
        <svg className="bicycle" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 74">
        <g id="bike">
            <g className="rotation" id="Wheel1" stroke="#000">
                <circle id="Ellipse 1" cx="24.5" cy="49.5" r="22.5" strokeWidth="3"/>
                <path id="Line 1" d="M24.605 27l-.21 45"/>
                <path id="Line 4" d="M8.572 65.392L40.54 33.721"/>
                <path id="Line 5" d="M8.428 33.571l31.671 31.968"/>
                <path id="Line 2" d="M2 49.395l45 .21"/>
                <circle id="Ellipse 2" cx="24.5" cy="49.5" r="3" fill="#000"/>
                <circle id="Ellipse 3" cx="24.5" cy="49.5" r="5"/>
            </g>
            <g className="rotation" id="Wheel2" stroke="#000">
                <circle id="Ellipse 1_2" cx="100.5" cy="49.5" r="22.5" strokeWidth="3"/>
                <path id="Line 1_2" d="M100.5 27v45"/>
                <path id="Line 4_2" d="M84.646 65.466l31.82-31.819"/>
                <path id="Line 5_2" d="M84.354 33.646l31.819 31.82"/>
                <path id="Line 2_2" d="M78 49.5h45"/>
                <circle id="Ellipse 2_2" cx="100.5" cy="49.5" r="3" fill="#000"/>
                <circle id="Ellipse 3_2" cx="100.5" cy="49.5" r="5"/>
            </g>
            <path id="body" d="M100.5 49.5L85 11.18m0 0L82.5 5l8-3M85 11.18L46.5 25M85 11.18L55 53m-8.5-28l-22 24.5L55 53m-8.5-28L55 53m-8.5-28l-7-21.5m0 0l8-2m-8 2l-8.5 2" stroke="#000" strokeWidth="3"/>
            <g className="rotation" id="pedal">
                <circle id="Ellipse 4" cx="55.5" cy="52.5" r="6.5" transform="rotate(27.84 55.5 52.5)" fill="#000"/>
                <path id="Line 6" stroke="#000" strokeWidth="3" d="M67.437 58.804L43.563 46.196"/>
            </g>
        </g>
        </svg>
    </div>
)
export default Bicycle