import React from "react";
import VideocardCSS from "../Videocard/Videocard.module.css";
import { GoVerified, GoHeart } from "react-icons/go";
import {MdDelete} from "react-icons/md"
function Videocard() {
  return (
    <div>
      <div className={`card shadow-card ${VideocardCSS["video-card"]}`}>
        <GoHeart className={VideocardCSS["heart-icon"]} />  <MdDelete  className={VideocardCSS["delete-icon"]} />
        <div className={VideocardCSS["image-container"]}>
          <img
            className={VideocardCSS["card-image"]}
            src="https://imgs.search.brave.com/gk8xmCaP71O-KfiQB1vwwOn3FpvAT1188zQZJ03xUvw/rs:fit:1021:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/OFlFOU4wTU8yTk5n/NU1aWUZLM01RSGFE/YyZwaWQ9QXBp"
            alt="shadow-card-img"
          />
        </div>
        <div className={VideocardCSS["card-content"]}>
          <img
            className={VideocardCSS["user-profile"]}
            src="https://yt3.ggpht.com/a/AATXAJyhISGtctxDWPoVl3FHSSVWHGvlXmyIqvubPg=s900-c-k-c0xffffffff-no-rj-mo"
            alt=""
          />
          <div className={VideocardCSS["card-details"]}>
            <h2>Pushpa: The Rise</h2>
            <p>
              Shreyas Media <GoVerified />
            </p>
            <p> 2.2M Views &bull; 1 year Ago </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Videocard };
