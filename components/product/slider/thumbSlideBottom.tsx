import React from "react";
import { ThumbSlidesType } from "components/product/slider/thumbSlider";
import Image from "next/image";

const ThumbSlideBottom = (data: ThumbSlidesType["slides"][0]) => {
  return (
    <div className="product__thumb-slides-bottom" role="button">
      <Image src={data.image} layout={"fill"} alt="" />
    </div>
  );
};

export default ThumbSlideBottom;
