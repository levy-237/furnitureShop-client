import { Context } from "../Context";
import { useContext, useState } from "react";
import { FiPackage } from "react-icons/fi";
import { IoPricetags } from "react-icons/io5";
import PaymentAmount from "../Helpers/PaymentAmount";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import ProductDetails from "./ProductDetails";

export default function ProductInfo({ data }) {
  const { starReviewDisplay } = useContext(Context);
  const [paymentMon, setPaymentMon] = useState(4);

  const storeObjectId = (id) => {
    const existingId = localStorage.getItem("id");
    if (existingId !== null && existingId !== undefined && existingId !== "") {
      const updatedIds = existingId + "," + id;
      const newId = localStorage.setItem("id", updatedIds);
    } else {
      const newId = localStorage.setItem("id", id);
    }
  };
  const handleButton = (availability, id) => {
    if (!availability) {
      storeObjectId(id);
    } else {
      storeObjectId(id);
    }
  };
  return (
    <div className="singleProduct-div">
      <h1>{data.name.toUpperCase()}</h1>
      <div className="singleProduct-review">
        {starReviewDisplay(data.rating, 15, "DAA520")}
        <span>100+ REVIEWS</span>
      </div>
      <section>
        <span>
          <FiPackage />
          FREE SHIPPING
        </span>
        <span>
          <IoPricetags />
          <span> </span>
          5% OFF
        </span>
      </section>
      <div className="singleProduct-price">
        <p>{data.price} EUR</p>
        <span>
          <PaymentAmount
            setPayment={setPaymentMon}
            price={data.price}
            paymentMon={paymentMon}
          />
        </span>
      </div>
      <button
        className="singleProduct-button"
        onClick={() => handleButton(data.featured, data._id)}
      >
        ADD TO CART
      </button>
      <div className="singleProduct-checkout">
        <p>
          <MdOutlineLocalShipping /> <span>7-DAY SHIPPING EUROPE</span>
        </p>
        <p>
          <FaHandsHelping /> <span>5% OF PURCHASE GOES TO CHARITY</span>
        </p>
      </div>
      <p style={{ marginTop: "0px", color: "grey" }}>
        {data.featured ? `IN STOCK` : `OUT OF STOCK`}
      </p>
      <p>
        <b>COMPANY:</b> {data.company.toUpperCase()}
      </p>
      <span
        style={{
          color: "grey",
          fontSize: ".65rem",
        }}
      >
        FOR MEMBERSHIP DISCOUNT PLEASE ENTER YOUR MAIL
      </span>
      <form>
        <input
          type="mail"
          id="search-input"
          placeholder="Enter your search email adress"
        />
        <button type="submit" id="search-button">
          SUBMIT
        </button>
      </form>
      <ProductDetails />
    </div>
  );
}
