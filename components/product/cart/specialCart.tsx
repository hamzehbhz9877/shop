import React from 'react';
import {FaClock} from "react-icons/fa";
import UseTimer from "hooks/useTimer";

const SpecialCartTimer = () => {
    const {hours,seconds,minutes}=UseTimer({hour:3,min:52,sec:0})
    return (
        <div className="product__off py-2 d-flex justify-content-between align-items-center">
            <div>
                    <span className="fw-bold">
                         <FaClock className="ms-2"/>
                        شگفت انگیز
                    </span>
            </div>
            <div className="product__off-timer font-15">
                <span className="product__off-timer-value">{seconds < 10 ? `0${seconds}` : seconds}</span>
                <span className="colon-splitter">:</span>
                <span className="product__off-timer-value">{minutes < 10 ? `0${minutes}` : minutes}</span>
                <span className="colon-splitter">:</span>
                <span className="product__off-timer-value">{hours < 10 ? `0${hours}` : hours}</span>

            </div>
        </div>
    );
};

export default SpecialCartTimer;