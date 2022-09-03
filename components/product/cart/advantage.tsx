import React from 'react';
import {FaPhone} from "react-icons/fa";

const Advantage = () => {
    return (
        <div className="py-3 product__cart-advantage font-13 d-flex justify-content-between fw-bold">
            <div><FaPhone/><span> پرداخت امن</span></div>
            <div><FaPhone/><span>ارسال به موقع</span></div>
            <div><FaPhone/><span>پشتیبانی 24 ساعته</span></div>
        </div>
    );
};

export default Advantage;