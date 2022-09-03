import React from 'react';
import RightPart from "components/product/tabs/comments/rightPart";
import LeftPart from "components/product/tabs/comments/leftPart";
import Pagination from "components/pagination/pagination";

const Comments = () => {
    return (
        <div className="product__comments" id="comments">
            <h6 className="section-title">دیدگاه ها</h6>
            <div className="d-flex gap-4">
                <div style={{minWidth:"320px"}}>
                    <RightPart/>
                </div>
                <div className="flex-grow-1">
                    <LeftPart/>
                    <Pagination/>
                </div>
            </div>

        </div>
    );
};

export default Comments;