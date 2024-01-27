export default function paymentMonth({ setPayment, price, paymentMon }) {
  return (
    <>
      <span>
        or
        <select
          onChange={(e) => setPayment(e.target.value)}
          style={{ margin: "0px 7px" }}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
        payments of
        <span style={{ fontSize: "18px", marginLeft: "7px", color: "black" }}>
          {Number(price / paymentMon).toFixed(1)}EUR
        </span>
      </span>
    </>
  );
}
