import React from "react";
import VideocardCSS from "../Videocard/Videocard.module.css";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
// import { MdWatchLater, MdOutlinePlaylistPlay } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useWatchlater } from "../../../contexts/watchlaterContext";
import { useHistory } from "../../../contexts/historyContext";
import { useLikes } from "../../../contexts/likeContext";
import { usePlaylist } from "../../../contexts/playlistContext";

function Videocard({
  id,
  title,
  creator,
  thumbNail,
  logo,
  nonExploreCard,
  playlistId,
  historyCard,
  watchlaterCard,
  likedVideoCard,
}) {
  const { removeFromWatchlater } = useWatchlater();
  const { removeFromHistory } = useHistory();
  const { removeFromLikedVideos } = useLikes();
  const { removeFromPlaylistVideos } = usePlaylist();
  return (
    <div>
      <div className={`card shadow-card ${VideocardCSS["video-card"]}`}>
        {/* <MdDelete className={VideocardCSS["delete-icon"]} /> */}
        {/* <h2>nono</h2> */}
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
            onClick={(e) => {
              e.stopPropagation();
              watchlaterCard && removeFromWatchlater(id);
              historyCard && removeFromHistory(id);
              likedVideoCard && removeFromLikedVideos(id);
              playlistId && removeFromPlaylistVideos(id, playlistId);
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
