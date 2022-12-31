import React, { useState } from "react";
import { usePlaylist } from "../../contexts/playlistContext";
import playlistModalCSS from "../PlaylistModal/playlistModal.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function PlaylistModal({ video }) {
  const { playlists } = usePlaylist();
  const {
    closeModal,
    createPlaylist,
    addToPlaylistVideos,
    removeFromPlaylistVideos,
  } = usePlaylist();
  const [playlistTitle, setPlaylistTitle] = useState("");

  const isInPlaylist = (video, playlistId) => {
    return playlists
      .find((playListToFind) => playListToFind._id === playlistId)
      .videos.find((videoInPlaylist) => videoInPlaylist._id === video._id) ===
      undefined
      ? false
      : true;
  };

  return (
    <div className={playlistModalCSS["modal-container"]}>
      <div className={playlistModalCSS.modal}>
        <AiOutlineCloseCircle
          className={playlistModalCSS["close-icon"]}
          onClick={() => {
            closeModal();
          }}
        />
        <h1>PLAYLIST</h1>
        <input
          className={playlistModalCSS["playlist-input"]}
          placeholder="Type playlist name..."
          type="text"
          value={playlistTitle}
          onChange={(e) => {
            setPlaylistTitle(e.target.value);
          }}
        />
        <button
          className={playlistModalCSS["create-btn"]}
          onClick={() => {
            createPlaylist(playlistTitle);
            setPlaylistTitle("");
          }}
        >
          Create
        </button>
        {playlists.map((playlist) => {
          return (
            <div
              key={playlist._id}
              className={playlistModalCSS["playlist-title-container"]}
            >
              <input
                id={playlistModalCSS["playlist-checkbox"]}
                // id="mowa"
                type="checkbox"
                onChange={() =>
                  !isInPlaylist(video, playlist._id)
                    ? addToPlaylistVideos(video, playlist._id)
                    : removeFromPlaylistVideos(video._id, playlist._id)
                }
                checked={isInPlaylist(video, playlist._id)}
              />
              <label
                htmlFor={playlistModalCSS["playlist-checkbox"]}
                //  htmlFor="mowa"
              >
                {" "}
                <h3>{playlist.title}</h3>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { PlaylistModal };
