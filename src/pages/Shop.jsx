import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import img5 from "../images/img5.jpeg";
import Filter from "../components/Filter";
import axios from "axios";
import Products from "../components/Products";
import Sort from "../components/Sort";
import { Context } from "../Context";
export default function Shop() {
  ///limit and search left
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({
    sort: "",
    company: "",
    featured: "",
  });
  const [selectedPrice, setSelectedPrice] = useState("");
  ///number of products
  const [nmProd, setNmProd] = useState("");
  const { searchInput, setSearchInput, rating, setRating } =
    useContext(Context);
  const queryString = new URLSearchParams(query).toString();
  const numericFiltersQuery = `numericFilters=price>=${selectedPrice},rating<=${rating}`;
  ///pagination
  const [paginate, setPaginate] = useState(30);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `${
            import.meta.env.VITE_SERVER_URL
          }/api/v1/products?${queryString}&${numericFiltersQuery}&name=${searchInput}&limit=${paginate}`
        );
        setNmProd(data.data.nbHits);
        setData(data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query, numericFiltersQuery, searchInput, paginate]);
  return (
    <div className="shop-page">
      <img
        alt="background-image"
        src={img5}
        loading="lazy"
        className="shopImg"
      ></img>
      <Sort
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        nmProd={nmProd}
        query={query}
        setQuery={setQuery}
      />

      <div className="shop-layout">
        <Filter
          query={query}
          setQuery={setQuery}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />

        <Products
          data={data}
          query={query}
          setQuery={setQuery}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          paginate={paginate}
          nmProd={nmProd}
          setPaginate={setPaginate}
        />
      </div>
    </div>
  );
}
