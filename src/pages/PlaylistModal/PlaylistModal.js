import React, { useEffect, useState } from "react";
import { usePlaylist } from "../../contexts/playlistContext";
import playlistModalCSS from "../PlaylistModal/playlistModal.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { usePlaylistVideos } from "../../contexts/playlistVideosContext";
function PlaylistModal({ playlists, video }) {
  const {
    closeModal,
    createPlaylist,
    removePlaylist,
    addToPlaylistVideos,
    removeFromPlaylistVideos,
    playlistChecked,
  } = usePlaylist();
  // const {  } = usePlaylistVideos();
  const [playlistTitle, setPlaylistTitle] = useState("");
  // const [playlist, setPlaylist] = useState([]);
  // const handleTask = () => {
  //   setPlaylist((prevtask) => [...prevtask, text]);
  //   setText("");
  // };

  // const handleDelete = (playlistFromBtn) => {
  //   const filteredPlaylist = playlist.filter(
  //     (task) => task !== playlistFromBtn
  //   );
  //   setPlaylist(filteredPlaylist);
  // };
  // useEffect(()=>{},[])
  return (
    <div
      // onClick={() => {
      //   closeModal();
      // }}
      className={playlistModalCSS["modal-container"]}
    >
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
          console.log(playlist._id);
          return (
            <div
              key={playlist._id}
              className={playlistModalCSS["playlist-title-container"]}
            >
              <input
                id={playlistModalCSS["playlist-checkbox"]}
                // id="mowa"
                type="checkbox"
                onChange={(e) => {
                  console.log(`clicked on ${playlist.title}`);
                  e.target.checked
                    ? addToPlaylistVideos(video, playlist._id)
                    : removeFromPlaylistVideos(video._id, playlist._id);
                }}
                checked={playlist.videos.find((v) =>
                  v._id === video._id ? true : false
                )}
                // defaultChecked={false}
                // checked={playlistChecked}
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
