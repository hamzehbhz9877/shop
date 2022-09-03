import React from 'react';
import Wave from "public/images/layered-waves-haikei.svg"
import TommanIcon from "components/toomanIcon/toomanIcon"
import {useRouter} from "next/router";
import {SlidesType} from "components/swiper/imageSlider";


const Slide = (data: SlidesType["slides"][0]) => {
    const {colors, discountPercent, image, title, currentPrice, oldPrice,id} =data

    const router = useRouter()

    const navigateToProductPage=()=>{
        router.push({
            pathname: '/product/[id]/[title]/',
            query: { id: id,title:title.replaceAll(" ","-") },
        })
    }
    return (
        <div role="button" className="card p-0 slide shadow-sm" onClick={navigateToProductPage}>
            <div className="slide__title">
                <img className="slide__title-image" src={image} alt=""/>
                <span className="slide__title-discount-percent">{discountPercent}<span className="percent-sign">%</span></span>
                <img className="slide__title-wave" src={Wave} alt=""/>
            </div>
            <div className="slide__body">
                <h5 className="slide__body-title">{title}</h5>
                <ul className="d-flex">
                    {colors.map((color:string,index:number) => <li key={index} className="slide__body-colors-item" style={{backgroundColor:color}}/>)}
                </ul>
                <div className="d-flex justify-content-end slide__body-price align-items-center">
                    <span className="fw-bolder ms-2 color-mischka text-decoration-line-through slide__body-price-current">{currentPrice}</span>
                    <span className="fw-bold slide__body-price-old">{oldPrice}</span>
                    <TommanIcon/>
                </div>
            </div>
        </div>
    );
};

export default Slide;