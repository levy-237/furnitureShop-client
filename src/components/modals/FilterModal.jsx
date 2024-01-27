import "./modal.css";
import { useEffect, useState, useContext, useRef } from "react";
import { Context } from "../../Context";
import { motion } from "framer-motion";
import StarRating from "../../components/StarRating";
export default function filterModal({
  setModal,
  filterModal,
  query,
  setQuery,
  selectedPrice,
  setSelectedPrice,
}) {
  const modalRef = useRef(null);
  const { searchInput, setSearchInput } = useContext(Context);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }} // Initial position off-screen
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.1, ease: "easeOut" },
      }} // Smooth animation to on-screen
      exit={{ x: -500, opacity: 0 }} // Exit animation off-screen
      ref={modalRef}
      className={`filter-modal ${filterModal ? `open` : ""}`}
    >
      <div className="filter-modal-x" onClick={() => setModal(false)}>
        X
      </div>
      <section className="shop-filterModal">
        <div className="filter-name">
          <h4>CATEGORIES</h4>
          <p onClick={(e) => setSearchInput("chair")}>
            Chair<b className="filter-name-number">14</b>
          </p>
          <p onClick={(e) => setSearchInput("table")}>
            Table<b className="filter-name-number">13</b>
          </p>
          <p onClick={(e) => setSearchInput("sofa")}>
            Sofa<b className="filter-name-number">12</b>
          </p>
          <p onClick={(e) => setSearchInput("bed")}>
            Bed<b className="filter-name-number">7</b>
          </p>
          <p onClick={(e) => setSearchInput("shelf")}>
            Shelf<b className="filter-name-number">5</b>
          </p>
          <p onClick={(e) => setSearchInput("desk")}>
            Desk<b className="filter-name-number">2</b>
          </p>
          <p onClick={(e) => setSearchInput("bench")}>
            Bench<b className="filter-name-number">1</b>
          </p>
          <p onClick={(e) => setSearchInput("nightstand")}>
            Nightstand<b className="filter-name-number">3</b>
          </p>
          <p onClick={(e) => setSearchInput("stool")}>
            Stool<b className="filter-name-number">3</b>
          </p>
        </div>
        <div className="filter-price">
          <h4>PRICES</h4>
          <div className="radio">
            <input
              type="radio"
              name="radio"
              id="50"
              onClick={() => setSelectedPrice(50)}
            />
            <label className="radio-label" htmlFor="50">
              UP TO 50$
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="radio"
              id="100"
              onClick={() => setSelectedPrice(100)}
            />
            <label className="radio-label" htmlFor="100">
              UP TO 100$
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="radio"
              id="200"
              onClick={() => setSelectedPrice(200)}
            />
            <label className="radio-label" htmlFor="200">
              UP TO 200$
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="radio"
              id="444"
              onClick={() => setSelectedPrice(400)}
            />
            <label className="radio-label" htmlFor="444">
              UP TO 400$
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="radio"
              id="600"
              onClick={() => setSelectedPrice(600)}
            />
            <label className="radio-label" htmlFor="600">
              UP TO 600$
            </label>
          </div>
          <div className="price-input-div">
            <span>MAX PRICE:</span>
            <input
              className="price-input"
              placeholder=" 25,45..."
              onChange={(e) => setSelectedPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="rating-filter">
          <h4>MINIMUM RATING</h4>
          <StarRating />
        </div>
        <div className="company-filter">
          <h4>COMPANIES</h4>
          <p onClick={() => setQuery({ ...query, company: "ikea" })}>Ikea</p>
          <p onClick={() => setQuery({ ...query, company: "liddy" })}>Liddy</p>
          <p onClick={() => setQuery({ ...query, company: "caressa" })}>
            Caressa
          </p>
          <p onClick={() => setQuery({ ...query, company: "marcos" })}>
            Marcos
          </p>
        </div>
        <div className="featured-filter">
          <h4>AVAILABILITY</h4>
          <p onClick={() => setQuery({ ...query, featured: true })}>
            AVAILABLE
          </p>
          <p onClick={() => setQuery({ ...query, featured: false })}>
            OUT OF STOCK
          </p>
        </div>
      </section>
    </motion.div>
  );
}
