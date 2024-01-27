import { useParams } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import NewsLetter from "../components/NewsLetter";
import { useEffect, useState } from "react";
import ImageToggler from "../components/ImageToggler";
import ProductInfo from "../components/ProductInfo";
import ShopByCompany from "../components/ShopByCompany";
export default function ProductPage() {
  const [data, setData] = useState();
  const { id } = useParams();
  const [currentImg, setCurrentImg] = useState();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `http://localhost:3000/api/v1/products/${id}`
        );
        setData(data.data.product);
        setCurrentImg(data.data.product.image);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [clicked]);
  return (
    <>
      {data ? (
        <div className="singleProduct-page">
          <div className="singleProduct-layout">
            <ImageToggler currentImg={currentImg} image={data.image} />
            <ProductInfo data={data} />
          </div>
          <ShopByCompany
            currentCompany={data.company}
            setClicked={setClicked}
            clicked={clicked}
          />
          <NewsLetter />
        </div>
      ) : (
        <h1>NO PROUCT WITH THIS ID</h1>
      )}
    </>
  );
}
