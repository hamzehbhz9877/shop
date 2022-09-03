import React from 'react';
import {FaCircle, FaPhone, FaStar} from "react-icons/fa";


const specification=[
    {title:"طرح",value:"طرح دار"},
    {title:"استایل لباس",value:"آزاد"},
    {title:"نوع فاق",value:"بلند"},
    {title:"نحوه بسته شدن",value:"بندی"},
    {title:"مورد استفاده",value:"اسپرت، روزمره، مهمانی"},
]
const ProductSpecification = () => {
    return (
        <div className="product__specification">
            <div className="color-mischka font-14">
                <span>شلوار</span>
                <span className="text-splitter-slash">/</span>
                <span>اسلش</span>
            </div>
            <h4 className="product__specification-title font-20">عنوان محصول</h4>
            <div className="d-flex align-items-center color-mischka font-13">
                <span className="product__specification-vote">
                    <FaStar className="color-buttercup ms-1 opacity-80"/>
                    4.7 از 15 رای
                </span>
                <FaCircle className="text-splitter-dot"/>
                <span className="product__specification-vote">9 دیدگاه</span>
                <FaCircle className="text-splitter-dot"/>
                <span className="product__specification-vote">2 پرسش</span>
                <div className="flex-grow-1 product__specification-line"/>
            </div>

            <div className="my-5">
                <h6 className="font-17">ویژگی ها</h6>
            <ul>
                {specification.map((record,index)=>
                    <li key={index}><span className="color-mischka product__specification-property d-inline-block">{record.title}{" "}:</span><span>{record.value}</span>
                    </li>)}
            </ul>
            </div>

            <div className="color-mischka font-15">
                <p className="pb-1 m-0">
                    <FaPhone className="ms-2"/>
                    آماده ارسال</p>
                <p className="m-0">
                    <FaPhone className="ms-2"/>
                    گارانتی اسالت و سلامت فیزیکی کالا</p>
            </div>
        </div>
    );
};

export default ProductSpecification;