import React, {Suspense} from 'react';
import {slides} from "api/slides";
import dynamic from "next/dynamic";
import {useInView} from "react-intersection-observer";
import {FaPeace} from "react-icons/fa";

const DynamicImageSlider = dynamic(() => import('components/swiper/imageSlider'), {suspense: true});

const breakpointOption = {
    1200: {slidesPerView: 5,slidesPerGroup:5},
    992: {slidesPerView: 4,slidesPerGroup:4},
    768: {slidesPerView: 3,slidesPerGroup:3},
    600: {slidesPerView: 2,slidesPerGroup:2},
    0: {slidesPerView: 1,slidesPerGroup:1},
}

const SimilarProducts = () => {

    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce:true
    });

    return (
        <div className="similar-products">
            <div className="d-flex align-items-center mb-2">
                <div className="ms-2"></div>
                <div>
                    <h3>محصولات مشابه</h3>
                    <p className="color-oslo-gray my-0">محصولات مشابه که دیگر کاربران سفارش داده اند.</p>
                </div>

            </div>
            <Suspense fallback={<div>...</div>}>
                <div ref={ref}>
                    {inView && <DynamicImageSlider SwiperOptions={{breakpoints:breakpointOption}}
                                                   slides={slides}/>}
                </div>
            </Suspense>
        </div>
    );
};

export default SimilarProducts;