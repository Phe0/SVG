import React from 'react'
import './NameSVG.css'

const NameSvg = () => (
    <>

    <svg className="name-logo" viewBox="0 0 1040 576" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="PedroFeo">
            <path className="P" id="PArco2" strokeDasharray="1000" strokeDashoffset="1000" d="M0 178H383C383 178 463.5 178 463.5 96.5C463.5 15 383 15 383 15H0" stroke="#EFEFEF" stroke-width="30">
                <animate attributeType="CSS" attributeName="stroke-dashoffset" from="1000" to="0" begin="1.6s" fill="freeze" dur="0.6s" />
            </path>
            <path className="P" id="PArco1" strokeDasharray="1000" strokeDashoffset="1000" d="M0 15.0028L383 15C383 15 463.483 15 463.483 96.47C463.483 177.94 383 177.94 383 177.94L0 177.943" stroke="#EFEFEF" stroke-width="30">
                <animate attributeType="CSS" attributeName="stroke-dashoffset" from="1000" to="0" begin="1.6s" fill="freeze" dur="0.6s" />
            </path>
            <path className="P" id="P" strokeDasharray="600" strokeDashoffset="0" d="M15 275L15 177.94M15 177.94V15H96.5C96.5 15 176.983 15 176.983 96.47C176.983 177.94 96.5 177.94 96.5 177.94H15Z" stroke="#EFEFEF" stroke-width="30">
                <animate attributeType="CSS" attributeName="stroke-dashoffset" from="0" to="422" begin="1.4s" fill="freeze" dur="0.2s" />
            </path>
            <path className="remove" id="e1" d="M119.895 236.261H168.5C168.5 222.862 157.531 212 144 212C130.469 212 119.5 222.862 119.5 236.261V241.739C119.5 255.138 130.469 266 144 266C150.356 266 156.146 263.604 160.5 259.674" stroke="#EFEFEF" stroke-width="18">

            </path>
            <path className="remove" id="d" d="M257.5 170L257.5 215.559M257.5 215.559V266H232.343C232.343 266 207.5 266 207.5 240.779C207.5 215.559 232.343 215.559 232.343 215.559H257.5Z" stroke="#EFEFEF" stroke-width="18">

            </path>
            <path className="remove" id="r" d="M296.5 275L296.5 245M296.5 213L296.5 245M296.5 245C296.5 245 305.5 224 330 224" stroke="#EFEFEF" stroke-width="18">

            </path>
            <path className="remove" id="o1" d="M413.5 244C413.5 256.151 403.65 266 391.5 266C379.35 266 369.5 256.151 369.5 244V237C369.5 224.85 379.35 215 391.5 215C403.65 215 413.5 224.85 413.5 237V244Z" stroke="#EFEFEF" stroke-width="18">

            </path>
            <path id="H" d="M537.5 275V178.5M537.5 81L537.5 178.5M638.5 275V178.5M638.5 81V178.5M537.5 178.5H638.5" stroke="#EFEFEF" stroke-width="30">

            </path>
            <circle className="remove" id="ponto" cx="678.5" cy="266" r="9" fill="#EFEFEF">

            </circle>
            <g id="feo">
                <path id="F" d="M823 275V178M948 96H823V178M823 178H882" stroke="#EFEFEF" stroke-width="30">

                </path>
                <path id="e2" d="M898.895 236.761H947.5C947.5 223.362 936.531 212.5 923 212.5C909.469 212.5 898.5 223.362 898.5 236.761V242.239C898.5 255.638 909.469 266.5 923 266.5C929.356 266.5 935.146 264.104 939.5 260.173" stroke="#EFEFEF" stroke-width="18">

                </path>
                <path id="o2" d="M1030.5 244.5C1030.5 256.65 1020.65 266.5 1008.5 266.5C996.35 266.5 986.5 256.65 986.5 244.5V237.5C986.5 225.35 996.35 215.5 1008.5 215.5C1020.65 215.5 1030.5 225.35 1030.5 237.5V244.5Z" stroke="#EFEFEF" stroke-width="18">

                </path>
            </g>
        </g>
    </svg>



    {/* <svg className="name-logo" viewBox="0 0 1040 576" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="PedroFeo">
            <path className="P" id="PArco" strokeDasharray="1000" strokeDashoffset="1000" d="M0 15.0028L383 15C383 15 463.483 15 463.483 96.47C463.483 177.94 383 177.94 383 177.94L0 177.943" stroke="#EFEFEF" stroke-width="30">
                <animate attributeType="CSS" attributeName="stroke-dashoffset" from="1000" to="0" begin="0.6s" fill="freeze" dur="0.3s" />
            </path>
            <path className="P" id="P" strokeDasharray="600" strokeDashoffset="0" d="M15 275L15 177.94M15 177.94V15H96.5C96.5 15 176.983 15 176.983 96.47C176.983 177.94 96.5 177.94 96.5 177.94H15Z" stroke="#EFEFEF" stroke-width="30">
                <animate attributeType="CSS" attributeName="stroke-dashoffset" from="0" to="422" begin="0.4s" fill="freeze" dur="0.2s" />
            </path>
            <path className="remove" id="e1" d="M119.895 236.261H168.5C168.5 222.862 157.531 212 144 212C130.469 212 119.5 222.862 119.5 236.261V241.739C119.5 255.138 130.469 266 144 266C150.356 266 156.146 263.604 160.5 259.674" stroke="#EFEFEF" stroke-width="18">
            </path>
            <path className="remove" id="d" d="M257.5 170L257.5 215.559M257.5 215.559V266H232.343C232.343 266 207.5 266 207.5 240.779C207.5 215.559 232.343 215.559 232.343 215.559H257.5Z" stroke="#EFEFEF" stroke-width="18">

            </path>
            <path className="remove" id="r" d="M296.5 275L296.5 245M296.5 213L296.5 245M296.5 245C296.5 245 305.5 224 330 224" stroke="#EFEFEF" stroke-width="18">

            </path>
            <path className="remove" id="o1" d="M413.5 244C413.5 256.151 403.65 266 391.5 266C379.35 266 369.5 256.151 369.5 244V237C369.5 224.85 379.35 215 391.5 215C403.65 215 413.5 224.85 413.5 237V244Z" stroke="#EFEFEF" stroke-width="18">

            </path>
            <path id="H" d="M537.5 275V178.5M537.5 81L537.5 178.5M638.5 275V178.5M638.5 81V178.5M537.5 178.5H638.5" stroke="#EFEFEF" stroke-width="30">

            </path>
            <circle className="remove" id="ponto" cx="678.5" cy="266" r="9" fill="#EFEFEF">

            </circle>
            <g id="feo">
                <path id="F" d="M823 275V178M948 96H823V178M823 178H882" stroke="#EFEFEF" stroke-width="30">

                </path>
                <path id="e2" d="M898.895 236.761H947.5C947.5 223.362 936.531 212.5 923 212.5C909.469 212.5 898.5 223.362 898.5 236.761V242.239C898.5 255.638 909.469 266.5 923 266.5C929.356 266.5 935.146 264.104 939.5 260.173" stroke="#EFEFEF" stroke-width="18">

                </path>
                <path id="o2" d="M1030.5 244.5C1030.5 256.65 1020.65 266.5 1008.5 266.5C996.35 266.5 986.5 256.65 986.5 244.5V237.5C986.5 225.35 996.35 215.5 1008.5 215.5C1020.65 215.5 1030.5 225.35 1030.5 237.5V244.5Z" stroke="#EFEFEF" stroke-width="18">

                </path>
            </g>
        </g>
    </svg> */}
    </>
)
export default NameSvg