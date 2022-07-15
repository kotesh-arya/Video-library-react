import React from "react";
// import "../Banner/Banner.css";
import BannerCSS from "../Banner/Banner.module.css";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div>
      <div className={BannerCSS.wrapper}>
        <div className={BannerCSS.banner}></div>
        <div className={BannerCSS["banner-text"]}>
          <h1>The Joy starts Here</h1>
          <Link to="/videolisting">
            <button type="button">GET STARTED</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Banner };
