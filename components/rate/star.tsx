import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRate = () => {
  return (
    <div className="d-flex color-buttercup opacity-80">
      <FaStarHalfAlt />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  );
};

export default StarRate;
