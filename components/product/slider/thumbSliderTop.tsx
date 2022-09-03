import React from 'react';
import {ThumbSlidesType} from "components/product/slider/thumbSlider";
import image from "public/images/layered-waves-haikei.svg"

const ThumbSlideTop =(data: ThumbSlidesType["slides"][0])  => {
    return (
        <div className="product__thumb-slides-top">
            <img src={data.image} alt=""/>
        </div>
    );
};

export default ThumbSlideTop;