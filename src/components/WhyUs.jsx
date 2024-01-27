import { IconContext } from "react-icons";
import { FaShippingFast } from "react-icons/fa";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { MdWorkspacePremium } from "react-icons/md";
export default function WhyUs() {
  return (
    <div className="whyUs">
      <h1>why choose us?</h1>
      <div className="whyUsDiv-wrapper">
        <section>
          <span>
            <IconContext.Provider value={{ size: "45px", color: "#87CEEB" }}>
              <FaShippingFast />
            </IconContext.Provider>
          </span>
          <p>FAST & CHEAP SHIPPING</p>
          <p>
            now use Lorem Ipsum as their default model text, and a search for
            'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have.
          </p>
        </section>
        <section>
          <span>
            <IconContext.Provider value={{ size: "45px", color: "green" }}>
              <HiMiniShieldCheck />
            </IconContext.Provider>
          </span>
          <p>WARRANTY PROTECTION</p>
          <p>
            now use Lorem Ipsum as their default model text, and a search for
            'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have.
          </p>
        </section>
        <section>
          <span>
            <IconContext.Provider value={{ size: "45px", color: "#87CEEB" }}>
              <MdWorkspacePremium />
            </IconContext.Provider>
          </span>
          <p>PREMIUM PRODUCTS</p>
          <p>
            now use Lorem Ipsum as their default model text, and a search for
            'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have.
          </p>
        </section>
      </div>
    </div>
  );
}
