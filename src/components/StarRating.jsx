import { useState, useContext } from "react";
import { Context } from "../Context";
export default function App() {
  const { rating, setRating } = useContext(Context);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  const handleChange = (e) => {
    setTotalStars(parseInt(e.target.value, 10));
  };
  return (
    <div className="App">
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
}
