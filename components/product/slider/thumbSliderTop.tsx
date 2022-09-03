import React from "react";
import { ThumbSlidesType } from "components/product/slider/thumbSlider";
import Image from "next/image";

const ThumbSlideTop = (data: ThumbSlidesType["slides"][0]) => {
  return (
    <div className="product__thumb-slides-top">
      <Image src={data.image} layout={"fill"} alt="" />
    </div>
  );
};

export default ThumbSlideTop;
