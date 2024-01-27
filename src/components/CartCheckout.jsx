import { Link } from "react-router-dom";
export default function CartCheckout({ totalPrice }) {
  return (
    <>
      <div className="cart-checkout">
        <div className="cart-total">
          <section>
            <h3>SUBTOTAL</h3>
            <span>{totalPrice ? totalPrice : "0"} EUR</span>
          </section>
          <p>Taxes and shipping calculated at checkout</p>
          <button className="cart-button">SECURE CHECKOUT</button>
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
            <Link>CONTINUE SHOPPING</Link>
          </button>
        </div>
      </div>
    </>
  );
}
