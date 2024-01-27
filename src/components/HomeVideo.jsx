import video1 from "../images/video1.mp4";
import { Link } from "react-router-dom";
import { RxDoubleArrowDown } from "react-icons/rx";
import { IconContext } from "react-icons";
import { HashLink } from "react-router-hash-link";

export default function HomeVideo() {
  return (
    <>
      <video loading="lazy" src={video1} autoPlay muted></video>
      <div className="wrapper">
        <div className="typing-demo">
          Refined <br /> Luxury
        </div>
      </div>
      <p className="home-link">
        <Link to="/shop">- Visit Shop</Link>
      </p>
      <HashLink to="#productGallery" smooth>
        <p className="home-arrow">
          <IconContext.Provider value={{ size: "35px" }}>
            <RxDoubleArrowDown />
          </IconContext.Provider>
        </p>
      </HashLink>
    </>
  );
}
