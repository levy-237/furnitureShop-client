import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { VscSettings } from "react-icons/vsc";
import { IconContext } from "react-icons";
import FilterModal from "./modals/FilterModal";
export default function Sort({
  query,
  nmProd,
  setQuery,
  setSelectedPrice,
  selectedPrice,
}) {
  const { setSearchInput, setRating, searchInput } = useContext(Context);
  const [button, setButton] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const handleReset = () => {
    setButton(button);
    setQuery("");
    setSelectedPrice("");
    setRating("");
    setSearchInput("");
    const selectElements = document.querySelectorAll("select");
    selectElements.forEach((select) => {
      select.value = "";
    });
    // Resetting the input elements to their default values
    const inputElements = document.querySelectorAll("input");
    inputElements.forEach((input) => {
      input.value = "";
    });
  };
  useEffect(() => {
    handleReset();
  }, [button]);
  return (
    <div className="sorting-div">
      <div
        className="shop-filter-responsive"
        onClick={() => setFilterModal(!filterModal)}
      >
        <h2>Filters</h2>
        <span>
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <VscSettings />
          </IconContext.Provider>
        </span>
      </div>
      {filterModal && (
        <FilterModal
          query={query}
          setQuery={setQuery}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          filterModal={filterModal}
          setModal={setFilterModal}
        />
      )}
      <div className="shop-sort">
        <h2>
          Sort <b>{nmProd}</b> items by{" "}
        </h2>
        <select
          onChange={(e) => setQuery({ ...query, sort: e.target.value })}
          className="shop-select"
        >
          <option defaultValue="" value="">
            DEFAULT OPTION
          </option>
          <option value="rating">RATING ASCENDING</option>
          <option value="-rating">RATING DESCENDING</option>
          <option value="price">PRICE ASCENDING</option>
          <option value="-price">PRICE DESCENDING</option>
        </select>
      </div>
      <p className="reset" onClick={handleReset}>
        RESET
      </p>
    </div>
  );
}
