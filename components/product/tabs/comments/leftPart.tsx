import React from 'react';
import Comment from "components/comment/comment";


const LeftPart = () => {
    return (
        <div className="user-comments">
            <Comment result={"خریدار"} dislikeCount={1} likeCount={3} user="حمزه بهرامی"
                         description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری بهتر بود در محصولات طلا در چند وزن سلام چه طوری بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                         starCount={3}
            />
            <Comment result={"کاربر"} dislikeCount={1} likeCount={3} user="حمزه بهرامی"
                         description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                         starCount={4}
            />
            <Comment result={"خریدار"} dislikeCount={1} likeCount={3} user="حمزه بهرامی"
                         description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                         starCount={2}
            />
            <Comment result={"خریدار"} dislikeCount={1} likeCount={3} user="حمزه بهرامی"
                         description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                         starCount={1}
            />
        </div>
    );
};

export default LeftPart;