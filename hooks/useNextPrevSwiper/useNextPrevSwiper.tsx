import React from 'react';

const UseNextPrevSwiper = () => {
    const [swiper, setSwiper] = React.useState<any>(undefined);
    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);

    const afterInit=()=>{
        if (swiper){
            swiper.navigation.prevEl = prevRef.current;
            swiper.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }

    return {prevRef,nextRef,setSwiper,afterInit};
};

export default UseNextPrevSwiper;