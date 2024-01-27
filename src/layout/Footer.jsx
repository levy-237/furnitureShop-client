import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IconContext } from "react-icons";
export function Footer() {
  const [mail, setMail] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMail(true);
    const mailInput = document.getElementById("footerMail");
    mailInput.value = "";
  };
  return (
    <footer className="footer">
      <div className="footer-socials">
        <span>
          <IconContext.Provider
            value={{
              size: "30px",
            }}
          >
            <FaFacebookSquare />
          </IconContext.Provider>
        </span>
        <span>
          <IconContext.Provider
            value={{
              size: "30px",
            }}
          >
            <CiInstagram />
          </IconContext.Provider>
        </span>
        <span>
          <IconContext.Provider
            value={{
              size: "30px",
            }}
          >
            <CiYoutube />
          </IconContext.Provider>
        </span>
        <span>
          <IconContext.Provider
            value={{
              size: "30px",
            }}
          >
            <CiLinkedin />
          </IconContext.Provider>
        </span>
        <span>
          <IconContext.Provider
            value={{
              size: "30px",
            }}
          >
            <FaTiktok />
          </IconContext.Provider>
        </span>
        <span>
          <IconContext.Provider
            value={{
              size: "30px",
            }}
          >
            <FaPinterest />
          </IconContext.Provider>
        </span>
      </div>
      <form className="footer-mail" onSubmit={handleSubmit}>
        {!mail ? (
          <label className="footerMailLabel">
            Join our community to unlock your creativity and save money on your
            first order
          </label>
        ) : (
          <label className="mailSent">
            Thank you for claiming the deal ! <br />
            Promo code will be available in few minutes
          </label>
        )}
        <section>
          <input placeholder="Enter your email" id="footerMail" />
          <button type="submit">CLAIM</button>
        </section>
      </form>
      <div className="footer-row">
        <section>
          <h5>BUY FURNITURE</h5>
          <p>BEDS</p>
          <p>CHAIRS</p>
          <p>COUCHES</p>
          <p>NIGHSTAND</p>
        </section>
        <section>
          <h5>TOP BRANDS</h5>
          <p>IKEA</p>
          <p>LIDDY</p>
          <p>MARCOS</p>
          <p>CARESSA</p>
        </section>
        <section>
          <h5>OUR STORY</h5>
          <p>ABOUT</p>
          <p>CREATOR'S MISSION</p>
          <p>WORKING</p>
        </section>
      </div>
      <div className="footer-SecondRow">
        <section>
          <h5>GET INVOLVED</h5>
          <p>BECOME A MEMBER</p>
          <p>AFFILATES</p>
          <p>CONTACT US</p>
          <p>SELL</p>
        </section>

        <section>
          <h5>SUPPORT</h5>
          <p>GUIDES</p>
          <p>GETTING STARTED</p>
          <p>RETURNS</p>
          <p>ACCESSIBILITY</p>
        </section>
      </div>
    </footer>
  );
}
