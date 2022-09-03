import React from "react";
import ProductCart from "domain/productDetail/productCart";
import ProductExamine from "domain/productDetail/productExamine";
import SimilarProducts from "domain/productDetail/similarProducts";

const Products = () => {
  return (
    <>
      <ProductCart title={""} />
      <ProductExamine />
      <SimilarProducts />
    </>
  );
};

export default Products;
