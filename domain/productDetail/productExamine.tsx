import React from "react";
import Introduction from "components/product/tabs/introduction";
import Specifications from "components/product/tabs/specifications";
import Comments from "components/product/tabs/comments/comments";
import Questions from "components/product/tabs/questions";
import TabItems from "components/product/tabs/item";

const ProductExamine = () => {
  return (
    <div className="card mt-3 product__detail">
      <TabItems />
      <Introduction />
      <Specifications />
      <Comments />
      <Questions />
    </div>
  );
};

export default ProductExamine;
