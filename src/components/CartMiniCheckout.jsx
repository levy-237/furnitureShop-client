export default function CartMiniCheckout() {
  const handleCheckout = () => {
    alert("checkout is not available yet");
  };
  return (
    <>
      <div className="cartCheckout-mini">
        <section>
          <p>TOTAL</p>
          <span>12 EUR</span>
        </section>
        <button onClick={handleCheckout}>CHECK OUT</button>
      </div>
    </>
  );
}
