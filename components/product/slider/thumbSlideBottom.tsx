import React from 'react';
import {ThumbSlidesType} from "components/product/slider/thumbSlider";

const ThumbSlideBottom =(data: ThumbSlidesType["slides"][0])  => {
    return (
        <div className="product__thumb-slides-bottom" role="button">
            <img src={data.image} alt=""/>
        </div>
    );
};

export default ThumbSlideBottom;