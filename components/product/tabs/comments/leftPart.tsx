import React from "react";
import Comment from "components/comment/comment";
import { FaThumbsUp } from "react-icons/fa";

const LeftPart = () => {
  return (
    <div className="user-comments">
      <p className="color-mischka font-14 pb-2">
        <FaThumbsUp className="color-dodger-blue opacity-80 ms-2" />
        89% (520) نفر از خریداران، این کالا را پیشنهاد کرده اند
      </p>
      <Comment
        result={"خریدار"}
        dislikeCount={1}
        likeCount={3}
        user="حمزه بهرامی"
        description={
          "بهتر بود در محصولات طلا در چند وزن سلام چه طوری بهتر بود در محصولات طلا در چند وزن سلام چه طوری بهتر بود در محصولات طلا در چند وزن سلام چه طوری"
        }
        shippingDay={"21 روز پیش"}
        starCount={3}
      />
      <Comment
        result={"کاربر"}
        dislikeCount={1}
        likeCount={3}
        user="حمزه بهرامی"
        description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"}
        shippingDay={"21 روز پیش"}
        starCount={4}
      />
      <Comment
        result={"خریدار"}
        dislikeCount={1}
        likeCount={3}
        user="حمزه بهرامی"
        description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"}
        shippingDay={"21 روز پیش"}
        starCount={2}
      />
      <Comment
        result={"خریدار"}
        dislikeCount={1}
        likeCount={3}
        user="حمزه بهرامی"
        description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"}
        shippingDay={"21 روز پیش"}
        starCount={1}
      />
    </div>
  );
};

export default LeftPart;
