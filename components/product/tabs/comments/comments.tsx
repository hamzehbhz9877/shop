import React from "react";
import RightPart from "components/product/tabs/comments/rightPart";
import LeftPart from "components/product/tabs/comments/leftPart";
import Pagination from "components/pagination/pagination";

const Comments = () => {
  return (
    <div className="product__comments" id="comments">
      <h6 className="section-title">دیدگاه ها</h6>
      <div className="d-flex flex-column flex-lg-row gap-4">
        <div style={{ width: "min(420px,100%)" }}>
          <RightPart />
        </div>
        <div className="flex-grow-1">
          <LeftPart />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Comments;
