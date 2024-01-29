import { Link } from "react-router-dom";
export default function CartCheckout({ totalPrice }) {
  const handleCheckout = () => {
    alert("checkout is not available yet");
  };
  return (
    <>
      <div className="cart-checkout">
        <div className="cart-total">
          <section>
            <h3>SUBTOTAL</h3>
            <span>{totalPrice ? totalPrice : "0"} EUR</span>
          </section>
          <p>Taxes and shipping calculated at checkout</p>
          <button className="cart-button" onClick={handleCheckout}>
            SECURE CHECKOUT
          </button>
        </div>
        <div className="cart-login">
          <h5>
            Already have an account? <span>Login &gt;</span>
          </h5>
          <p>
            By checking out, I agree to <b>Terms of Use</b> and acknowledge that
            i have read the <b>Privacy Policy</b>
          </p>
          <button className="cart-button">
            <Link to="/shop">CONTINUE SHOPPING</Link>
          </button>
        </div>
      </div>
    </>
  );
}
