import React from "react";
import HorizontalcardCSS from "../HorizontalCard/Horizontalcard.module.css";
function HorizontalCard({ title, creator, thumbNail, logo }) {
  return (
    <div className={` ${HorizontalcardCSS["suggestion-card"]}`}>
      <div className={HorizontalcardCSS["image-container"]}>
        <img
          className={HorizontalcardCSS["card-image"]}
          src={thumbNail}
          alt="horizontal"
        />
      </div>
      <div className={HorizontalcardCSS["card-content"]}>
        <h4 className={HorizontalcardCSS["card-title"]}>{title}</h4>

        <div className={HorizontalcardCSS["content-footer"]}>
          <img
            className={HorizontalcardCSS["user-profile"]}
            src={logo}
            alt=""
          />
          <p>{creator}</p>
        </div>
      </div>
    </div>
  );
}

export { HorizontalCard };
