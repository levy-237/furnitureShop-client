export default function CartComp({ product, deleteObjectId }) {
  return (
    <>
      <div className="cart-div">
        <section>
          <img src={product.image} alt="cartImage" />{" "}
        </section>
        <div>
          <h1>{product.name.toUpperCase()}</h1>
          <p>{product.company.toUpperCase()}</p>
          <button onClick={() => deleteObjectId(product._id)}>
            REMOVE ITEM
          </button>
        </div>
        <p className="cart-price">{product.price} EUR</p>
      </div>
    </>
  );
}
