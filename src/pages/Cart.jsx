import { Axios } from "axios";
import { useEffect, useState } from "react";
import axios from "axios";
import CartComp from "../components/CartComp";
import { Link } from "react-router-dom";
import CartCheckout from "../components/CartCheckout";
import CartMiniCheckout from "../components/CartMiniCheckout";
export default function Cart() {
  const [cartData, setCartData] = useState();
  const items = localStorage.getItem("id");
  const [totalPrice, setTotalPrice] = useState(0);
  const deleteObjectId = async (id) => {
    // Remove the item from local storage
    const existingIds = localStorage.getItem("id");
    if (existingIds.includes(",")) {
      const regex = new RegExp(id + ",");
      const updatedIds = existingIds.replace(regex, "");
      localStorage.setItem("id", updatedIds);
    } else {
      const updatedIds = existingIds.replace(id, "");
      localStorage.setItem("id", updatedIds);
    }

    // Refetch the data
    fetchData();
  };

  const idArray = items.split(",");

  const fetchData = async () => {
    try {
      const promises = idArray.map(async (id) => {
        if (idArray.length >= 1 || idArray === "") {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/products/${id}`
          );
          return response.data;
        } else {
          return null;
        }
      });

      const newData = await Promise.all(promises);
      setCartData(newData);
    } catch (error) {
      console.error(error);
    }
  };
  ////extra checking because of error in development
  useEffect(() => {
    const newTotalPrice = cartData
      ? cartData.reduce(
          (total, item) =>
            item.product && item.product.price
              ? total + item.product.price
              : total,
          0
        )
      : 0;

    setTotalPrice(newTotalPrice);
    fetchData();
  }, [idArray]);
  return (
    <>
      {idArray.some((str) => str === "") ? (
        <div className="cart-empty">
          <h1>YOU HAVE NO ITEMS IN CART</h1>
          <Link to="/shop">CONTINUE SHOPPING</Link>
        </div>
      ) : (
        <div className="cart-page">
          {cartData &&
            cartData.map((item, i) => {
              return (
                <div key={i}>
                  <CartComp
                    product={item.product}
                    deleteObjectId={deleteObjectId}
                  />
                </div>
              );
            })}
          <CartCheckout totalPrice={totalPrice} />
          <CartMiniCheckout />
        </div>
      )}
    </>
  );
}
