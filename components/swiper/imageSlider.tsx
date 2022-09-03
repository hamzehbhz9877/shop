import React, {useRef} from 'react';
import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";
import Slide from "components/slide/slide";
import CustomButtons from "components/swiper/customNavigationButton";
import UseNextPrevSwiper from "hooks/useNextPrevSwiper/useNextPrevSwiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useRouter} from "next/router";


export type SlidesType = {
    slides: Array<{
        image: string, discountPercent: number,
        title: string, colors: Array<string>, currentPrice: number, oldPrice: number,id:number
    }>
    SwiperOptions?:SwiperProps
}

const ImageSlider = ({slides,SwiperOptions}: SlidesType) => {
    const bulletRef = useRef(null)
    const {nextRef, prevRef,setSwiper,afterInit} = UseNextPrevSwiper()

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                onAfterInit={afterInit}
                spaceBetween={18}
                navigation={{prevEl: prevRef?.current, nextEl: nextRef?.current}}
                updateOnWindowResize
                pagination={{clickable: true, el: bulletRef?.current}}
                onSwiper={setSwiper}
                {...SwiperOptions}
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Slide {...slide}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <CustomButtons bulletRef={bulletRef} nextRef={nextRef} prevRef={prevRef}/>
        </div>
    );
};

export default ImageSlider;