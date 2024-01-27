import { IoStarSharp } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
export const starReviewDisplay = (review, starSize = 17, color = "black") => {
  if (review <= 2) {
    return (
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <IconContext.Provider
          value={{ size: `${starSize}px`, color: `${color}` }}
        >
          <IoStarSharp />
          <IoStarSharp />
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
        </IconContext.Provider>
      </div>
    );
  } else if (review <= 2.5) {
    return (
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <IconContext.Provider
          value={{ size: `${starSize}px`, color: `${color}` }}
        >
          <IoStarSharp />
          <IoStarSharp />
          <IoStarHalf />
          <IoStarOutline />
          <IoStarOutline />
        </IconContext.Provider>
      </div>
    );
  } else if (review <= 3) {
    return (
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <IconContext.Provider
          value={{ size: `${starSize}px`, color: `${color}` }}
        >
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarOutline />
          <IoStarOutline />
        </IconContext.Provider>
      </div>
    );
  } else if (review <= 3.5) {
    return (
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <IconContext.Provider
          value={{ size: `${starSize}px`, color: `${color}` }}
        >
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarHalf />
          <IoStarOutline />
        </IconContext.Provider>
      </div>
    );
  } else if (review <= 4) {
    return (
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <IconContext.Provider
          value={{ size: `${starSize}px`, color: `${color}` }}
        >
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarOutline />
        </IconContext.Provider>
      </div>
    );
  } else if (review <= 4.9) {
    return (
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <IconContext.Provider
          value={{ size: `${starSize}px`, color: `${color}` }}
        >
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarHalf />
        </IconContext.Provider>
      </div>
    );
  } else if (review === 5) {
    return (
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <IconContext.Provider
          value={{ size: `${starSize}px`, color: `${color}` }}
        >
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </IconContext.Provider>
      </div>
    );
  }
};
