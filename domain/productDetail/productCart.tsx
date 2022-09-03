import React from "react";
import ThumbSlider from "components/product/slider/thumbSlider";
import { thumbSlides } from "api/thumbSlides";
import ProductSpecification from "components/product/specifications/productSpecification";
import Cart from "components/product/cart/cart";

type ProductCart = {
  title: string;
};

const ProductCart = ({ title }: ProductCart) => {
  return (
    <>
      <div className="product card d-flex flex-column  flex-lg-row gap-4 bg-white shadow-sm mt-3 ">
        <div
          className="product__thumbSlider"
          style={{ width: "min(430px,100%)" }}
        >
          <ThumbSlider slides={thumbSlides} />
        </div>
        <div className="flex-grow-1">
          <ProductSpecification />
        </div>
        <div style={{ minWidth: "300px" }}>
          <Cart />
        </div>
      </div>
    </>
  );
};

export default ProductCart;
