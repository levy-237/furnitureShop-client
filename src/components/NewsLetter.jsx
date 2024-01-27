import { useState } from "react";
// THIS COMPONENT NEEDS TO BE FINISHED
export default function NewsLetter() {
  const [mail, setMail] = useState("");
  const handleMail = async () => {
    try {
      const data = await axios.post(
        `https://shoop-server-production-4132.up.railway.app/api/v1/products`,
        mail
      );
      setCompanyData(data.data.products);
    } catch (error) {
      console.log(error);
    }
    setMail("");
    const mailInput = document.getElementById("mail");
    mailInput.value = " ";
  };

  return (
    <div className="newsletter-div">
      <h1>JOIN OUR NEWSLETTER</h1>
      <p>
        Be the first to know about our special offers,new products and sales !
      </p>
      <div>
        <input
          id="mail"
          type="mail"
          placeholder="Your Email..."
          onChange={(e) => setMail(e.target.value)}
        />
        <button onClick={handleMail}>SIGN UP</button>
      </div>
    </div>
  );
}
