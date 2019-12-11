import React from 'react'
import './Hourglass.css'

const Hourglass = () => (
    <div className="hourglass-area">
        <svg className="hourglass" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 49">
            <mask id="mask0" maskUnits="userSpaceOnUse" x="6" y="3" width="35" height="12">
                <animate id="falling1" attributeType="XML" attributeName="y" from="3" to="33" dur="0.7s" begin="1.4s;falling1.end+2.1s" fill="freeze" />
                <animate id="falling2" attributeType="XML" attributeName="y" from="33" to="3" dur="0.7s" begin="2.8;falling2.end+2.1s" fill="freeze" />
                <animate id="streching1" attributeType="XML" attributeName="height" from="12" to="24" dur="0.35s" begin="1.4s;streching1.end+1.05s" fill="freeze" />
                <animate id="streching2" attributeType="XML" attributeName="height" from="24" to="12" dur="0.35s" begin="1.75s;streching2.end+1.05s" fill="freeze" />
                <path d="M6 3v3.5c0 8.466 6.012 16.296 14 18.108v.784C12.012 27.204 6 35.034 6 43.5V47h35v-3.5c0-8.466-6.012-16.296-14-18.108v-.784c7.988-1.812 14-9.642 14-18.108V3H6z" fill="#FFF"/>
            </mask>
            <g mask="url(#mask0)">
                <path fill="#000" d="M3.5 3h39v44h-39z"/>
            </g>
            <path d="M3 46.5h39M3.5 3h39" stroke="#000" stroke-width="5" stroke-linecap="round"/>
            <path d="M5.5 3v3.5c0 8.466 6.012 16.296 14 18.108v.784c-7.988 1.812-14 9.642-14 18.108V47m35-44v3.5c0 8.466-6.012 16.296-14 18.108v.784c7.988 1.812 14 9.642 14 18.108V47" stroke="#000" stroke-width="3"/>
            <path d="M5.5 3v3.5c0 8.466 6.012 16.296 14 18.108v.784c-7.988 1.812-14 9.642-14 18.108V47m35-44v3.5c0 8.466-6.012 16.296-14 18.108v.784c7.988 1.812 14 9.642 14 18.108V47" stroke="#000" stroke-width="3"/>
        </svg>
    </div>
)
export default Hourglass