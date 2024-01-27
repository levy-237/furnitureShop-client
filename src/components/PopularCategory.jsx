import { IoBed } from "react-icons/io5";
import { IconContext } from "react-icons";
import { LuArmchair } from "react-icons/lu";
import { GiTable, GiTrophiesShelf } from "react-icons/gi";
import { TbSofa } from "react-icons/tb";
import { BiCabinet } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
export default function HomeCategories() {
  const { setSearchInput } = useContext(Context);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home-categories" id="productGallery">
      <h2>Shop our popular categories</h2>
      <div className="home-categories-div">
        <Link to="shop">
          <section
            onClick={() => {
              setSearchInput("bed");
              scrollToTop();
            }}
          >
            <span>
              <IconContext.Provider value={{ size: "3.5rem" }}>
                <IoBed />
              </IconContext.Provider>
            </span>
            <p>BED</p>
          </section>
        </Link>
        <Link to="shop">
          <section
            onClick={() => {
              setSearchInput("chair");
              scrollToTop();
            }}
          >
            <span>
              <IconContext.Provider value={{ size: "3.5rem" }}>
                <LuArmchair />
              </IconContext.Provider>
            </span>
            <p>CHAIR</p>
          </section>
        </Link>
        <Link to="shop">
          <section
            onClick={() => {
              setSearchInput("table");
              scrollToTop();
            }}
          >
            <span>
              <IconContext.Provider value={{ size: "3.5rem" }}>
                <GiTable />
              </IconContext.Provider>
            </span>
            <p>TABLE</p>
          </section>
        </Link>
        <Link to="shop">
          <section
            onClick={() => {
              setSearchInput("sofa");
              scrollToTop();
            }}
          >
            <span>
              <IconContext.Provider value={{ size: "3.5rem" }}>
                <TbSofa />
              </IconContext.Provider>
            </span>
            <p>SOFA</p>
          </section>
        </Link>
        <Link to="shop">
          <section
            onClick={() => {
              setSearchInput("shelf");
              scrollToTop();
            }}
          >
            <span>
              <IconContext.Provider value={{ size: "3.5rem" }}>
                <GiTrophiesShelf />
              </IconContext.Provider>
            </span>
            <p>SHELF</p>
          </section>
        </Link>
        <Link to="shop">
          <section
            onClick={() => {
              setSearchInput("nightstand");
              scrollToTop();
            }}
          >
            <span>
              <IconContext.Provider value={{ size: "3.5rem" }}>
                <BiCabinet />
              </IconContext.Provider>
            </span>
            <p style={{ fontSize: "small" }}>NIGHTSTAND</p>
          </section>
        </Link>
      </div>
    </div>
  );
}
