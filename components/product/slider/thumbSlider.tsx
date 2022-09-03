import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Thumbs, FreeMode} from "swiper";
import CustomButtons from "components/swiper/customNavigationButton";
import UseNextPrevSwiper from "hooks/useNextPrevSwiper/useNextPrevSwiper";
import ThumbSlideBottom from "components/product/slider/thumbSlideBottom";
import ThumbSlideTop from "components/product/slider/thumbSliderTop";
import useBreakpoint from 'use-breakpoint';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {BREAKPOINTS} from "pages/_app";
import {log} from "util";


// const breakpoint = {
//     1200: {slidesPerView: 4},
//     992: {slidesPerView: 3},
//     768: {slidesPerView: 2},
//     0: {slidesPerView: 1},
// }

export type ThumbSlidesType = {
    slides: Array<{ image: string, id: number }>
}

const ThumbSlider = ({slides}: ThumbSlidesType) => {
    const bulletRef = useRef<any>(null)
    const [thumbsSwiper, setThumbsSwiper] = useState(null) as any
    const {nextRef, prevRef, setSwiper, afterInit} = UseNextPrevSwiper()
    const {minWidth, maxWidth} = useBreakpoint(BREAKPOINTS, 'tablet');

    return (
        <div className="product__thumb-slides">
            <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                onAfterInit={afterInit}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={{prevEl: prevRef?.current, nextEl: nextRef?.current}}
                updateOnWindowResize
                pagination={{clickable: true, el: bulletRef?.current}}
                onSwiper={setSwiper}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <ThumbSlideTop {...slide}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <ThumbSlideBottom {...slide}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <CustomButtons bulletRef={bulletRef} nextRef={nextRef} prevRef={prevRef}/>
        </div>
    );
};

export default ThumbSlider;