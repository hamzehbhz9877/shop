import React from 'react';
import Order from "components/order/order";

const Orders = () => {
    return (
        <>
            <h6 className="section-title">آخرین سفارش ها</h6>
            <div className="d-flex  gap-3 flex-wrap">
                <div className="flex-grow-1">
                    <Order type="جاری"/>
                </div>
                <div className="flex-grow-1">
                    <Order type="تحویل شده"/>
                </div>
                <div className="flex-grow-1">
                    <Order type="مرجوع شده"/>
                </div>
                <div className="flex-grow-1">
                    <Order type="لغو شده"/>
                </div>
            </div>
        </>
    );
};

export default Orders;