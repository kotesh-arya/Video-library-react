import React from "react";
import PlaylistCardCSS from "../PlaylistCard/PlaylistCard.module.css";
function PlaylistCard({ title, imageSource }) {
  return (
    <div
      className={`card text-overlay-card ${PlaylistCardCSS["playlist-card"]}`}
    >
      <div
        className={`absolute-positioned-text ${PlaylistCardCSS["playlist-title"]} `}
      >
        <h3>{title}</h3>
      </div>
      <img
        className={`card-image ${PlaylistCardCSS["playlist-card-image"]} `}
        src={imageSource}
        alt="playlist-category"
      />
    </div>
  );
}

export { PlaylistCard };
