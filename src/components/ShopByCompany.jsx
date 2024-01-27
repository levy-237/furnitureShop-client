import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
export default function ShopByCompany({ currentCompany, setClicked, clicked }) {
  const [companyData, setCompanyData] = useState();
  const { starReviewDisplay } = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `http://localhost:3000/api/v1/products?company=${currentCompany}&limit=4`
        );
        setCompanyData(data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const handleLink = () => {
    scrollToTop();
    setClicked(!clicked);
  };
  return (
    <>
      <span className="company-span">
        MORE PRODUCTS BY {currentCompany.toUpperCase()}
      </span>

      <div className="company-layout">
        {companyData &&
          companyData.map((product, i) => (
            <div key={i}>
              <Link to={`/shop/${product._id}`}>
                <div key={i} className="company-div" onClick={handleLink}>
                  <img src={product.image} alt="productImg" loading="lazy" />
                  <section>
                    <h1>{product.name.toUpperCase()}</h1>
                    <span>{product.featured}</span>
                    <strong>
                      {starReviewDisplay(product.rating, 17, "black")}
                    </strong>
                    <p>{product.price} EUR</p>
                  </section>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
