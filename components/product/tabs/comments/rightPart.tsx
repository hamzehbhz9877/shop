import React from "react";
import LinearRate from "components/rate/linear";
import StarRate from "components/rate/star";
import { FaPlus, FaPlusCircle, FaThumbsUp } from "react-icons/fa";

const linearRate = [
  { title: "کیفیت موارد به کار رفته", value: 4.1 },
  { title: "کیفیت دوخت", value: 3.7 },
  { title: "طراحی", value: 4.6 },
  { title: "ارزش خرید نسبت به قیمت", value: 4.5 },
];
const RightPart = () => {
  return (
    <div className="pe-4 product__comment-right">
      <span>
        <span className="fs-4">4.7</span>
        <span> از 5</span>
      </span>
      <div className="d-flex align-items-center">
        <StarRate />{" "}
        <p className="color-mischka me-2  font-13">1163 نفر امتیاز داده اند</p>
      </div>
      <LinearRate value={linearRate} />

      <button className="btn product__add-comment color-pale-sky">
        <FaPlusCircle className="ms-2" />
        شما هم نظر خود را بنویسید
      </button>
    </div>
  );
};

export default RightPart;
