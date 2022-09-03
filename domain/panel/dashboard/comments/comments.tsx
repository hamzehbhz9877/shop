import React from 'react';
import Comment  from "components/comment/comment";

const Comments = () => {
    return (
        <div className="mt-5">
            <h6 className="section-title">اخرین دیدگاه ها</h6>
            <div className="row g-3">
                <div className="col-md-4">
                    <Comment result={"تایید شده"} dislikeCount={1} likeCount={3}
                                 description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                                 starCount={4}
                    />
                </div>
                <div className="col-md-4">
                    <Comment result={"در انتظار تایید"} dislikeCount={2} likeCount={1}
                                 description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                             />
                </div>
                <div className="col-md-4">
                    <Comment result={"رد شده"} dislikeCount={4} likeCount={3}
                                 description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"} shippingDay={"21 روز پیش"}
                                 starCount={1}/>
                </div>
            </div>
        </div>
    );
};

export default Comments;