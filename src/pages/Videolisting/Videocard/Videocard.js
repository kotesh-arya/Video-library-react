import React from "react";
import VideocardCSS from "../Videocard/Videocard.module.css";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
// import { MdWatchLater, MdOutlinePlaylistPlay } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useWatchlater } from "../../../contexts/watchlaterContext";
import { useHistory } from "../../../contexts/historyContext";
import { useLikes } from "../../../contexts/likeContext";

function Videocard({ id, title, creator, thumbNail, logo, nonExploreCard }) {
  const { removeFromWatchlater } = useWatchlater();
  const { removeFromHistory } = useHistory();
  const { removeFromLikedVideos } = useLikes();
  return (
    <div>
      <div className={`card shadow-card ${VideocardCSS["video-card"]}`}>
        {/* <MdDelete className={VideocardCSS["delete-icon"]} /> */}
        <div className={VideocardCSS["image-container"]}>
          {/* <Link to={`/videos/${id}`}> */}
          <img
            className={VideocardCSS["card-image"]}
            src={thumbNail}
            alt="thumbnail"
          />
          {/* </Link> */}
        </div>
        <Link to={`/videos/${id}`}>
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
            {/* <div className={VideocardCSS.icons}>
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
          </div> */}
          </div>
        </Link>
        {nonExploreCard ? (
          <button
            onClick={() => {
              removeFromWatchlater(id);
              removeFromHistory(id);
              removeFromLikedVideos(id);
            }}
            className={VideocardCSS["delete-icon"]}
          >
            {" "}
            <MdDelete />
            {/* Remove */}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export { Videocard };
