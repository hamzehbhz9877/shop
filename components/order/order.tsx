import React from 'react';
import {divElement} from "components/countLabel/countLabel";
import {FaArrowLeft} from "react-icons/fa";
import ToomanIcon from "components/toomanIcon/toomanIcon";


interface OrderType extends divElement{
    type:"جاری"|"تحویل شده"|"مرجوع شده"|"لغو شده"
}

const option = (type: string) =>  ({"جاری": "order__current", "تحویل شده": "order__delivered",
    "مرجوع شده": "order__returned", "لغو شده": "order__canceled"})[type] ?? ""

const Order = ({type,className,...rest}:OrderType) => {
    return (
        <div className={`card order shadow-sm ${className??''}`} {...rest}>
            <div>
                <span className={`badge order__label ${option(type)}`}>{type}</span>
                <div className="order__spec">
                    <span className="color-mischka">5 خرداد 1401</span>
                    <div className="line-splitter"/>
                    <span className="order__code">
                    <span className="color-mischka">کد سفارش {" "}:</span>
                        {" "}
                        <span>160180778</span>
                </span>
                    <div className="line-splitter"/>
                    <span>
                    <span className="color-mischka">مبلغ{" "}:</span>
                        {" "}
                        <span className="fw-bold">195000</span>
                        <ToomanIcon/>
                </span>
                </div>
                <button className="order__details bg-white">
                    <FaArrowLeft />
                </button>
            </div>

        </div>
    );
};

export default Order;