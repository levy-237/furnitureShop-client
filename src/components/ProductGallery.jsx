import React, { useRef, useEffect, useState } from "react";
import img1 from "../images/img1.avif";
import img2 from "../images/img2.avif";
import img3 from "../images/img3.avif";
import img4 from "../images/img4.jpeg";
import { Link } from "react-router-dom";
import { LazyBackgroundSection } from "../Helpers/LazyBackgroundSection";

export default function ProductGallery() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="product-gallery">
      <LazyBackgroundSection imageUrl={img2}>
        <div>
          <h1>Elevate Your Living Space with Timeless Comfort.</h1>
          <Link to="/shop">
            <span onClick={scrollToTop}>To the shop</span>
          </Link>
        </div>
      </LazyBackgroundSection>

      <LazyBackgroundSection imageUrl={img3}>
        <div>
          <h1>The best quality</h1>
          <Link to="/shop">
            <span onClick={scrollToTop}>Shop the highest rating</span>
          </Link>
        </div>
      </LazyBackgroundSection>

      <LazyBackgroundSection imageUrl={img1}>
        <div>
          <h1>Bring your house to comfort</h1>
          <Link to="/shop">
            <span onClick={scrollToTop}>Browse Our Collection.</span>
          </Link>
        </div>
      </LazyBackgroundSection>

      <LazyBackgroundSection imageUrl={img4}>
        <div>
          <h1>Discover Your Perfect Piece</h1>
          <Link to="/shop">
            <span onClick={scrollToTop}>Shop Now!</span>
          </Link>
        </div>
      </LazyBackgroundSection>
    </div>
  );
}
