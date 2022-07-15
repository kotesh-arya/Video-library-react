import React from "react";
// import "../Footer/Footer.css";
import FooterCSS from "../Footer/Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className={FooterCSS.footer}>
        <div className={FooterCSS["col-2"]}>
          <h3>
            <strong>NEWSLETTER</strong>
          </h3>
          <p>For latest offers and Lightening deals</p>
          <form>
            <input
              type="email"
              placeholder="Enter your Email address"
              required
              id=""
            />
            <br />
            <button type="submit">SUBSCRIBE NOW</button>
            <div className={FooterCSS["social-icons"]}>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaBehance />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Footer };
