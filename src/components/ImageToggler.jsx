import noPic2 from "../images/noPic2.jpeg";
import "./components.css";
import { useState } from "react";
export default function ImageToggler({ currentImg, image }) {
  const imgArr = [currentImg, noPic2, noPic2];
  const [imgArrNum, setImgArrNum] = useState(0);

  return (
    <div className="singleProduct-images">
      <img alt="productImg" src={imgArr[imgArrNum]} className="productImg" />
      <section>
        <img
          src={image}
          onClick={() => setImgArrNum(0)}
          className={`singleProductImg-collection ${
            imgArrNum === 0 ? "active" : ""
          }`}
        />
        <img
          src={noPic2}
          onClick={() => setImgArrNum(1)}
          className={`singleProductImg-collection ${
            imgArrNum === 1 ? "active" : ""
          }`}
        />
        <img
          src={noPic2}
          onClick={() => setImgArrNum(2)}
          className={`singleProductImg-collection ${
            imgArrNum === 2 ? "active" : ""
          }`}
        />
      </section>
    </div>
  );
}
