import React from "react";
import { usePlaylist } from "../../contexts/playlistContext";
import PlaylistCardCSS from "../PlaylistCard/PlaylistCard.module.css";
import { TbHourglassEmpty } from "react-icons/tb";
import { Link } from "react-router-dom";
function PlaylistCard({ title, imageSource, emptyPlaylist, playlistId }) {
  const { removePlaylist } = usePlaylist();
  return (
    <div
      className={`card text-overlay-card ${PlaylistCardCSS["playlist-card"]}`}
    >
      <div>
        <Link to={`/playlists/${playlistId}`}>
          {" "}
          <h3
            className={`absolute-positioned-text ${PlaylistCardCSS["playlist-title"]} `}
          >
            {title}
          </h3>
        </Link>

        <button
          className={`${PlaylistCardCSS["playlist-delete-btn"]}`}
          onClick={(e) => {
            e.stopPropagation();
            removePlaylist(playlistId);
          }}
        >
          DELETE
        </button>
      </div>
      {imageSource ? (
        // <Link to={`/playlists/${playlistId}`}>

        <img
          className={`card-image ${PlaylistCardCSS["playlist-card-image"]} `}
          src={imageSource}
          alt="playlist-category"
        />
      ) : (
        // </Link>
        <h2 className={` ${PlaylistCardCSS["empty-playlist-title"]} `}>
          Empty Playlist <TbHourglassEmpty />
        </h2>
      )}
    </div>
  );
}

export { PlaylistCard };
