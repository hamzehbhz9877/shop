import React from 'react';
import Question from "components/questions/question";
import ReplyQuestion from "components/questions/replyQuestion";
import Pagination from "components/pagination/pagination";

const Questions = () => {
    return (
        <div className="product__questions" id="questions">
            <h6 className="section-title">پرسش ها</h6>
            <div className="product__questions-item">
                <Question dislikeCount={1} likeCount={3} result="کاربر"
                          description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                          user={"حمزه بهرامی"}/>
                {/*  the reply question gets an array   */}
                <ReplyQuestion/>
            </div>
            <div className="product__questions-item">
                <Question dislikeCount={1} likeCount={3} result="کاربر"
                          description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                          user={"حمزه بهرامی"}/>
                <ReplyQuestion/>
            </div>
            <Pagination/>
        </div>
    );
};

export default Questions;