import { useState } from "react";
import { FAQdata } from "../Helpers/mockDatas/FAQjson";
import { IoChevronDownSharp } from "react-icons/io5";

export default function FAQ() {
  const [clickedFaq, setClickedFaq] = useState(null);

  const handleClick = (i) => {
    if (i == clickedFaq) {
      return setClickedFaq(null);
    }
    setClickedFaq(i);
  };
  return (
    <div className="faq-layout">
      <h1>FAQs</h1>
      {FAQdata.faq.map((obj, i) => (
        <div key={i} className="faq-div">
          <p onClick={() => handleClick(i)}>
            {obj.question}
            <span>
              <IoChevronDownSharp />
            </span>
          </p>
          {clickedFaq === i && <p>{obj.answer}</p>}
        </div>
      ))}
    </div>
  );
}
