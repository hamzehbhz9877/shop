import React from "react";
import Question from "components/questions/question";
import { FaReply } from "react-icons/fa";

const ReplyQuestion = () => {
  return (
    <div className="product__questions-reply">
      <FaReply className="product__questions-reply-icon" />
      <Question
        dislikeCount={1}
        likeCount={3}
        result="کاربر"
        description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"}
        shippingDay={"21 روز پیش"}
        user={"رضا محمدی"}
        reply={true}
      />
      <Question
        dislikeCount={1}
        likeCount={3}
        result="مدیر سایت"
        description={"بهتر بود در محصولات طلا در چند وزن سلام چه طوری"}
        shippingDay={"21 روز پیش"}
        user={"علی یاوری"}
        reply={true}
      />
    </div>
  );
};

export default ReplyQuestion;
