import { useState } from "react";
import { ProductDetailsJSon } from "../Helpers/mockDatas/ProductDetailsJson";
export default function ProductDetails() {
  const [currentDetailNum, setCurrentDetailNum] = useState(1);
  const { id: detailsId } = ProductDetailsJSon.details;
  const { id: shippingId } = ProductDetailsJSon.shipping;
  const { id: returnsId } = ProductDetailsJSon.returns;
  const { id: sustId } = ProductDetailsJSon.Sustainability;

  return (
    <div className="singleProduct-details">
      <div>
        <span
          className={`detailsSpan ${currentDetailNum === 1 ? `active` : ``}`}
          onClick={() => setCurrentDetailNum(1)}
        >
          Details
        </span>
        <span
          className={`detailsSpan ${currentDetailNum === 2 ? `active` : ``}`}
          onClick={() => setCurrentDetailNum(2)}
        >
          Shipping
        </span>
        <span
          className={`detailsSpan ${currentDetailNum === 3 ? `active` : ``}`}
          onClick={() => setCurrentDetailNum(3)}
        >
          Returns
        </span>
        <span
          className={`detailsSpan ${currentDetailNum === 4 ? `active` : ``}`}
          onClick={() => setCurrentDetailNum(4)}
        >
          Sustainability
        </span>
      </div>
      <article>
        {currentDetailNum == detailsId && (
          <p>{ProductDetailsJSon.details.text}</p>
        )}
        {currentDetailNum === shippingId && (
          <p>{ProductDetailsJSon.shipping.text} days</p>
        )}
        {currentDetailNum === returnsId && (
          <p>{ProductDetailsJSon.returns.text} days</p>
        )}
        {currentDetailNum === sustId && (
          <p>{ProductDetailsJSon.Sustainability.text} days</p>
        )}
      </article>
    </div>
  );
}
