// import ImageSlider from "domain/panel/dashboard/purchases/imageSlider";
import {slides} from "api/slides";
import {useInView} from "react-intersection-observer";
import {Suspense} from "react";
import dynamic from 'next/dynamic'

const DynamicImageSlider = dynamic(() => import('components/swiper/imageSlider'), {suspense: true});

const breakpointOption = {
    1200: {slidesPerView: 4,slidesPerGroup:4},
    992: {slidesPerView: 3,slidesPerGroup:3},
    768: {slidesPerView: 2,slidesPerGroup:2},
    0: {slidesPerView: 1,slidesPerGroup:1},
}

const Purchases = () => {
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce:true
    });
    return (
        <div className="mt-5">
            <h6 className="section-title">خرید های پر تکرار</h6>
            <Suspense fallback={<div>...</div>}>
                <div ref={ref}>
                    {inView && <DynamicImageSlider SwiperOptions={{breakpoints:breakpointOption}}
                                                   slides={slides}/>}
                </div>
            </Suspense>
        </div>
    );
};

export default Purchases;