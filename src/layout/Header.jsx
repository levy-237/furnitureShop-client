import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../Context";
import { GiFamilyHouse, GiHamburgerMenu } from "react-icons/gi";
import { PiMediumLogoDuotone } from "react-icons/pi";
import { IoBagAddOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import BurgerMenu from "../components/modals/BurgerMenu";
import { IconContext } from "react-icons";
export function Header() {
  const { searchInput, setSearchInput } = useContext(Context);
  const location = useLocation();
  const [burgerModal, setBurgerModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 70) {
      setScrolled(true);
    } else if (currentScroll < 70) {
      setScrolled(false);
    }
  };
  const cartItems = localStorage.getItem("id");
  useEffect(() => {
    if (location.pathname == "/shop") {
      setSearch(true);
    } else {
      setSearch(false);
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);
  return (
    <header className={`header ${scrolled ? `scrolled` : ``}`}>
      <Link>
        <h1>
          <IconContext.Provider value={{ size: "40px" }}>
            <PiMediumLogoDuotone />
          </IconContext.Provider>
          <span>name</span>
        </h1>
      </Link>

      {search ? (
        <input
          className="searchInput"
          placeholder="Search for the product.."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      ) : null}
      <div style={{ display: "flex", alignItems: "end" }}>
        <span className="header-links">
          <Link>HOME</Link>
          <Link>ABOUT</Link>
          <Link>SMTH</Link>
        </span>
        <span className="header-cart">
          <Link to="cart">
            {cartItems === null || cartItems.length < 1 ? (
              <IconContext.Provider
                value={{
                  size: "30px",
                  marginTop: "5px",
                  color: burgerModal ? "transparent" : "black",
                }}
              >
                <IoBagAddOutline />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ size: "30px" }}>
                <IoBag />
              </IconContext.Provider>
            )}
          </Link>
        </span>

        <span
          className="burger-menu"
          onClick={() => setBurgerModal(true)}
          style={{ color: burgerModal ? "transparent" : "black" }}
        >
          <IconContext.Provider value={{ size: "35px" }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </span>

        {burgerModal ? (
          <BurgerMenu
            burgerModal={burgerModal}
            setBurgerModal={setBurgerModal}
          />
        ) : null}
      </div>
    </header>
  );
}
