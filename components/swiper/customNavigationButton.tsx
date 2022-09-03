import React, {RefObject} from 'react';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

type CustomButtons={
    prevRef:RefObject<any>
    nextRef:RefObject<any>
    bulletRef:RefObject<any>
}

const CustomButtons = React.forwardRef(({bulletRef,nextRef,prevRef}:CustomButtons) => {
    return (
        <div className="mt-4 d-flex align-items-center justify-content-between">
            <div className="d-flex">
                <button className="swiper-button ms-2 bg-transparent" ref={prevRef}>
                    <FaArrowRight/>
                </button>
                <button className="swiper-button bg-transparent" ref={nextRef}>
                    <FaArrowLeft/>
                </button>
            </div>
            <div className="swiper-pagination position-static w-auto" ref={bulletRef}/>
        </div>
    );
});

export default CustomButtons;