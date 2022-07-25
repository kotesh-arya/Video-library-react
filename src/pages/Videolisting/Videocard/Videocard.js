import React from "react";
import VideocardCSS from "../Videocard/Videocard.module.css";
import { GoVerified } from "react-icons/go";
import { MdWatchLater, MdOutlinePlaylistPlay } from "react-icons/md";
import axios from "axios";
// import { AiFillLike } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
function Videocard({ title, creator, thumbNail, logo }) {
  const addToWatchLater = async (video) => {
    const encodedToken = JSON.parse(localStorage.getItem("JWT_TOKEN"));
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: { authorization: encodedToken },
      }
    );
    console.log(response);
  };
  return (
    <div>
      <div className={`card shadow-card ${VideocardCSS["video-card"]}`}>
        {/* <MdDelete className={VideocardCSS["delete-icon"]} /> */}
        <div className={VideocardCSS["image-container"]}>
          <img
            className={VideocardCSS["card-image"]}
            src={thumbNail}
            alt="thumbnail"
          />
        </div>
        <div className={VideocardCSS["card-content"]}>
          <div className={VideocardCSS["card-details"]}>
            <img className={VideocardCSS["user-profile"]} src={logo} alt="" />
            {/* <h4>{title.length > 16 ? `${title.substr(0, 16)}...` : title}</h4>{" "} */}
            <div className="text-content">
              <p>{title}</p>
              <p className={VideocardCSS["creator-title"]}>
                {creator} <GoVerified />
              </p>
              <p className={VideocardCSS["views-period"]}>
                {" "}
                2.2M Views &bull; 1 year Ago{" "}
              </p>
            </div>
          </div>
          <div className={VideocardCSS.icons}>
            <MdWatchLater
              className={VideocardCSS["watch-later-icon"]}
              onClick={() => {
                addToWatchLater({
                  title,
                  creator,
                  thumbNail,
                  logo,
                });
              }}
            />{" "}
            <MdOutlinePlaylistPlay
              className={VideocardCSS["add-playlist-icon"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Videocard };
