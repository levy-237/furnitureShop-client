// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
import { useContext, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { Context } from "../Context";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
export default function Products({
  data,
  query,
  nmProd,
  setQuery,
  setSelectedPrice,
  selectedPrice,
  paginate,
  setPaginate,
}) {
  const [imgDesc, setImgDesc] = useState(null);
  const { searchInput, setSearchInput, rating, setRating, starReviewDisplay } =
    useContext(Context);
  const storeObjectId = (id) => {
    const existingId = localStorage.getItem("id");
    if (existingId !== null && existingId !== undefined && existingId !== "") {
      const updatedIds = existingId + "," + id;
      const newId = localStorage.setItem("id", updatedIds);
    } else {
      const newId = localStorage.setItem("id", id);
    }
  };
  console.log(paginate);
  console.log(nmProd);
  return (
    <div className="productLayout-wrapper">
      <div className="selected-filter-div">
        <section className="selected-filters">
          {rating ? (
            <p onClick={() => setRating("")}>
              {starReviewDisplay(rating, 12, "#DAA520")}
              <span>x</span>
            </p>
          ) : null}
          {query.company ? (
            <span onClick={() => setQuery({ ...query, company: "" })}>
              {query.company.toUpperCase()} <span>x</span>
            </span>
          ) : null}
          {searchInput ? (
            <span onClick={() => setSearchInput("")}>
              {searchInput.toUpperCase()}
              <span>x</span>
            </span>
          ) : null}
          {selectedPrice ? (
            <span onClick={() => setSelectedPrice(null)}>
              up to {selectedPrice} $<span>x</span>
            </span>
          ) : null}
        </section>
      </div>
      <div className="products">
        {data.map((product, i) => (
          <Link key={i} to={`${product._id}`}>
            <div
              className="product-div"
              onMouseEnter={() => setImgDesc(i)}
              onMouseLeave={() => setImgDesc(null)}
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="product-img"
              />
              {imgDesc === i ? (
                <div className="product-imgBackground">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      storeObjectId(product._id);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              ) : null}

              <div className="product-info">
                <h3>{product.name.toUpperCase()}</h3>
                <span>{product.featured ? "IN STOCK" : "OUT OF STOCK"}</span>
                {starReviewDisplay(product.rating, 17, "#DAA520")}
                <span>{product.rating}</span>
                <p>EUR {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {paginate <= 67 && (
        <p className="p-paginate" onClick={() => setPaginate(paginate + 37)}>
          view more...
        </p>
      )}
    </div>
  );
}
